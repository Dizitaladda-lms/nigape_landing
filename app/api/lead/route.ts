import { NextResponse } from 'next/server';

// CRM endpoint and related configuration are read from environment variables.
// Fallback values point directly to the live CRM production endpoint.
const DIZITALADDA_CRM_ENDPOINT =
  process.env.DIZITALADDA_CRM_ENDPOINT ||
  process.env.CRM_ENDPOINT ||
  'https://leads.dizitaladda.com/api/public/leads';
const CRM_DOMAIN = process.env.CRM_DOMAIN || 'Nigape';
const CRM_COURSE = process.env.CRM_COURSE || 'Generative AI & Autonomous AI Agents';

// Rate Limiter: Max 2 leads per 1 minute (60 seconds) from the same device / client
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 60 seconds
const MAX_REQUESTS_PER_MINUTE = 2; // Max 2 leads per minute

function checkRateLimit(key: string): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  const history = (rateLimitMap.get(key) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (history.length >= MAX_REQUESTS_PER_MINUTE) {
    const oldestTimestamp = history[0];
    const retryAfter = Math.max(1, Math.ceil((oldestTimestamp + RATE_LIMIT_WINDOW_MS - now) / 1000));
    rateLimitMap.set(key, history);
    return { limited: true, retryAfter };
  }

  history.push(now);
  rateLimitMap.set(key, history);

  // Periodically cleanup expired entries if map gets too large
  if (rateLimitMap.size > 2000) {
    rateLimitMap.forEach((timestamps, k) => {
      const active = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        rateLimitMap.delete(k);
      } else {
        rateLimitMap.set(k, active);
      }
    });
  }

  return { limited: false, retryAfter: 0 };
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      fullName,
      email,
      phone,
      experience,
      learningMode,
      goal,
      source,
      deviceId,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      landing_page_url,
      timestamp
    } = data;

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Full name and Phone number are required' },
        { status: 400 }
      );
    }

    const cleanPhone = String(phone).replace(/\D/g, '').slice(-10);
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: 'Invalid 10-digit mobile number' },
        { status: 400 }
      );
    }

    // Identify client device by IP and optional deviceId
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : (request.headers.get('x-real-ip') || '127.0.0.1');
    const deviceKey = deviceId ? `${clientIp}_${deviceId}` : clientIp;

    // Check rate limit by device/IP and by phone number (Max 2 requests per 60s)
    const deviceCheck = checkRateLimit(deviceKey);
    const phoneCheck = checkRateLimit(`phone_${cleanPhone}`);

    if (deviceCheck.limited || phoneCheck.limited) {
      const waitSeconds = Math.max(deviceCheck.retryAfter, phoneCheck.retryAfter);
      return NextResponse.json(
        {
          error: `Rate limit: 1 minute ke andar same device se bas 2 leads submit ho sakti hain. Kripya ${waitSeconds} seconds baad try karein.`,
          retryAfter: waitSeconds,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(waitSeconds),
          },
        }
      );
    }

    // Map source strictly to accepted CRM enums ('META', 'GOOGLE', 'LANDING_PAGE', 'WEBSITE')
    let crmSource = 'LANDING_PAGE';
    if (utm_source) {
      const lower = utm_source.toLowerCase();
      if (lower.includes('fb') || lower.includes('meta') || lower.includes('instagram') || lower.includes('ig')) {
        crmSource = 'META';
      } else if (lower.includes('google') || lower.includes('adwords') || lower.includes('gads')) {
        crmSource = 'GOOGLE';
      }
    }

    // Payload formatted strictly to dizitaladda-crm specifications
    const crmPayload = {
      fullName: fullName.trim(),
      phone: cleanPhone,
      mobile: cleanPhone,
      email: email && email.trim() ? email.trim() : `${cleanPhone}@${CRM_DOMAIN.toLowerCase()}.com`,
      domain: CRM_DOMAIN,
      interested_course: CRM_COURSE,
      source: crmSource,
      landing_page_url: landing_page_url || 'https://www.nigape.com',
      utm_source: utm_source || undefined,
      utm_medium: utm_medium || undefined,
      utm_campaign: utm_campaign || undefined,
      utm_content: utm_content || undefined,
      utm_term: utm_term || undefined,
      remarks: `Profile: ${experience || 'N/A'} | Goal: ${goal || 'Counseling'} | Form: ${source || 'Lead Page'}`,
    };

    console.log('[NIGAPE -> CRM FORWARDING]:', crmPayload);

    let crmResponseData = null;
    let crmStatus = null;
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000); // 25s timeout for reliable forwarding

      const crmRes = await fetch(DIZITALADDA_CRM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(crmPayload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      crmStatus = crmRes.status;
      crmResponseData = await crmRes.json().catch(() => null);
      console.log('[CRM RESPONSE]:', crmStatus, crmResponseData);
    } catch (crmErr: any) {
      console.error('[CRM FORWARDING ERROR]:', crmErr.message || crmErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      crmStatus,
      crmResponse: crmResponseData,
      lead: {
        fullName,
        phone: cleanPhone,
        domain: CRM_DOMAIN,
        source: crmSource,
        timestamp: timestamp || new Date().toISOString(),
      },
    });
  } catch (err: any) {
    console.error('Nigape lead processing error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err.message },
      { status: 500 }
    );
  }
}
