import Image from "next/image";

const PHONE_E164 = "+917428114918";
const PHONE_WA = "917428114918";

export default function FloatingContactButtons() {
  const whatsappHref = `https://wa.me/${PHONE_WA}`;
  const callHref = `tel:${PHONE_E164}`;

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="relative h-7 w-7 sm:h-8 sm:w-8">
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            fill
            className="object-contain"
          />
        </span>
      </a>

      {/* Phone Call Button */}
      <a
        href={callHref}
        aria-label="Call Admissions"
        title="Call: +91 74281 14918"
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#9234eb] to-[#FF40EB] text-white shadow-[0_4px_20px_rgba(255,64,235,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="relative h-6 w-6 sm:h-7 sm:w-7">
          <Image
            src="/phonefinal.png"
            alt="Call"
            fill
            className="object-contain brightness-0 invert"
          />
        </span>
      </a>
    </div>
  );
}
