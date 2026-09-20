import { useEffect, useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { BOOKING_URL, ADDRESS } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zeerla-900/95 py-3 shadow-lg shadow-zeerla-900/20 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2" aria-label="Zeerla Spa home">
          <span className="font-serif text-2xl font-semibold tracking-wide text-white">
            Zeerla
          </span>
          <span className="hidden text-xs font-light uppercase tracking-[0.3em] text-gold-300 sm:inline">
            Spa
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#experience"
            className="text-sm font-light tracking-wide text-white/80 transition-colors hover:text-gold-300"
          >
            Experience
          </a>
          <a
            href="#packages"
            className="text-sm font-light tracking-wide text-white/80 transition-colors hover:text-gold-300"
          >
            Packages
          </a>
          <a
            href="#reviews"
            className="text-sm font-light tracking-wide text-white/80 transition-colors hover:text-gold-300"
          >
            Reviews
          </a>
          <a
            href="#location"
            className="text-sm font-light tracking-wide text-white/80 transition-colors hover:text-gold-300"
          >
            Location
          </a>
          <a
            href="#faq"
            className="text-sm font-light tracking-wide text-white/80 transition-colors hover:text-gold-300"
          >
            FAQ
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1.5 text-xs font-light text-white/70 lg:flex">
            <MapPin className="h-3.5 w-3.5 text-gold-300" />
            <span>{ADDRESS.line2}</span>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gold-500 px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-zeerla-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-md hover:shadow-gold-500/30 sm:inline-flex"
          >
            Book Now
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="text-white md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full bg-zeerla-900/98 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {[
              { href: '#experience', label: 'Experience' },
              { href: '#packages', label: 'Packages' },
              { href: '#reviews', label: 'Reviews' },
              { href: '#location', label: 'Location' },
              { href: '#faq', label: 'FAQ' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-3 text-sm font-light text-white/80 transition-colors hover:text-gold-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-full bg-gold-500 px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-zeerla-900"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
