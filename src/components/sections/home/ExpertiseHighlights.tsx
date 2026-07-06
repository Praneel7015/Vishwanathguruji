import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';

const linkClass = 'text-accent font-semibold hover:text-primary transition-colors';

export default function ExpertiseHighlights() {
  return (
    <section className="bg-site-bg py-16 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          accent="Areas of Mastery"
          title="Expertise You Can Trust"
          subtitle="Three decades of classical training applied to the disciplines seekers ask about most."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-site-white border border-site-border/40 rounded-md p-6">
            <h3 className="font-display text-xl text-primary font-bold mb-3">Vastu Consultant</h3>
            <p className="text-sm text-site-text-muted leading-relaxed">
              Guruji corrects energy imbalances in homes, offices, and commercial spaces through
              classical Vastu Shastra. Book{' '}
              <Link href="/best-astrologer-in/jayanagar" className={linkClass}>
                Vastu consultations
              </Link>{' '}
              at the Jayanagar centre or request an on-site visit anywhere in Bangalore.
            </p>
          </div>
          <div className="bg-site-white border border-site-border/40 rounded-md p-6">
            <h4 className="font-display text-xl text-primary font-bold mb-3">
              Horoscope Specialist
            </h4>
            <p className="text-sm text-site-text-muted leading-relaxed">
              From janma kundali analysis to yearly predictions, Guruji reads your{' '}
              <Link href="/best-astrologer-in/jp-nagar" className={linkClass}>
                horoscope
              </Link>{' '}
              with precision — covering career timing, marriage compatibility, health, and
              financial cycles.
            </p>
          </div>
          <div className="bg-site-white border border-site-border/40 rounded-md p-6">
            <h5 className="font-display text-xl text-primary font-bold mb-3">
              Vashikaran Specialist
            </h5>
            <p className="text-sm text-site-text-muted leading-relaxed">
              As a{' '}
              <Link href="/best-astrologer-in/yelahanka" className={linkClass}>
                trusted Vedic astrologer
              </Link>
              , Guruji practises only positive, ethical Vashikaran — restoring love, trust, and
              harmony in relationships without harm to anyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
