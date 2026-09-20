import { Calendar, MessageCircle } from 'lucide-react';
import { BOOKING_URL, WHATSAPP_URL, HERO_IMAGE } from '@/lib/constants';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Couple relaxing together in a private Jacuzzi at Zeerla Spa Dubai"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zeerla-900/70 via-zeerla-900/50 to-zeerla-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-zeerla-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-24 pb-32 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold-300 sm:text-sm">
            Zeerla Spa · Dubai Media City
          </p>

          <h1 className="mb-5 font-serif text-4xl font-medium leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
            Private Couples Jacuzzi &amp; Massage in Dubai
          </h1>

          <p className="mb-7 max-w-xl text-base font-light leading-relaxed text-white/85 sm:text-lg">
            Relax, reconnect and enjoy a private spa experience together at
            Zeerla Spa in Dubai Media City.
          </p>

          {/* Inclusions */}
          <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-light text-white/90">
            <span className="rounded-full border border-gold-300/40 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              Private Jacuzzi
            </span>
            <span className="text-gold-300">•</span>
            <span className="rounded-full border border-gold-300/40 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              Couples Massage
            </span>
            <span className="text-gold-300">•</span>
            <span className="rounded-full border border-gold-300/40 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              Private Room
            </span>
          </div>

          {/* Offer */}
          <div className="mb-8 inline-flex flex-col rounded-2xl border border-gold-300/30 bg-zeerla-900/40 px-6 py-4 backdrop-blur-md">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
              90 Minutes
            </span>
            <span className="font-serif text-3xl font-semibold text-white sm:text-4xl">
              AED 640 <span className="text-lg font-light text-white/70">for Two</span>
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
              Ask on WhatsApp
            </a>
          </div>

          <p className="mt-5 text-sm font-light text-white/60">
            120-minute experience also available.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-gold-300" />
        </div>
      </div>
    </section>
  );
}
