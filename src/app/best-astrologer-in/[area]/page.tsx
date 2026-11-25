import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Phone, MapPin, Clock, Sparkles } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import DividerOrnament from '@/components/ui/DividerOrnament';
import PrimaryCtaBand from '@/components/sections/shared/PrimaryCtaBand';
import ServiceCard from '@/components/ui/ServiceCard';
import { SERVICES } from '@/constants/services';
import { SERVICE_AREAS, getAreaBySlug } from '@/constants/areas';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { buildMetadata } from '@/lib/metadata';
import {
  breadcrumbSchema,
  faqSchema,
  jsonLd,
  localBusinessSchema,
} from '@/lib/seo';

interface PageProps {
  params: Promise<{ area: string }>;
}

export function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ area: a.slug }));
}

const RAJAJINAGAR_SERVICES = [
  { title: 'Complete Horoscope Analysis and Birth Chart Reading', text: 'A Janma Kundali is prepared using a person’s birth date, time and place and interpreted through planetary positions and other horoscope factors. Consultations may cover personal strengths, career opportunities, marriage compatibility, family responsibilities, financial matters and important life transitions.' },
  { title: 'Marriage Delays and Kundali Matching', text: 'Individuals and families can enquire about marriage timing, Guna Milan, Mangal Dosha considerations and traditional horoscope compatibility. These interpretations can be considered alongside mutual understanding, communication and personal compatibility.' },
  { title: 'Love Marriage and Relationship Guidance', text: 'A personalised consultation may explore traditional interpretations relating to relationship compatibility and spiritual practices. Guidance should respect the freedom, consent and decisions of both individuals.' },
  { title: 'Family Disputes and Household Harmony', text: 'Guruji offers traditional astrology consultations for family concerns and can discuss relevant interpretations and prayer practices according to personal beliefs. Honest communication and practical solutions remain important.' },
  { title: 'Property Astrology and Vastu Shastra', text: 'Enquire about traditional Vastu guidance for houses, apartments, new properties, construction, renovation, shops, offices and housewarming ceremonies. Confirm consultation arrangements and property visit availability with the centre.' },
  { title: 'Business Astrology and Financial Guidance', text: 'Consultations can cover business horoscope analysis, traditional timing for new ventures, partnership questions, career changes and financial concerns from an astrological perspective. Business and financial decisions should also rely on market research, professional advice and careful planning.' },
  { title: 'Career Astrology', text: 'Students, job seekers and working professionals can enquire about horoscope consultations relating to career direction, job changes, examinations and professional development.' },
  { title: 'Pitru Dosha and Traditional Ancestral Rituals', text: 'Guruji can explain Pitru Dosha from a traditional astrological perspective. Families may enquire about prayers, remembrance rituals and relevant Vedic practices according to their beliefs.' },
  { title: 'Navagraha Shanti and Spiritual Remedies', text: 'Contact the centre to discuss Navagraha Shanti, Graha Dosha-related prayers, marriage rituals, prosperity pujas and other traditional Vedic ceremonies.' },
];

