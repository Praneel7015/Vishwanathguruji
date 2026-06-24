import type { Testimonial, VideoTestimonial } from '@/types';
import { IMG } from './images';

/* ------------------------------------------------------------------ */
/* Google Maps listing details                                        */
/* ------------------------------------------------------------------ */
export const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/cy65pP2XhWkLYhpE8';

export const GOOGLE_RATING = {
  value: 4.9,
  count: 100, // approximate — update periodically
};

/* ------------------------------------------------------------------ */
/* Video testimonials (real client videos — unchanged)                 */
/* ------------------------------------------------------------------ */
export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'vt1',
    title: 'Reunited with my partner after Guruji\'s guidance',
    name: 'Client from Bangalore',
    city: 'Bangalore',
    serviceSlug: 'vashikaran-specialist',
    src: '/videos/video-1.mp4',
    poster: IMG.hero.love,
  },
  {
    id: 'vt2',
    title: 'Our family found peace after the recommended puja',
    name: 'Client from Karnataka',
    city: 'Karnataka',
    serviceSlug: 'family-problem',
    src: '/videos/video-2.mp4',
    poster: IMG.puja.maha,
  },
  {
    id: 'vt3',
    title: 'Vastu corrections transformed our home and business',
    name: 'Client from Bangalore',
    city: 'Bangalore',
    serviceSlug: 'vastu-shastra',
    src: '/videos/video-3.mp4',
    poster: IMG.hero.vastu,
  },
  {
    id: 'vt4',
    title: 'Grateful for Guruji\'s support through a difficult time',
    name: 'Client from South India',
    city: 'India',
    serviceSlug: 'health-problem',
    src: '/videos/video-4.mp4',
    poster: IMG.gallery(15),
  },
];

