import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { VIDEO_TESTIMONIALS } from '@/constants/testimonials';
import { getServiceBySlug } from '@/constants/services';

export default function TestimonialVideos() {
  return (
    <section className="bg-site-surface py-16 md:py-20">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          accent="Video Testimonials"
          title="Clients Share Their Experience"
          subtitle="Real video messages from devotees who consulted Pandit Sri Vishwanath Guruji at Sri Panchamukhi Astro Centre."
        />
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
          {VIDEO_TESTIMONIALS.map((v) => {
            const service = getServiceBySlug(v.serviceSlug);
            return (
              <article
                key={v.id}
                className="bg-site-white rounded-md overflow-hidden border border-site-border/40 shadow-sm flex flex-col"
              >
                <div className="relative aspect-video bg-site-dark-band">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={v.poster}
                    className="h-full w-full object-cover"
                  >
                    <source src={v.src} type="video/mp4" />
                  </video>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg text-primary font-semibold leading-snug mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-site-text-muted mb-4">{v.name}</p>
                  {service ? (
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-auto text-sm font-semibold text-accent hover:text-primary transition-colors"
                    >
                      {service.title} →
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
