'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { TESTIMONIALS, GOOGLE_MAPS_URL, GOOGLE_RATING } from '@/constants/testimonials';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

export default function TestimonialsCarousel() {
  return (
    <section className="bg-site-surface py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          accent="What Clients Say"
          title="Real Reviews from Google"
          subtitle="Hear directly from clients who found clarity and transformation through Guruji's guidance — verified on Google Maps."
        />

        {/* Google rating banner */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mb-10 flex w-fit items-center gap-3 rounded-full bg-site-white px-5 py-2.5 shadow-sm border border-site-border/40 hover:shadow-md transition-shadow"
        >
          <GoogleIcon size={24} />
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold text-lg text-site-text">
              {GOOGLE_RATING.value}
            </span>
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
          </div>
          <span className="text-xs text-site-text-muted">
            {GOOGLE_RATING.count}+ reviews
          </span>
        </a>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ prevEl: '.t-prev', nextEl: '.t-next' }}
          pagination={{ clickable: true, el: '.t-pagination' }}
          className="testimonials-swiper !pb-2"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="pb-6">
                <TestimonialCard testimonial={t} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 grid min-h-12 w-full grid-cols-[1fr_auto_1fr] items-center gap-x-4 sm:gap-x-5">
          <button
            type="button"
            className="t-prev col-start-1 justify-self-end w-10 h-10 shrink-0 rounded-full border border-accent text-accent hover:bg-accent hover:text-site-white flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="t-pagination col-start-2 flex min-h-11 min-w-0 items-center justify-center gap-2 px-1" />
          <button
            type="button"
            className="t-next col-start-3 justify-self-start w-10 h-10 shrink-0 rounded-full border border-accent text-accent hover:bg-accent hover:text-site-white flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="text-center mt-10">
          <Button href="/testimonials" variant="primary" size="md">
            Read All Reviews →
          </Button>
        </div>
      </div>
    </section>
  );
}
