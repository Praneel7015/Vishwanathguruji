import type { Metadata, Viewport } from 'next';
import {
  Playfair_Display,
  DM_Sans,
  Noto_Serif_Devanagari,
  Noto_Serif_Kannada,
} from 'next/font/google';
// import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from '@/components/layout/Navbar';
import GurujiBanner from '@/components/layout/GurujiBanner';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import BackToTop from '@/components/ui/BackToTop';
import { SITE_CONFIG } from '@/constants/siteConfig';
import {
  localBusinessSchema,
  organizationSchema,
  personSchema,
  websiteSchema,
  jsonLd,
} from '@/lib/seo';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
const devanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-devanagari',
  display: 'swap',
  weight: ['400', '600'],
});
const kannada = Noto_Serif_Kannada({
  subsets: ['kannada'],
  variable: '--font-kannada',
  display: 'swap',
  weight: ['400', '600'],
});

const SITE_DEFAULT_TITLE = `${SITE_CONFIG.guruji} | Best Astrologer in Bangalore | ${SITE_CONFIG.name}`;
const SITE_DEFAULT_DESCRIPTION =
  'Pandit Sri Vishwanath Guruji is the best Vedic astrologer in Bangalore with 35+ years of experience. Expert Vashikaran, Black Magic Removal, Vastu Shastra, marriage, love, career, family, health, and financial problem solutions at Sri Panchamukhi Astro Centre, Jayanagar — serving Bangalore, Karnataka, and clients across India.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: SITE_DEFAULT_TITLE,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_DEFAULT_DESCRIPTION,
  applicationName: SITE_CONFIG.name,
  keywords: SITE_CONFIG.primaryKeywords,
  authors: [{ name: SITE_CONFIG.guruji, url: SITE_CONFIG.siteUrl }],
  creator: SITE_CONFIG.guruji,
  publisher: SITE_CONFIG.name,
  category: 'Vedic Astrology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    siteName: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
    title: SITE_DEFAULT_TITLE,
    description: SITE_DEFAULT_DESCRIPTION,
    images: [
      {
        url: SITE_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.guruji} — ${SITE_CONFIG.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_DEFAULT_TITLE,
    description: SITE_DEFAULT_DESCRIPTION,
    images: [SITE_CONFIG.defaultOgImage],
    site: SITE_CONFIG.twitterHandle,
    creator: SITE_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: SITE_CONFIG.verification.google || undefined,
    yandex: SITE_CONFIG.verification.yandex || undefined,
    other: SITE_CONFIG.verification.bing
      ? { 'msvalidate.01': SITE_CONFIG.verification.bing }
      : undefined,
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={SITE_CONFIG.language}
      className={`${playfair.variable} ${dmSans.variable} ${devanagari.variable} ${kannada.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationSchema())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessSchema())}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(personSchema())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema())} />
      </head>
      <body>
        <Navbar />
        <GurujiBanner />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <BackToTop />
        {/* <GoogleAnalytics gaId="G-XXXXXXX" /> */}
      </body>
    </html>
  );
}
