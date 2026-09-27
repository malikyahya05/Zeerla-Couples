import { Clock } from 'lucide-react';
import { BOOKING_URL, SECTION_IMAGES } from '@/lib/constants';

export default function PackageSection() {
  return (
    <section id="packages" className="bg-cream py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 text-center reveal sm:mb-12">
          <p className="eyebrow mb-4">Packages</p>
          <h2 className="section-heading">Choose Your Experience</h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Primary package — visually dominant */}
          <div className="reveal relative overflow-hidden rounded-2xl border-2 border-gold-400 bg-white shadow-xl shadow-gold-500/10">
            <div className="absolute right-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zeerla-900">
              Most Popular
            </div>
            <div className="relative h-44 overflow-hidden">
              <img
                src={SECTION_IMAGES.jacuzzi}
                alt="Couple relaxing in a private Jacuzzi at Zeerla Spa"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zeerla-900/70 to-transparent" />
            </div>
            <div className="p-7">
              <div className="mb-2 flex items-center gap-2 text-gold-600">
                <Clock className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  90 Minutes
                </span>
              </div>
              <h3 className="mb-1 font-serif text-2xl font-medium text-zeerla-900">
                Couples Experience
              </h3>
              <div className="mb-5">
                <span className="font-serif text-4xl font-semibold text-zeerla-900">
                  AED 640
                </span>
                <span className="text-base font-light text-zeerla-500">
                  {' '}
                  for Two
                </span>
              </div>
              <ul className="mb-6 space-y-2 text-sm font-light text-zeerla-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  60-minute couples massage
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  30-minute private Jacuzzi
                </li>
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Book 90 Minutes
              </a>
            </div>
          </div>

          {/* Secondary package */}
          <div className="reveal relative overflow-hidden rounded-2xl border border-zeerla-100 bg-white shadow-sm transition-all duration-300 hover:border-zeerla-200 hover:shadow-md">
            <div className="relative h-44 overflow-hidden">
              <img
                src={SECTION_IMAGES.massage}
                alt="Couples massage in a private treatment room at Zeerla Spa"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zeerla-900/70 to-transparent" />
            </div>
            <div className="p-7">
              <div className="mb-2 flex items-center gap-2 text-gold-600">
                <Clock className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  120 Minutes
                </span>
              </div>
              <h3 className="mb-1 font-serif text-2xl font-medium text-zeerla-900">
                Couples Experience
              </h3>
              <div className="mb-5">
                <span className="font-serif text-4xl font-semibold text-zeerla-900">
                  AED 800
                </span>
                <span className="text-base font-light text-zeerla-500">
                  {' '}
                  for Two
                </span>
              </div>
              <ul className="mb-4 space-y-2 text-sm font-light text-zeerla-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  75-minute couples massage
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  45-minute private Jacuzzi
                </li>
              </ul>
              <p className="mb-6 text-xs font-light leading-relaxed text-zeerla-500">
                The 120-minute experience can be customized between massage and
                Jacuzzi time based on the couple’s preference.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                Book 120 Minutes
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
