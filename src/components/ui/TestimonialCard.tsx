'use client';

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GOOGLE_MAPS_URL } from '@/constants/testimonials';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  compact?: boolean;
}

/* Small inline Google "G" logo as SVG — avoids an external image dependency */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function TestimonialCard({ testimonial, compact = false }: TestimonialCardProps) {
  return (
    <article
      className={cn(
        'group relative bg-site-white border border-site-border/40 rounded-lg shadow-sm h-full flex flex-col transition-shadow hover:shadow-md',
        compact ? 'p-5' : 'p-7',
      )}
    >
      {/* Decorative quote mark */}
      <span
        className="absolute top-2 left-4 font-display text-6xl text-accent/20 leading-none select-none"
        aria-hidden
      >
        &ldquo;
      </span>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        {/* Google badge + stars row */}
        <div
          className={cn(
            'flex items-center gap-2 mb-3',
            compact ? 'pl-10' : 'pl-12',
          )}
        >
          <div className="flex gap-0.5 text-accent">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
        </div>

        {/* Review text */}
        <p
          className={cn(
            'font-display italic text-site-text-muted leading-relaxed flex-1',
            compact ? 'text-sm' : 'text-base',
          )}
        >
          {testimonial.quote}
        </p>

        <hr className="my-4 border-site-border/40" />

        {/* Reviewer info */}
        <div className="flex items-center gap-3">
          {/* Profile initial circle */}
          <div className="w-10 h-10 rounded-full bg-primary text-site-white flex items-center justify-center font-display font-semibold text-sm shrink-0">
            {testimonial.name.charAt(0)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="font-semibold text-site-text text-sm truncate">
              {testimonial.name}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-site-text-muted">
              <GoogleIcon className="shrink-0" />
              <span>{testimonial.relativeDate}</span>
            </div>
          </div>

          {/* Google review badge */}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 bg-site-surface text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1.5 rounded text-site-text-muted hover:text-accent transition-colors shrink-0"
            aria-label="View on Google Maps"
          >
            <GoogleIcon />
            <span>Google Review</span>
          </a>
        </div>
      </div>
    </article>
  );
}