/* ------------------------------------------------------------------ */
/* Written reviews — real reviews from Google Maps                     */
/* ------------------------------------------------------------------ */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'g1',
    name: 'Himanshu Sharma',
    rating: 5,
    quote:
      'Vishwanath expertise in Vastu and astrology helped us understand the root cause. His suggested remedies, including specific poojas and changes to the property, brought about a positive change. The resolution was peaceful and fair. Worth the money',
    date: '2026-03-24',
    relativeDate: '3 months ago',
    source: 'google',
  },
  {
    id: 'g2',
    name: 'Mahammad Nadaf',
    rating: 5,
    quote:
      'Very accurate and honest astrologer. Many others just say what you want to hear for money, but Vishwanath Guruji tells the truth even if it\'s bitter and then provides real solutions. My child\'s education problems got solved after his consultation. We\'re so grateful. Will always come back to him for any issue.',
    date: '2026-03-24',
    relativeDate: '3 months ago',
    source: 'google',
  },
  {
    id: 'g3',
    name: 'Manish Manish',
    rating: 5,
    quote:
      'Vishwanath guruji is a best palm reader he saw my hand and given me the solution I really thank vishwanath guruji for his calmness and peacefully place. His predictions are accurate. I guys can trust this place',
    date: '2026-03-24',
    relativeDate: '3 months ago',
    source: 'google',
  },
  {
    id: 'g4',
    name: 'Wajid mujawar',
    rating: 5,
    quote:
      'My confidence level was very low due to repeated failures. Guruji motivated me and gave simple solutions that helped me regain belief in myself.',
    date: '2026-03-24',
    relativeDate: '3 months ago',
    source: 'google',
  },
  {
    id: 'g5',
    name: 'Ai Ahma',
    rating: 5,
    quote:
      'The guidance helped me gain clarity, peace of mind, and a positive outlook. His approach is genuine, calm, and spiritual. Vishwanath Guruji focuses on practical advice along with faith-based solutions. Highly recommended for anyone facing love, relationship, or family-related issues and seeking honest astrological guidance.',
    date: '2025-12-24',
    relativeDate: '6 months ago',
    source: 'google',
  },
  {
    id: 'g6',
    name: 'Sarfraz Satti',
    rating: 5,
    quote:
      'I felt cursed every good thing in life turned bad, friends left, opportunities vanished. I was lonely, hopeless, questioning God. Guruji hugged me like a father when I broke down in his chamber, said "The curse is lifting today." He did a full dosha nivaran. Since then, life flipped good people came, success followed, I feel blessed every single day. From darkness to light because of this one man. Vishwanath Guruji, you are my guru, my savior. I owe you my happiness.',
    date: '2026-03-24',
    relativeDate: '3 months ago',
    source: 'google',
  },
  {
    id: 'g7',
    name: 'Sanjoy Baidya',
    rating: 5,
    quote:
      'Vishwanath Guruji\'s predictions about my family matters were very accurate. What impressed me most was his humble nature and the clarity with which he explained everything. Truly grateful for his support. He is very experienced and genuine astrologer around here must try frds',
    date: '2026-03-24',
    relativeDate: '3 months ago',
    source: 'google',
  },
  {
    id: 'g8',
    name: 'Niki Kashid',
    rating: 5,
    quote:
      'After 12 years of childless marriage, taunts from relatives broke me into pieces. I felt like a burden, unworthy. My husband stood by me but I saw his hidden sadness. Guruji cried with me during the first meeting actual tears and said \u201CYour child is waiting in the stars, just a little more patience.\u201D Special santan pujas, fasting guidance. Last year we welcomed twins. Holding them I still sob thinking how close I came to giving up. Guruji turned my empty arms into the fullest heart.',
    date: '2026-03-24',
    relativeDate: '3 months ago',
    source: 'google',
  },
  {
    id: 'g9',
    name: 'Pintookumar Rawat',
    rating: 5,
    quote:
      'When my family was going through constant misunderstandings, I approached Vishwanath Guruji. He listened with so much patience and gave remedies that actually brought peace back into our home. I\'m deeply thankful.',
    date: '2025-10-24',
    relativeDate: '8 months ago',
    source: 'google',
  },
  {
    id: 'g10',
    name: 'Imteyaj Alam',
    rating: 5,
    quote:
      'Thanks guruji. My son was not concentrating on studies at all. Guruji guided us with proper remedies and gave him a yantra to keep. Now I am happy that it worked actualy',
    date: '2026-03-24',
    relativeDate: '3 months ago',
    source: 'google',
  },
  {
    id: 'g11',
    name: 'Karam Kumar',
    rating: 5,
    quote:
      'My wife was always fighting with me and we are never been happy in life and we couldn\'t take it anymore and was about be apart but after one of my frds suggested me to visit vishwanth guruji. He explained that there is a dhosha so gave a simple rituals and now we are leading our life happily',
    date: '2026-03-24',
    relativeDate: '3 months ago',
    source: 'google',
  },
  {
    id: 'g12',
    name: 'bibiayesha Mulla',
    rating: 5,
    quote:
      'Child not conceiving after 4 years of marriage. We were heartbroken. Vishwanath Guruji identified santan dosha, suggested specific rituals and fasting. Now we have a healthy baby boy! Miracles do happen with faith and his help. Emotional thank you.',
    date: '2026-03-24',
    relativeDate: '3 months ago',
    source: 'google',
  },
  {
    id: 'g13',
    name: 'Naushad Alam',
    rating: 5,
    quote:
      'My issues was very much hight. Vehicle accidents minor but frequent scratches, breakdowns, near misses. Guruji identified Mars dosha, performed vehicle puja and gave red thread remedy. Driving safe for over a year now, no incidents. Protective power real. He is very genuine',
    date: '2026-03-24',
    relativeDate: '3 months ago',
    source: 'google',
  },
  {
    id: 'g14',
    name: 'SmrutiGANESH Gudu',
    rating: 5,
    quote:
      'My son was not concentrating on studies at all. Guruji guided us with proper remedies and gave him a yantra to keep.',
    date: '2026-01-24',
    relativeDate: '5 months ago',
    source: 'google',
  },
  {
    id: 'g15',
    name: 'mallesh Mla',
    rating: 5,
    quote:
      'Guruji explained his planetary chart and recommended chanting and wearing a specific gemstone. His concentration has improved a lot since then.',
    date: '2025-12-24',
    relativeDate: '6 months ago',
    source: 'google',
  },
];
