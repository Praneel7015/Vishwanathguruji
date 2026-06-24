export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullContent: string;
  heroImage: string;
  icon: string;
  faq: { question: string; answer: string }[];
  relatedTestimonialIds: string[];
  process: { step: number; title: string; description: string }[];
  whySeek: { icon: string; label: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  quote: string;
  /** ISO date string used for SEO schema */
  date: string;
  /** Human-friendly label shown on card, e.g. "3 months ago" */
  relativeDate: string;
  /** Where the review was sourced from */
  source: 'google';
}

export interface VideoTestimonial {
  id: string;
  title: string;
  name: string;
  city: string;
  serviceSlug: string;
  src: string;
  poster?: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Puja {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'events' | 'pujas' | 'consultations' | 'media' | 'ceremonies';
  width: number;
  height: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  content: string;
  featured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface AccordionEntry {
  question: string;
  answer: string;
}
