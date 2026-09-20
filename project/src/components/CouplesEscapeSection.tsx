import { Calendar, MessageCircle } from 'lucide-react';
import { BOOKING_URL, WHATSAPP_URL } from '@/lib/constants';

export default function CouplesEscapeSection() {
  return (
    <section className="relative overflow-hidden bg-zeerla-900 py-20 sm:py-28">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-zeerla-700/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="reveal">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold-300">
            For Two
          </p>
          <h2 className="mb-6 font-serif text-4xl font-medium text-white sm:text-5xl">
            Your Couples Escape in Dubai
          </h2>
          <p className="mb-8 text-base font-light leading-relaxed text-white/75">
            Whether you're celebrating something special or simply want some
            time together, enjoy a private Jacuzzi and couples massage
            experience designed just for two.
          </p>

          {/* Pricing */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <div className="rounded-2xl border border-gold-300/30 bg-white/5 px-8 py-4 backdrop-blur-sm">
              <span className="block text-xs font-medium uppercase tracking-wider text-gold-300">
                90 Minutes
              </span>
              <span className="font-serif text-3xl font-semibold text-white">
                AED 640{' '}
                <span className="text-base font-light text-white/60">
                  for Two
                </span>
              </span>
            </div>
            <div className="hidden h-12 w-px bg-white/20 sm:block" />
            <div className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 backdrop-blur-sm">
              <span className="block text-xs font-medium uppercase tracking-wider text-white/60">
                120 Minutes
              </span>
              <span className="font-serif text-3xl font-semibold text-white">
                AED 800{' '}
                <span className="text-base font-light text-white/60">
                  for Two
                </span>
              </span>
            </div>
          </div>

          {/* CTAs */}
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
        </div>
      </div>
    </section>
  );
}
