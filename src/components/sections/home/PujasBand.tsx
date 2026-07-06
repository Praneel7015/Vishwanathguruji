import Image from 'next/image';
import Button from '@/components/ui/Button';
import { PUJAS } from '@/constants/pujas';
import { IMG } from '@/constants/images';

export default function PujasBand() {
  const featured = PUJAS.slice(0, 4);
  return (
    <section className="relative bg-primary text-site-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(232,184,75,0.25),transparent_60%)]"
        aria-hidden
      />
      <div className="relative max-w-container mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-2">
            Sacred Rituals
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Special Pujas &amp; Rituals
          </h2>
          <div className="w-10 h-[3px] bg-accent my-4" />
          <p className="text-site-white/80 max-w-md mb-6 leading-relaxed">
            Authentic Vedic rituals performed by Guruji for prosperity, protection, and spiritual
            harmony, drawn from original Sanskrit texts and conducted with traditional precision.
          </p>
          <ul className="space-y-2 mb-7">
            {featured.map((p) => (
              <li key={p.slug} className="flex items-center gap-3">
                <span className="text-accent text-lg leading-none">◆</span>
                <span>{p.title}</span>
              </li>
            ))}
          </ul>
          <Button href="/pujas" variant="gold">
            View All Pujas →
          </Button>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <div
            className="absolute inset-3 border-2 border-accent z-10 pointer-events-none"
            aria-hidden
          />
          <Image
            src={IMG.homeTrust}
            alt="vedic astrology rituals — sacred havan ceremony at Sri Panchamukhi Astro Centre"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