const RAJAJINAGAR_FAQ = [
  ['Who is a Vedic astrologer near Rajajinagar, Bangalore?', 'Pandit Sri Vishwanath Guruji of Sri Panchamukhi Astro Centre provides traditional Vedic astrology consultations for Rajajinagar residents. The physical centre is in Jayanagar 9th Block.'],
  ['Can I consult Guruji for complete horoscope analysis?', 'You can enquire about Janma Kundali reading and traditional interpretations relating to marriage, career, family and financial matters.'],
  ['Does Guruji provide Kundali matching?', 'Enquire about traditional marriage compatibility analysis, Guna Milan and Mangal Dosha considerations.'],
  ['Can I consult Guruji for property-related Vastu guidance?', 'Enquire about Vastu consultations for homes, apartments, shops and commercial properties. Confirm on-site visit availability in advance.'],
  ['Does Guruji offer business astrology consultations?', 'Discuss business-related questions and enquire about traditional horoscope interpretations relating to professional decisions, partnerships and new ventures.'],
  ['Can I consult Guruji for career-related concerns?', 'Enquire about horoscope consultations relating to career direction, job changes and professional development.'],
  ['Are Navagraha Shanti pujas available?', 'Contact the centre to ask about Navagraha Shanti and other traditional Vedic pujas, their procedures and availability.'],
  ['Can Rajajinagar residents arrange a phone consultation?', `Call ${SITE_CONFIG.phoneDisplay} to enquire about phone or other remote consultation arrangements.`],
  ['What is the address of Sri Panchamukhi Astro Centre?', SITE_CONFIG.address],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area } = await params;
  const a = getAreaBySlug(area);
  if (!a) return { title: 'Area not found' };

  const inCity = a.city === a.name ? '' : `, ${a.city}`;
  const title = `Best Astrologer in ${a.name}${inCity} — ${SITE_CONFIG.guruji}`;
  const description = `Looking for the best astrologer in ${a.name}${inCity}? ${SITE_CONFIG.guruji} at ${SITE_CONFIG.name} offers Vashikaran, Black Magic Removal, Vastu, Marriage, Career, and Family problem solutions for clients in ${a.name}. Trusted Vedic remedies since ${SITE_CONFIG.established}. Call ${SITE_CONFIG.phoneDisplay}.`;

  return buildMetadata({
    title,
    description,
    path: `/best-astrologer-in/${a.slug}`,
    keywords: [
      `best astrologer in ${a.name}`,
      `top astrologer in ${a.name}`,
      `famous astrologer in ${a.name}`,
      `astrologer near ${a.name}`,
      `vedic astrologer ${a.name}`,
      `vashikaran specialist ${a.name}`,
      `black magic removal ${a.name}`,
      `vastu consultant ${a.name}`,
      `pandit in ${a.name}`,
      `astrology consultation ${a.name}`,
    ],
  });
}

const AREA_FAQ = (areaName: string) => [
  {
    question: `Who is the best astrologer in ${areaName}?`,
    answer: `Pandit Sri Vishwanath Guruji of Sri Panchamukhi Astro Centre is widely regarded as the best astrologer in ${areaName}. With 35+ years of practice and thousands of consultations from this locality, Guruji is trusted for Vashikaran, black magic removal, vastu, marriage, career, and family problem solutions.`,
  },
  {
    question: `How do I reach Guruji from ${areaName}?`,
    answer: `The centre is located at ${SITE_CONFIG.address} — a short drive from ${areaName}. You can also consult Guruji by phone or WhatsApp on ${SITE_CONFIG.phoneDisplay}.`,
  },
  {
    question: `Does Guruji offer in-person consultations in ${areaName}?`,
    answer: `Site visits for Vastu consultations in ${areaName} are arranged on request. All chart readings, pujas, and remedial rituals are performed personally by Guruji at the Jayanagar centre, which is easily accessible from ${areaName}.`,
  },
  {
    question: `What problems can Guruji solve for ${areaName} clients?`,
    answer: `Marriage, love, husband–wife, family disputes, childless concerns, career, business, financial blockages, health, court cases, vastu doshas, black magic, and ancestral pitru dosha — all rooted in classical Vedic shastra.`,
  },
  {
    question: `What is the consultation fee?`,
    answer: `Initial consultations are charged modestly; remedial pujas are priced per ritual. Call ${SITE_CONFIG.phoneDisplay} for a transparent quote.`,
  },
];

