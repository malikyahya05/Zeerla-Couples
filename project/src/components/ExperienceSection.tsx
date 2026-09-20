import { SECTION_IMAGES } from '@/lib/constants';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="reveal">
            <p className="eyebrow mb-4">The Experience</p>
            <h2 className="section-heading mb-6">
              A Private Spa Experience for Two
            </h2>
            <div className="space-y-4 text-base font-light leading-relaxed text-zeerla-700">
              <p>
                Take a break from the usual routine and enjoy some quality time
                together.
              </p>
              <p>
                Your experience combines a private Jacuzzi and couples massage,
                all in a relaxing private setting designed for two.
              </p>
              <p>
                Perfect for a date night, birthday, anniversary, special
                occasion — or simply because you both deserve to unwind.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={SECTION_IMAGES.experience}
                alt="Couple enjoying a relaxing massage together in a private treatment room at Zeerla Spa"
                className="h-[320px] w-full object-cover sm:h-[440px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zeerla-900/20 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-full bg-gold-200/40 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
