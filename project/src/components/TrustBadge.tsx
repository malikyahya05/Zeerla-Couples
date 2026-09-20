import { Star } from 'lucide-react';

export default function TrustBadge() {
  return (
    <section className="border-b border-zeerla-100 bg-zeerla-50 py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-5 sm:flex-row sm:gap-3 sm:px-8">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-gold-400 text-gold-400"
              />
            ))}
          </div>
          <span className="text-sm font-medium text-zeerla-800">
            4.8/5 on Google
          </span>
        </div>
        <span className="text-sm font-light text-zeerla-600">
          Rated 4.8 stars by our guests, with 432 Google reviews.
        </span>
      </div>
    </section>
  );
}
