import Link from 'next/link';
import { Instagram, Facebook, Youtube, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { ALL_NAV_LINKS } from '@/constants/navLinks';
import { SERVICE_AREAS } from '@/constants/areas';
import Button from '@/components/ui/Button';

const socials = [
  { icon: Instagram, href: SITE_CONFIG.socials.instagram, label: 'Instagram' },
  { icon: Facebook, href: SITE_CONFIG.socials.facebook, label: 'Facebook' },
  { icon: Youtube, href: SITE_CONFIG.socials.youtube, label: 'YouTube' },
  { icon: FaWhatsapp, href: SITE_CONFIG.whatsapp, label: 'WhatsApp' },
];

export default function Footer() {
  const siteLinks = ALL_NAV_LINKS.filter((l) => !l.children);

  return (
    <footer className="relative bg-site-dark-band text-site-text-light overflow-hidden">
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-devanagari text-accent text-[18rem] opacity-[0.04] pointer-events-none select-none"
      >
        ॐ
      </span>

      <div className="relative max-w-container mx-auto px-6 py-14 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] lg:gap-12">
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent text-site-white flex items-center justify-center font-devanagari text-xl leading-none">
              <span className="inline-flex items-center justify-center leading-none translate-y-1">ॐ</span>
            </div>
            <div className="font-display text-site-white font-bold text-lg leading-tight">
              {SITE_CONFIG.name}
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-site-text-light/80">
            Pandit Sri Vishwanath Guruji, Bangalore&apos;s most trusted Vedic astrologer, guiding
            seekers since {SITE_CONFIG.established} through authentic Vedic remedies and
            consultations.
          </p>
          <div className="mt-6">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent mb-2">
              Hours
            </div>
            <div className="text-sm">{SITE_CONFIG.hoursShort}</div>
          </div>
          <div className="flex items-center gap-2 mt-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-site-dark-surface text-accent flex items-center justify-center hover:bg-accent hover:text-site-white transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent mb-4">
            Site
          </div>
          <ul className="space-y-2">
            {siteLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent mb-4">
            Find Us
          </div>
          <div className="rounded overflow-hidden border border-accent/30 mb-3 aspect-[4/3]">
            <iframe
              src={SITE_CONFIG.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[40%]"
              title="Astrologer Vishwanath Guruji Jayanagar on Google Maps"
            />
          </div>
          <p className="flex gap-2 text-sm leading-relaxed">
            <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
            {SITE_CONFIG.address}
          </p>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-2 text-sm mt-2 hover:text-accent"
          >
            <Phone size={14} className="text-accent" /> {SITE_CONFIG.phoneDisplay}
          </a>
          <Button
            href={SITE_CONFIG.mapDirections}
            external
            variant="ghost"
            size="sm"
            className="mt-4 border-accent text-accent hover:bg-accent hover:text-site-white"
          >
            Get Directions →
          </Button>
        </div>
      </div>

      <div className="relative border-t border-site-dark-surface">
        <div className="max-w-container mx-auto px-6 py-6">
          <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent mb-3">
            Best Astrologer Near You
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-site-text-light/80">
            {SERVICE_AREAS.map((a) => (
              <Link
                key={a.slug}
                href={`/best-astrologer-in/${a.slug}`}
                className="hover:text-accent transition-colors"
              >
                Astrologer in {a.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-site-dark-surface">
        <div className="max-w-container mx-auto px-6 pt-4 pb-32 sm:pb-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-site-text-light/70 sm:pr-28">
          <span>
            © {new Date().getFullYear()} Vishwanath Guruji. All rights reserved.
          </span>
          <span>
            Made by{' '}
            <a
              href="https://praneel.sindhole.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
            >
              Praneel S
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
