import { Waves, HandHeart, DoorOpen, MapPin } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';

const items = [
  {
    icon: Waves,
    title: 'Private Jacuzzi',
    text: 'Relax together and enjoy your own private Jacuzzi experience.',
  },
  {
    icon: HandHeart,
    title: 'Couples Massage',
    text: 'Unwind side by side with professional therapists in your private massage room.',
  },
  {
    icon: DoorOpen,
    title: 'Your Own Private Space',
    text: 'Enjoy the experience comfortably together without sharing your room or Jacuzzi with other guests.',
  },
  {
    icon: MapPin,
    title: 'Dubai Media City',
    text: 'Conveniently located at Zeerla Spa, Concord Tower, Dubai Media City.',
  },
];

export default function IncludedSection() {
  return (
    <section id="included" className="bg-zeerla-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 text-center reveal sm:mb-12">
          <p className="eyebrow mb-4">Inclusions</p>
          <h2 className="section-heading">What's Included</h2>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="reveal group rounded-2xl border border-zeerla-100 bg-white p-5 sm:p-7 transition-all duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-zeerla-900/5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-zeerla-50 transition-colors duration-300 group-hover:bg-gold-100 sm:h-14 sm:w-14">
                <Icon className="h-7 w-7 text-gold-600" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-serif text-xl font-medium text-zeerla-900">
                {title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-zeerla-600">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center reveal sm:mt-12">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}
