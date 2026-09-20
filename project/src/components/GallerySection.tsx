const galleryItems = [
  {
    src: 'https://i.postimg.cc/k47KfkZL/Whats-Apep-Image-2026-09-10-at-9-00-34-PM.jpg',
    alt: 'Couples spa experience at Zeerla Spa Dubai',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://i.postimg.cc/zBqK09Mg/Whats-App-Iemage-2026-09-10-at-9-01-36-PM.jpg',
    alt: 'Private Jacuzzi at Zeerla Spa Dubai',
    span: '',
  },
  {
    src: 'https://i.postimg.cc/bJLbMmcW/Whats-App-Image-2026-09-10-at-8-58-18-PM.jpg',
    alt: 'Couples massage room at Zeerla Spa',
    span: '',
  },
  {
    src: 'https://i.postimg.cc/9M1TSL5J/Whats-App-Image-2026-09-10-at-9-00-34-PM.jpg',
    alt: 'Spa interior at Zeerla Spa Dubai Media City',
    span: 'lg:col-span-2',
  },
  {
    src: 'https://i.postimg.cc/tTDPfBQD/Whats-App-Image-2026-09-10-at-9-00-43-PM.jpg',
    alt: 'Private treatment room at Zeerla Spa',
    span: '',
  },
  {
    src: 'https://i.postimg.cc/wv9L0SPZ/Whats-App-Image-2026-09-10-at-9-01-35-PM.jpg',
    alt: 'Couples Jacuzzi experience at Zeerla Spa',
    span: '',
  },
  {
    src: 'https://i.postimg.cc/vBGf3pjz/Whats-App-Image-2026-09-10-at-9-01-36e-PM.jpg',
    alt: 'Massage setup at Zeerla Spa Dubai',
    span: '',
  },
  {
    src: 'https://i.postimg.cc/50fLnZGg/Whats-App-Image-2026-09-10-at-9-e01-36-PM.jpg',
    alt: 'Spa ambience and decor at Zeerla Spa',
    span: '',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-zeerla-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center reveal">
          <p className="eyebrow mb-4">Gallery</p>
          <h2 className="section-heading">A Look Inside</h2>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden rounded-xl ${item.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zeerla-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
