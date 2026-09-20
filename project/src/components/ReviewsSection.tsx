import { Star, Quote } from 'lucide-react';
import { REVIEWS, BOOKING_URL } from '@/lib/constants';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center reveal">
          <p className="eyebrow mb-4">Reviews</p>
          <h2 className="section-heading mb-4">Loved by Our Guests</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-gold-400 text-gold-400"
                />
              ))}
            </div>
            <span className="text-sm font-light text-zeerla-600">
              Google Reviews
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="reveal flex flex-col rounded-2xl border border-zeerla-100 bg-white p-7 shadow-sm"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="mb-4 h-8 w-8 text-gold-300" />
              <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-zeerla-700">
                {review.text}
              </p>
              <div className="flex items-center gap-3 border-t border-zeerla-50 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zeerla-50 font-serif text-lg font-medium text-zeerla-700">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-zeerla-900">
                    {review.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            See Available Times
          </a>
        </div>
      </div>
    </section>
  );
}
