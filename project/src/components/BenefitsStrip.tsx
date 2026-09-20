import { Waves, HandHeart, DoorOpen, MapPin } from 'lucide-react';

const benefits = [
  { icon: Waves, label: 'Private Jacuzzi' },
  { icon: HandHeart, label: 'Couples Massage' },
  { icon: DoorOpen, label: 'Private Room' },
  { icon: MapPin, label: 'Dubai Media City' },
];

export default function BenefitsStrip() {
  return (
    <section className="border-b border-zeerla-100 bg-zeerla-50 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {benefits.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 text-center md:flex-col md:gap-2"
            >
              <Icon className="h-6 w-6 shrink-0 text-gold-600" strokeWidth={1.5} />
              <span className="text-sm font-medium tracking-wide text-zeerla-800">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
