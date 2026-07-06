'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import { ChevronLeft, ChevronRight, MoveDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { IMG } from '@/constants/images';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    headline: 'Marriage Related',
    sub: 'Get trusted guidance for marriage delays, compatibility concerns, and relationship harmony through classical Vedic consultation and personalized remedies.',
    image: IMG.svc.couple,
    alt: 'Kundali matching and marriage solutions by the Best Astrologer in Bangalore',
  },
  {
    headline: 'Family Problems',
    sub: 'Resolve recurring family conflicts, communication gaps, and domestic stress with practical Vedic advice tailored to your household situation.',
    image: IMG.svc.health,
    alt: 'astrologer near me — family problem guidance and remedies by Vishwanath Guruji',
  },
  {
    headline: 'Career Problems',
    sub: 'Overcome career stagnation, job instability, and workplace obstacles with astrological timing guidance and focused remedial support.',
    image: IMG.hero.career,
    alt: 'astrology predictions for career growth — Sri Panchamukhi Astro Centre Bangalore',
  },
  {
    headline: 'Health Problems',
    sub: 'Receive spiritual and astrological guidance for ongoing health-related concerns, helping you regain clarity, peace of mind, and balance.',
    image: IMG.svc.child,
    alt: 'horoscope by date of birth — health astrology consultation with Pandit Vishwanath Guruji',
  },
  {
    headline: 'Vashikarana',
    sub: 'Seek authentic Vedic Vashikarana guidance to rebuild love, trust, and emotional connection while staying aligned with positive spiritual practices.',
    image: IMG.svc.magic,
    alt: 'vashikaran specialist in Bangalore — Pandit Sri Vishwanath Guruji',
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full h-[88vh] min-h-[560px] bg-site-dark-band overflow-hidden">
      <h1 className="sr-only">Best Astrologer in Bangalore</h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        speed={950}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.pagination === 'object' && swiper.params.pagination) {
            swiper.params.pagination.el = paginationRef.current;
          }
        }}
        onInit={(swiper) => {
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        }}
        pagination={{
          clickable: true,
          el: paginationRef.current,
          bulletClass: 'hero-dot',
          bulletActiveClass: 'hero-dot--active',
        }}
        className="hero-swiper h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.headline}>
            <div className="relative w-full h-full">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary/70 to-site-dark-band/85" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-container w-full mx-auto px-6 md:px-10 text-site-white">
                  <div className="max-w-2xl">
                    <div className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-3">
                      Sri Panchamukhi Astro Centre
                    </div>
                    <p className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5">
                      {s.headline}
                    </p>
                    <p className="text-base md:text-lg text-site-white/85 max-w-xl mb-8">
                      {s.sub}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button href="/services" variant="gold" size="lg">
                        Explore Services
                      </Button>
                      <Button href="/contact" variant="ghost" size="lg">
                        Book Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className="hero-prev hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-site-white/20 text-site-white items-center justify-center hover:bg-primary transition-colors pointer-events-auto"
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        className="hero-next hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-site-white/20 text-site-white items-center justify-center hover:bg-primary transition-colors pointer-events-auto"
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight size={22} />
      </button>

      <div
        ref={paginationRef}
        className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 pointer-events-auto"
      />

      <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 text-site-white/70 text-xs tracking-widest uppercase animate-bob">
        <span>Scroll</span>
        <MoveDown size={14} />
      </div>

      <style jsx global>{`
        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.4);
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hero-dot--active {
          background: #c9922a;
          width: 24px;
        }
        .hero-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </section>
  );
}

