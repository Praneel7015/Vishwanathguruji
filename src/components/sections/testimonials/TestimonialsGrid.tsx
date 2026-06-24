'use client';

import { Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { TESTIMONIALS, GOOGLE_MAPS_URL, GOOGLE_RATING } from '@/constants/testimonials';

/* Inline Google "G" logo */
function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function TestimonialsGrid() {
  return (
    <section className="bg-site-bg py-16 md:py-20">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          accent="Google Reviews"
          title="What Our Clients Say"
          subtitle="Real reviews from verified clients on Google Maps — read their stories of clarity and transformation."
          align="left"
        />

        {/* Google rating summary */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 flex items-center gap-4 p-5 bg-site-surface rounded-md border border-site-border/40 hover:shadow-sm transition-shadow"
        >
          <GoogleIcon size={32} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl text-site-text">
                {GOOGLE_RATING.value}
              </span>
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
            <p className="text-sm text-site-text-muted">
              Based on {GOOGLE_RATING.count}+ reviews on Google Maps
            </p>
          </div>
          <span className="ml-auto text-sm font-semibold text-accent hover:text-primary transition-colors hidden sm:inline">
            View all on Google →
          </span>
        </a>

        <p className="text-sm text-site-text-muted mb-6">
          Showing <span className="font-semibold text-site-text">{TESTIMONIALS.length}</span> reviews
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
