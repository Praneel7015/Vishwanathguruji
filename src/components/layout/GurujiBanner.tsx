'use client';

import Image from 'next/image';
import { useState } from 'react';

const BANNERS = [
  '/images/gurujibanner1.jpeg',
  '/images/gurujibanner2.jpeg',
  '/images/gurujibanner3.jpeg',
  '/images/gurujibanner4.jpeg',
  '/images/gurujibanner5.jpeg',
];

export default function GurujiBanner() {
  // Pick a random banner on each mount (page load / client navigation).
  const [src] = useState(() => BANNERS[Math.floor(Math.random() * BANNERS.length)]);

  return (
    <div className="w-full bg-site-dark-band py-0 sm:py-6">
      <div className="max-w-container mx-auto px-0 sm:px-6">
        <div className="relative overflow-hidden rounded-none sm:rounded-lg shadow-none sm:shadow-xl border-y sm:border border-accent/20">
          <Image
            src={src}
            alt="Pandit Sri Vishwanath Guruji — Sri Panchamukhi Astro Centre"
            width={1600}
            height={903}
            priority
            className="w-full h-auto block"
            sizes="(max-width: 1240px) 100vw, 1240px"
          />
        </div>
      </div>
      {/* Decorative gold accent strip at the bottom */}
      <div className="mt-0 sm:mt-6 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </div>
  );
}

