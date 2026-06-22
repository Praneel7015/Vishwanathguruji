import HeroSlider from '@/components/sections/home/HeroSlider';
import AboutSummary from '@/components/sections/home/AboutSummary';
import StatsCounterBand from '@/components/sections/home/StatsCounterBand';
import ServicesGrid from '@/components/sections/home/ServicesGrid';
import ScrollTicker from '@/components/ui/ScrollTicker';
import WhyChooseUs from '@/components/sections/home/WhyChooseUs';
import TestimonialsCarousel from '@/components/sections/home/TestimonialsCarousel';
import MessageFromGuruji from '@/components/sections/home/MessageFromGuruji';
import GurujiGalleryCarousel from '@/components/sections/about/GurujiGalleryCarousel';
import PujasBand from '@/components/sections/home/PujasBand';
import ContactBand from '@/components/sections/home/ContactBand';
import { buildMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { TESTIMONIALS } from '@/constants/testimonials';
import { faqSchema, jsonLd, reviewsSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: `${SITE_CONFIG.guruji} — Best Astrologer in Bangalore, Jayanagar`,
  description:
    'Pandit Sri Vishwanath Guruji is the most trusted Vedic astrologer in Bangalore with 35+ years of experience. Expert in Vashikaran, Black Magic Removal, Vastu, Marriage, Love, Career, and Family problem solutions at Sri Panchamukhi Astro Centre, Jayanagar.',
  path: '/',
  keywords: [
    'best astrologer in Bangalore Jayanagar',
    'top astrologer near me',
    'famous astrologer in Karnataka',
    'genuine vedic astrologer Bangalore',
    'astrology consultation Bangalore',
    'panchamukhi astro centre',
  ],
});

const HOME_FAQS = [
  {
    question: 'Who is the best astrologer in Bangalore?',
    answer:
      'Pandit Sri Vishwanath Guruji is widely regarded as one of the best Vedic astrologers in Bangalore. With over 35 years of practice and thousands of consultations from Jayanagar, JP Nagar, Banashankari, Koramangala, Indiranagar, Whitefield and beyond, Guruji is trusted for Vashikaran, black magic removal, vastu, marriage, career and family solutions.',
  },
  {
    question: 'Where is Sri Panchamukhi Astro Centre located?',
    answer:
      `The centre is located at ${SITE_CONFIG.address}. It is easily accessible from JP Nagar, Banashankari, BTM Layout, Basavanagudi, and the entire South Bangalore region.`,
  },
  {
    question: 'What services does Pandit Vishwanath Guruji offer?',
    answer:
      'Guruji offers Vashikaran specialist services, black magic removal, Vastu Shastra consultations, love marriage problem solutions, husband–wife problem solutions, family problem remedies, childless problem solutions, health astrology, career and financial problem solutions, court case remedies, and political guidance — all rooted in classical Vedic shastra.',
  },
  {
    question: 'How can I book a consultation with Guruji?',
    answer: `You can book an in-person, phone, or WhatsApp consultation by calling ${SITE_CONFIG.phoneDisplay}, sending a WhatsApp message, or using the contact form on the website. Same-day appointments are often available.`,
  },
  {
    question: 'Does Guruji consult clients outside Bangalore?',
    answer:
      'Yes. Guruji has clients across Karnataka, Tamil Nadu, Telangana, Andhra Pradesh, Maharashtra, Kerala, Delhi NCR, and the Indian diaspora. Remote consultations and remedies are available via phone, video, and WhatsApp.',
  },
  {
    question: 'Are the remedies safe and ethical?',
    answer:
      'Absolutely. Every ritual performed at Sri Panchamukhi Astro Centre is purely Vedic, protective, and ethical. Guruji practises only positive Vashikaran and never uses any procedure that harms or manipulates another person against their wellbeing.',
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(HOME_FAQS))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(reviewsSchema(TESTIMONIALS.slice(0, 6)))}
      />
      <HeroSlider />
      <AboutSummary />
      <StatsCounterBand />
      <ServicesGrid />
      <ScrollTicker />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <MessageFromGuruji />
      <GurujiGalleryCarousel />
      <PujasBand />
      <ContactBand />
    </>
  );
}
