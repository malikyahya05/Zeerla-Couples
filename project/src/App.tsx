import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBadge from '@/components/TrustBadge';
import BenefitsStrip from '@/components/BenefitsStrip';
import ExperienceSection from '@/components/ExperienceSection';
import IncludedSection from '@/components/IncludedSection';
import PackageSection from '@/components/PackageSection';
import WhyZeerlaSection from '@/components/WhyZeerlaSection';
import ReviewsSection from '@/components/ReviewsSection';
import GallerySection from '@/components/GallerySection';
import CouplesEscapeSection from '@/components/CouplesEscapeSection';
import LocationSection from '@/components/LocationSection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import StickyCtaBar from '@/components/StickyCtaBar';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <TrustBadge />
        <BenefitsStrip />
        <ExperienceSection />
        <IncludedSection />
        <PackageSection />
        <WhyZeerlaSection />
        <ReviewsSection />
        <GallerySection />
        <CouplesEscapeSection />
        <LocationSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <StickyCtaBar />
    </div>
  );
}

export default App;
