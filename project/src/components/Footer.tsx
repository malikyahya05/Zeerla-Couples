import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
import {
  ADDRESS,
  PHONE_NUMBER,
  PHONE_LINK,
  EMAIL,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  BOOKING_URL,
  HOURS,
} from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-zeerla-900 pt-16 pb-28 sm:pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <span className="font-serif text-2xl font-semibold text-white">
                Zeerla
              </span>
              <span className="text-xs font-light uppercase tracking-[0.3em] text-gold-300">
                Spa
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed text-white/60">
              Private couples Jacuzzi and massage experiences in Dubai Media
              City.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-light text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  {ADDRESS.line2}
                  <br />
                  {ADDRESS.line3}
                </span>
              </li>
              <li>
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-2 transition-colors hover:text-gold-300"
                >
                  <Phone className="h-4 w-4 text-gold-400" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 transition-colors hover:text-gold-300"
                >
                  <Mail className="h-4 w-4 text-gold-400" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
              Hours
            </h4>
            <p className="text-sm font-light leading-relaxed text-white/70">
              {HOURS}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
              Book &amp; Connect
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-300 text-white/70"
                >
                  Book Your Experience
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-gold-300 text-white/70"
                >
                  <MessageCircle className="h-4 w-4 text-gold-400" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-gold-300 text-white/70"
                >
                  <Instagram className="h-4 w-4 text-gold-400" />
                  @zeerlaspa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs font-light text-white/40">
            © {new Date().getFullYear()} Zeerla Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
