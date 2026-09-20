import { Lock, Sparkles, Tag, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Lock,
    title: 'Private Experience',
    text: 'Your Jacuzzi and treatment room are reserved for your experience.',
  },
  {
    icon: Sparkles,
    title: 'Professional Therapists',
    text: 'Relax with experienced professional massage therapists.',
  },
  {
    icon: Tag,
    title: 'Clear Pricing',
    text: 'No need to request a quote — packages start from AED 640 for two.',
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    text: 'Right in Dubai Media City.',
  },
];

export default function WhyZeerlaSection() {
  return (
    <section className="bg-zeerla-900 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 text-center reveal sm:mb-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold-300">
            Why Zeerla
          </p>
          <h2 className="font-serif text-4xl font-medium text-white sm:text-5xl">
            Why Couples Choose Zeerla
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="reveal text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold-300/30 bg-white/5 sm:h-16 sm:w-16">
                <Icon className="h-7 w-7 text-gold-300" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-serif text-xl font-medium text-white">
                {title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-white/70">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
