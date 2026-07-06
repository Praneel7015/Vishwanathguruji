'use client';

import Image from 'next/image';
import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import AccordionItem from '@/components/ui/AccordionItem';
import { IMG } from '@/constants/images';

const faqs = [
  {
    q: 'Why should I believe in astrology?',
    a: 'Vedic astrology is a 5,000-year-old observational science. Modern seekers find it indispensable not as superstition but as a framework for understanding timing, tendencies, and the karmic conditions of their lives.',
  },
  {
    q: "What makes Guruji's methods different?",
    a: 'Pandit Sri Vishwanath Guruji combines rigorous classical training with three decades of practical experience. Every remedy is personalised, never generic, and rooted in original Sanskrit texts rather than diluted modern interpretations.',
  },
  {
    q: 'How accurate are the predictions?',
    a: 'Guruji is direct about what astrology can and cannot do. Tendencies and timing can be read clearly; specific events are framed as probabilities to prepare for, not certainties to fear.',
  },
  {
    q: 'What types of problems can Guruji solve?',
    a: 'Marriage, career, finance, health, family disputes, black magic protection, vastu corrections, court cases, political success, childlessness, Guruji has counselled across all 13 specialised practice areas listed on this site.',
  },
  {
    q: 'Do I need to visit in person?',
    a: 'In-person consultation in Jayanagar is preferred for the deepest readings. However, Guruji also offers remote consultations and remedy guidance over phone and WhatsApp for clients across India and abroad.',
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-site-bg py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <SectionHeader
            align="left"
            accent="Why Choose Guruji"
            title="Trusted by Generations of Families"
            subtitle="A practice built on direct, ethical, classical guidance, not vague predictions."
          />
          <div>
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                question={f.q}
                answer={f.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={IMG.homeWhyChoose}
              alt="online astrology consultation — vedic astrology expert Vishwanath Guruji"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
