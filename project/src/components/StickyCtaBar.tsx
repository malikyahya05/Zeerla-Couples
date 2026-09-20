import { useEffect, useState } from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { BOOKING_URL, WHATSAPP_URL } from '@/lib/constants';

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex gap-2 border-t border-zeerla-100 bg-white/95 px-3 py-2 shadow-lg shadow-zeerla-900/10 backdrop-blur-md">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-zeerla-900 transition-colors active:scale-[0.98]"
        >
          <Calendar className="h-4 w-4" />
          Book Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-full border border-zeerla-200 px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-zeerla-800 transition-colors active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
