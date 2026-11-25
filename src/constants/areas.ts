/**
 * Areas the astro centre actively serves. Used for:
 *   1. `areaServed` in LocalBusiness JSON-LD (rich-results signal)
 *   2. Area-targeted landing pages at `/best-astrologer-in-[slug]`
 *   3. Area keyword expansion in <meta> tags
 *
 * Keep names short and SEO-friendly. The slug becomes the URL segment.
 */

export interface ServiceArea {
  slug: string;
  /** Display name, e.g. "Jayanagar". */
  name: string;
  /** Parent city, used for headlines & schemas. */
  city: string;
  /** State (used in JSON-LD address signals). */
  region: string;
  /** Optional short blurb describing the locality. */
  blurb: string;
  /** Optional 6-digit pincode if applicable. Helps local SEO. */
  postalCode?: string;
  /** Optional approx. geo coords. Used by area pages for richer schema. */
  geo?: { latitude: number; longitude: number };
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'bangalore',
    name: 'Bangalore',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Pandit Sri Vishwanath Guruji is widely recognised as one of the best astrologers in Bangalore, with clients consulting him from every corner of the city for love, marriage, career, vastu, and protection remedies.',
    geo: { latitude: 12.9716, longitude: 77.5946 },
  },
  {
    slug: 'jayanagar',
    name: 'Jayanagar',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Located at Sri Panchamukhi Nilaya in Jayanagara 9th Block near Sri Ragigudda Temple, Guruji is the most trusted astrologer in Jayanagar with over three decades of in-person consultations.',
    postalCode: '560069',
    geo: { latitude: 12.9152455, longitude: 77.5937114 },
  },
  {
    slug: 'jp-nagar',
    name: 'JP Nagar',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'A short drive from JP Nagar, the centre serves residents seeking genuine Vedic astrology, vashikaran, and vastu solutions.',
    geo: { latitude: 12.9081, longitude: 77.5831 },
  },
  {
    slug: 'banashankari',
    name: 'Banashankari',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Devotees and seekers from Banashankari regularly visit Guruji for horoscope reading, dosha-nivaran pujas, and home vastu correction.',
    geo: { latitude: 12.925, longitude: 77.546 },
  },
  {
    slug: 'btm-layout',
    name: 'BTM Layout',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'BTM Layout residents reach the centre in minutes for ethical Vedic remedies, marriage matching, and career guidance.',
    geo: { latitude: 12.9166, longitude: 77.6101 },
  },
  {
    slug: 'hsr-layout',
    name: 'HSR Layout',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Trusted by HSR Layout professionals for confidential, evidence-driven Vedic astrology consultations.',
    geo: { latitude: 12.9116, longitude: 77.6473 },
  },
  {
    slug: 'koramangala',
    name: 'Koramangala',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Koramangala clients consult Guruji for love-life, business, and start-up timing remedies rooted in classical Vedic astrology.',
    geo: { latitude: 12.9352, longitude: 77.6245 },
  },
  {
    slug: 'indiranagar',
    name: 'Indiranagar',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Indiranagar residents trust Guruji for vashikaran, family harmony, and prosperity remedies grounded in Vedic shastra.',
    geo: { latitude: 12.9719, longitude: 77.6412 },
  },
  {
    slug: 'whitefield',
    name: 'Whitefield',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Whitefield families regularly visit the centre for chart reading, gemstone prescription, and house-warming Vastu rituals.',
    geo: { latitude: 12.9698, longitude: 77.7499 },
  },
  {
    slug: 'marathahalli',
    name: 'Marathahalli',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Tech professionals in Marathahalli rely on Guruji for ethical, remedy-driven career and relationship guidance.',
    geo: { latitude: 12.9569, longitude: 77.7011 },
  },
  {
    slug: 'electronic-city',
    name: 'Electronic City',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Electronic City residents and employees travel to the centre for genuine Vedic counsel on career, marriage, and protection.',
    geo: { latitude: 12.8456, longitude: 77.6603 },
  },
  {
    slug: 'yelahanka',
    name: 'Yelahanka',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Yelahanka clients consult Guruji for kundali matching, mangal dosha nivaran, and prosperity pujas.',
    geo: { latitude: 13.1007, longitude: 77.5963 },
  },
  {
    slug: 'hebbal',
    name: 'Hebbal',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Hebbal families seek Guruji for authentic Vedic pujas, ancestral dosha remedies, and child blessing rituals.',
    geo: { latitude: 13.0358, longitude: 77.597 },
  },
  {
    slug: 'malleshwaram',
    name: 'Malleshwaram',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Devotees from Malleshwaram visit the centre for shastra-pure pujas and detailed horoscope analysis.',
    geo: { latitude: 13.005, longitude: 77.564 },
  },
  {
    slug: 'basavanagudi',
    name: 'Basavanagudi',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'A neighbour to Jayanagar, Basavanagudi families have consulted Guruji for generations on every life decision.',
    geo: { latitude: 12.9423, longitude: 77.5736 },
  },
  {
    slug: 'rajajinagar',
    name: 'Rajajinagar',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Residents of Rajajinagar can enquire about traditional horoscope reading, marriage guidance, career astrology and Vastu consultation at the Jayanagar centre.',
    geo: { latitude: 12.9915, longitude: 77.5535 },
  },
  {
    slug: 'sarjapur-road',
    name: 'Sarjapur Road',
    city: 'Bangalore',
    region: 'Karnataka',
    blurb:
      'Sarjapur Road residents consult the centre for career timing, vastu, and love-marriage solutions.',
    geo: { latitude: 12.9009, longitude: 77.6873 },
  },
  {
    slug: 'mysore',
    name: 'Mysore',
    city: 'Mysore',
    region: 'Karnataka',
    blurb:
      'Long-time clients across Mysore consult Guruji in person and remotely for life-decision guidance.',
    geo: { latitude: 12.2958, longitude: 76.6394 },
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    city: 'Hyderabad',
    region: 'Telangana',
    blurb:
      'Guruji counsels devotees from Hyderabad through phone, video, and on visits, with remedies performed at the centre.',
    geo: { latitude: 17.385, longitude: 78.4867 },
  },
  {
    slug: 'chennai',
    name: 'Chennai',
    city: 'Chennai',
    region: 'Tamil Nadu',
    blurb:
      'Families across Chennai have consulted Guruji for decades for marriage, business, and protection remedies.',
    geo: { latitude: 13.0827, longitude: 80.2707 },
  },
];

export const getAreaBySlug = (slug: string): ServiceArea | undefined =>
  SERVICE_AREAS.find((a) => a.slug === slug);

/** Names only — handy for keyword arrays and `areaServed`. */
export const AREA_NAMES: string[] = SERVICE_AREAS.map((a) => a.name);
