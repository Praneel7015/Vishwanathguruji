'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IMG } from '@/constants/images';

const credentials = [
  '35+ Years Experience',
  '55,000+ Happy Clients',
  'Most Trusted in Bangalore',
  'Ancient Vedic Methods',
];

export default function AboutSummary() {
  return (
    <section className="bg-site-bg py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={IMG.homeBanner}
              alt="Best Astrologer in Bangalore — Pandit Sri Vishwanath Guruji"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-2">
            Welcome to Sri Panchamukhi Astro Centre
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold leading-tight">
            Famous Astrologer in Bangalore
          </h2>
          <div className="w-10 h-[3px] bg-accent mt-4 mb-6" />
          <div className="space-y-4 text-site-text-muted leading-relaxed">
            <p>
              For more than three decades, Pandit Sri Vishwanath Guruji has been widely regarded
              as the{' '}
              <Link
                href="/best-astrologer-in/bangalore"
                className="text-accent font-semibold hover:text-primary transition-colors"
              >
                best astrologer in Bangalore
              </Link>
              , guiding seekers from across India and the diaspora through life&apos;s most
              stubborn challenges from his centre in Jayanagar.
            </p>
            <p>
              From career stagnation and marital discord to the heavier shadows of black magic and
              ancestral doshas, every consultation begins with a careful reading of your janma
              kundali and ends with a remedy you can perform with confidence.
            </p>
          </div>

          <blockquote className="border-l-4 border-accent bg-accent-pale/60 pl-4 py-3 my-6 italic font-display text-lg text-primary">
            &ldquo;Astrology is not prediction; it is preparation. A map for the soul.&rdquo;
          </blockquote>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {credentials.map((c) => (
              <div key={c} className="bg-accent-pale/60 px-3 py-2 rounded-md">
                <span className="text-sm text-site-text">{c}</span>
              </div>
            ))}
          </div>

          <Link href="/about" className="text-accent font-semibold hover:text-primary transition-colors">
            Read Full Story →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
