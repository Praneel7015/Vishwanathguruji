import type { GalleryImage } from '@/types';
import { IMG } from './images';

const make = (
  id: string,
  src: string,
  category: GalleryImage['category'],
  alt: string,
  width = 800,
  height = 1000,
): GalleryImage => ({ id, src, alt, category, width, height });

export const GALLERY: GalleryImage[] = [
  make('g1', IMG.gallery(1), 'events', 'Annual gathering at Sri Panchamukhi Astro Centre'),
  make('g2', IMG.gallery(8), 'pujas', 'Sacred Maha Mrityunjaya havan ceremony', 800, 600),
  make('g3', IMG.gallery(11), 'consultations', 'Palm Reader and astrologer Guruji consulting a client at the centre', 800, 1100),
  make('g4', IMG.gallery(13), 'media', 'Press feature on Pandit Vishwanath Guruji', 800, 600),
  make('g5', IMG.puja.nav, 'ceremonies', 'Navagraha shanti ceremony', 800, 800),
  make('g6', IMG.puja.durga, 'pujas', 'Durga Saptashati recitation', 800, 1000),
  make('g7', IMG.gallery(5), 'events', 'Devotee gathering during Navaratri'),
  make('g8', IMG.hero.vastu, 'consultations', 'Vastu site visit reading', 800, 600),
  make('g9', IMG.puja.kaal, 'ceremonies', 'Kaal Sarp Dosh Nivaran at sacred shrine', 800, 1100),
  make('g10', IMG.gallery(7), 'media', 'Television interview with Guruji', 800, 600),
  make('g11', IMG.gallery(12), 'pujas', 'Lakshmi-Kubera puja preparations', 800, 900),
  make('g12', IMG.gallery(15), 'events', 'Free annual community puja'),
  make('g13', IMG.gallery(6), 'consultations', 'Astrology by date of birth — kundali online birth chart analysis', 800, 600),
  make('g14', IMG.gallery(10), 'ceremonies', 'Maha Rudra Abhishek ritual', 800, 1000),
  make('g15', IMG.puja.maha, 'pujas', 'Havan kunda being prepared', 800, 600),
  make('g16', IMG.gurujiSelfie, 'events', 'Guruji blessing devotees', 800, 1100),
  make('g17', IMG.gallery(16), 'media', 'Best Astrologer in Bangalore and Vastu Consultant — Guruji portrait', 800, 800),
  make('g18', IMG.gallery(17), 'media', 'Guruji with zodiac wheel and astrology instruments', 800, 800),
];

export const GALLERY_CATEGORIES: { key: GalleryImage['category'] | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'events', label: 'Events' },
  { key: 'pujas', label: 'Pujas' },
  { key: 'consultations', label: 'Consultations' },
  { key: 'media', label: 'Media' },
  { key: 'ceremonies', label: 'Ceremonies' },
];
