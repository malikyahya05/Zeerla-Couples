import { MapPin, Clock, Navigation } from 'lucide-react';
import { GOOGLE_MAPS_URL, ADDRESS, HOURS } from '@/lib/constants';

export default function LocationSection() {
  return (
    <section id="location" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <div className="reveal">
            <p className="eyebrow mb-4">Location</p>
            <h2 className="section-heading mb-6">
              Visit Zeerla Spa in Dubai Media City
            </h2>

            <div className="mb-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <p className="text-base font-medium text-zeerla-900">
                    {ADDRESS.line1}
                  </p>
                  <p className="text-sm font-light text-zeerla-600">
                    {ADDRESS.line2}
                  </p>
                  <p className="text-sm font-light text-zeerla-600">
                    {ADDRESS.line3}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
                <p className="text-sm font-light text-zeerla-600">{HOURS}</p>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>

          {/* Map embed */}
          <div className="reveal overflow-hidden rounded-2xl border border-zeerla-100 shadow-sm">
            <div className="relative w-full" style={{ aspectRatio: '4 / 3' }}>
              <iframe
                title="Zeerla Spa location map — Concord Tower, Dubai Media City"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5226.791644628438!2d55.156295699999994!3d25.097809199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bea5cd26c53%3A0x3c36b431450f0e5a!2sZeerla%20Spa!5e1!3m2!1sen!2s!4v1789745468643!5m2!1sen!2s"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
