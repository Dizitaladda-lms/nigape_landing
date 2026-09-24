import { NextResponse } from 'next/server';

// CRM endpoint and related configuration are read from environment variables.
// Fallback values are provided for local development.
const DIZITALADDA_CRM_ENDPOINT = process.env.DIZITALADDA_CRM_ENDPOINT || 'https://dizitaladda-crm.onrender.com/api/public/leads';
const CRM_DOMAIN = process.env.CRM_DOMAIN || 'Nigape';
const CRM_COURSE = process.env.CRM_COURSE || 'Generative AI & Autonomous AI Agents';

export async function POST(request) {
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

    const cleanPhone = String(phone).replace(/\\D/g, '').slice(-10);

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
      const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout for Render cold starts

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
    } catch (crmErr) {
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
  } catch (err) {
    console.error('Nigape lead processing error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err.message },
      { status: 500 }
    );
  }
}
