'use client';

import { useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

import 'swiper/css';
import 'swiper/css/navigation';

const VIDEOS = [
  {
    id: 'v1',
    src: '/videos/guruji01.mp4',
    title: 'Guruji on Karma & Destiny',
  },
  {
    id: 'v2',
    src: '/videos/guruji02.mp4',
    title: 'Pujas & Havan Guidance',
  },
  {
    id: 'v3',
    src: '/videos/guruji03.mp4',
    title: 'Messages from the Centre',
  },
];

function VideoCard({ video }: { video: (typeof VIDEOS)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
    } else {
      el.play();
    }
    setPlaying(!playing);
  }, [playing]);

  const handleEnded = useCallback(() => setPlaying(false), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-site-dark-surface shadow-lg"
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src={video.src}
        playsInline
        preload="metadata"
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay — hides when playing */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
          playing ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* Play / Pause button */}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause ${video.title}` : `Play ${video.title}`}
        className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${
          playing ? 'opacity-0 hover:opacity-100' : 'opacity-100'
        }`}
      >
        <span className="w-14 h-14 rounded-full bg-accent/90 backdrop-blur flex items-center justify-center shadow-xl ring-2 ring-accent-light/30 transition-transform group-hover:scale-110">
          {playing ? (
            <Pause size={22} className="text-site-white" />
          ) : (
            <Play size={22} className="text-site-white ml-0.5" />
          )}
        </span>
      </button>

      {/* Title strip */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 z-10 transition-opacity duration-300 ${
          playing ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <p className="text-sm font-semibold text-site-white leading-snug drop-shadow-md">
          {video.title}
        </p>
      </div>

      {/* Decorative inner border */}
      <div
        className="absolute inset-2 border border-accent/25 rounded-md pointer-events-none z-10"
        aria-hidden
      />
    </motion.div>
  );
}

export default function MessageFromGuruji() {
  return (
    <section className="relative bg-site-dark-band overflow-hidden">
      {/* Decorative radial glow */}
      <div
        className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,146,42,0.18),transparent_65%)]"
        aria-hidden
      />

      <div className="relative max-w-container mx-auto px-6 py-16 md:py-24">
        <SectionHeader
          accent="Watch & Learn"
          title="Message from Guruji"
          subtitle="Timeless wisdom captured on screen — spiritual guidance, ritual demonstrations, and personal messages from Pandit Sri Vishwanath Guruji."
          light
        />

        <Swiper
          modules={[Navigation]}
          slidesPerView={1.15}
          spaceBetween={16}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 16 },
            768: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          navigation={{ prevEl: '.vid-prev', nextEl: '.vid-next' }}
        >
          {VIDEOS.map((v) => (
            <SwiperSlide key={v.id}>
              <VideoCard video={v} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            type="button"
            className="vid-prev w-10 h-10 rounded-full border border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-site-white transition-colors"
            aria-label="Previous video"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="vid-next w-10 h-10 rounded-full border border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-site-white transition-colors"
            aria-label="Next video"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
