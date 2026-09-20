import { Calendar, MessageCircle } from 'lucide-react';
import { BOOKING_URL, WHATSAPP_URL, ADDRESS } from '@/lib/constants';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-zeerla-950 py-24 sm:py-32">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="reveal">
          <h2 className="mb-4 font-serif text-4xl font-medium text-white text-balance sm:text-5xl">
            Make Time for the Two of You
          </h2>
          <p className="mb-2 text-base font-light text-white/70">
            Private Jacuzzi + Couples Massage
          </p>
          <p className="mb-8 font-serif text-2xl font-medium text-gold-300">
            90 Minutes — AED 640 for Two
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Calendar className="h-4 w-4" />
              Book Your Experience
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white backdrop-blur transition-all duration-300 hover:border-white/50 hover:bg-white/20 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <p className="mt-8 text-sm font-light text-white/50">
            {ADDRESS.line1} — {ADDRESS.line2}
          </p>
        </div>
      </div>
    </section>
  );
}