export default async function AreaPage({ params }: PageProps) {
  const { area } = await params;
  const a = getAreaBySlug(area);
  if (!a) notFound();

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Areas We Serve', href: '/best-astrologer-in' },
    { label: a.name, href: `/best-astrologer-in/${a.slug}` },
  ];

  // Per-area LocalBusiness — same business, but `areaServed` narrowed to the
  // specific neighbourhood for stronger local-search signals.
  const localSchema = {
    ...localBusinessSchema(),
    '@id': `${SITE_CONFIG.siteUrl}/best-astrologer-in/${a.slug}#localbusiness`,
    name: `${SITE_CONFIG.name} — Best Astrologer in ${a.name}`,
    areaServed: [
      {
        '@type': 'Place',
        name: `${a.name}, ${a.city}`,
        ...(a.geo && {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: a.geo.latitude,
            longitude: a.geo.longitude,
          },
        }),
      },
    ],
  };

  const featuredServices = SERVICES.slice(0, 6);
  const inCity = a.city === a.name ? '' : `, ${a.city}`;
  const isRajajinagar = a.slug === 'rajajinagar';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(localSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(isRajajinagar ? RAJAJINAGAR_FAQ.map(([question, answer]) => ({ question, answer })) : AREA_FAQ(a.name)))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))}
      />

      <PageHero title={`Best Astrologer in ${a.name}`} breadcrumb={breadcrumbs} />

      <section className="bg-site-bg py-16 md:py-20">
        <div className="max-w-container mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
          <div>
            <SectionHeader
              align="left"
              accent={`Astrology in ${a.name}`}
              title={`Pandit Sri Vishwanath Guruji — Trusted Vedic Astrologer for ${a.name}${inCity}`}
              subtitle={a.blurb}
            />
            <div className="prose prose-neutral max-w-none text-site-text-muted leading-relaxed space-y-4">
              <p>
                If you are searching for the{' '}
                <Link
                  href="/"
                  className="text-accent font-semibold hover:text-primary transition-colors"
                >
                  best astrologer in {a.name}
                </Link>
                , you have arrived at the right place. {SITE_CONFIG.guruji} has been guiding families across{' '}
                {a.city} since {SITE_CONFIG.established}, combining rigorous Vedic training with
                three decades of practical, ethical, real-world consultation experience.
              </p>
              <p>
                Whether you are facing relationship turbulence, career stagnation, financial
                blockages, family disputes, or unexplained negativity, Guruji reads your birth
                chart with classical precision and prescribes targeted remedies — pujas,
                mantra anushthans, yantras, gemstones, and vastu corrections — that have helped
                thousands of devotees from {a.name} and the wider {a.city} region.
              </p>
              <p>
                For {a.name} residents, the {SITE_CONFIG.name} in Jayanagar 9th Block is the
                closest authentic Vedic centre offering all 13 specialised practice areas under
                one roof. Same-day appointments are often available — call{' '}
                <strong>{SITE_CONFIG.phoneDisplay}</strong> to book.
              </p>
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-primary font-bold mt-10 mb-4">
              Why {a.name} Families Trust Guruji
            </h2>
            <ul className="space-y-3 text-site-text-muted">
              {[
                `35+ years of practice and a lineage rooted in classical Vedic shastra.`,
                `Personalised remedies — never generic — for every horoscope.`,
                `Ethical, protective rituals; no harmful or manipulative procedures.`,
                `Confidential consultations, in-person and remote.`,
                `Same-day appointments often available for ${a.name} clients.`,
                `Site visits for Vastu corrections in ${a.name} arranged on request.`,
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Sparkles size={18} className="mt-1 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-32 self-start">
            <div className="bg-primary text-site-white rounded-lg p-6 shadow-lg">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-light mb-3">
                Quick Connect
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Astrologer for {a.name}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="mt-1 shrink-0 text-accent-light" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-accent-light">
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 shrink-0 text-accent-light" />
                  <span className="text-site-white/85">{SITE_CONFIG.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="mt-1 shrink-0 text-accent-light" />
                  <span className="text-site-white/85">{SITE_CONFIG.hoursShort}</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-col gap-2">
                <Button href="/contact" variant="gold" size="md">
                  Book Appointment
                </Button>
                <Button href={SITE_CONFIG.whatsapp} external variant="ghost" size="md">
                  WhatsApp Guruji
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-site-surface py-16 md:py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHeader
            accent={`Astrology Services in ${a.name}`}
            title={`Solutions Offered to ${a.name} Clients`}
            subtitle={`Guruji's most-sought-after Vedic remedies, now serving ${a.name} families.`}
          />
          {isRajajinagar && (
            <div className="max-w-4xl mx-auto mb-10 space-y-8">
              <div className="rounded-lg border border-site-border/40 bg-site-white p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-4">Vedic Astrology Consultation Near Rajajinagar</h3>
                <p className="text-site-text-muted leading-relaxed">Rajajinagar is one of Bangalore’s established residential and commercial neighbourhoods, home to families, businesses and working professionals. People may seek a traditional perspective on marriage, property, business or career decisions. Vedic astrology interprets birth details, planetary positions, horoscope houses and astrological periods. Pandit Sri Vishwanath Guruji established Sri Panchamukhi Astro Centre in Jayanagar in 1989. Residents can contact the centre to ask about appointment and remote consultation arrangements before visiting.</p>
              </div>
              {RAJAJINAGAR_SERVICES.map((item, index) => <article key={item.title} className="rounded-lg border border-site-border/40 bg-site-white p-6 md:p-8"><h3 className="font-display text-xl font-bold text-primary mb-3">{index + 1}. {item.title}</h3><p className="text-site-text-muted leading-relaxed">{item.text}</p></article>)}
              <article className="rounded-lg border border-site-border/40 bg-site-white p-6 md:p-8"><h3 className="font-display text-xl font-bold text-primary mb-3">Why Consult Pandit Sri Vishwanath Guruji?</h3><p className="text-site-text-muted leading-relaxed">Sri Panchamukhi Astro Centre offers traditional Vedic consultations and spiritual guidance based on individual requirements, including Janma Kundali analysis, marriage compatibility, family, career and business questions, Vastu consultations, and information about Vedic pujas. Consultations explain traditional interpretations without guaranteed promises about outcomes.</p></article>
              <article className="rounded-lg border border-site-border/40 bg-site-white p-6 md:p-8"><h3 className="font-display text-xl font-bold text-primary mb-3">Looking for an Astrologer Near Rajajinagar?</h3><p className="text-site-text-muted leading-relaxed">The physical consultation centre is in Jayanagar 9th Block, not Rajajinagar. Contact the centre to confirm appointment availability, fees and arrangements before visiting.</p></article>
              <article className="rounded-lg border border-site-border/40 bg-site-white p-6 md:p-8"><h3 className="font-display text-xl font-bold text-primary mb-4">Frequently Asked Questions</h3><div className="space-y-5">{RAJAJINAGAR_FAQ.map(([question, answer]) => <div key={question}><h4 className="font-semibold text-primary mb-1">{question}</h4><p className="text-sm text-site-text-muted leading-relaxed">{answer}</p></div>)}</div></article>
              <p className="text-sm text-site-text-muted">Vedic astrology is a traditional belief-based practice. Consider practical judgement and qualified professional advice when making important personal, medical, legal or financial decisions.</p>
            </div>
          )}
          {!isRajajinagar && <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {featuredServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} showIcon={false} />
            ))}
          </div>}
          <div className="text-center mt-10">
            <Button href="/services" variant="outline" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {!isRajajinagar && <section className="bg-site-bg py-16 md:py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHeader
            accent="Frequently Asked"
            title={`Astrology in ${a.name} — Common Questions`}
          />
          <div className="max-w-3xl mx-auto mt-10 space-y-4">
            {(isRajajinagar ? [] : AREA_FAQ(a.name)).map((f) => (
              <div
                key={f.question}
                className="rounded-md border border-site-border/40 bg-site-white p-5"
              >
                <h3 className="font-display text-base md:text-lg font-semibold text-primary mb-2">
                  {f.question}
                </h3>
                <p className="text-sm text-site-text-muted leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>}

      <section className="bg-site-surface py-12">
        <div className="max-w-container mx-auto px-6">
          <h2 className="text-center font-display text-2xl text-primary font-bold mb-6">
            Other Areas We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICE_AREAS.filter((x) => x.slug !== a.slug).map((other) => (
              <Link
                key={other.slug}
                href={`/best-astrologer-in/${other.slug}`}
                className="rounded-full border border-primary/30 bg-site-white px-4 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-site-white transition-colors"
              >
                Astrologer in {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PrimaryCtaBand
        label={`Astrologer in ${a.name}`}
        title={`Book Your Consultation with ${SITE_CONFIG.guruji}`}
        description={`Same-day appointments often available for ${a.name} clients. Reach Guruji now for guidance rooted in classical Vedic texts — confidential, ethical, and clear.`}
        omSide="right"
      >
        <Button href="/contact" variant="gold" size="lg">
          Book Appointment
        </Button>
        <Button href={`tel:${SITE_CONFIG.phone}`} external variant="ghost" size="lg">
          {SITE_CONFIG.phoneDisplay}
        </Button>
      </PrimaryCtaBand>

      <DividerOrnament variant="lotus" />
    </>
  );
}
