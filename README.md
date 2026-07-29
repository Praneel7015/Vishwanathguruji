# Sri Panchamukhi Astro Centre Website

Next.js 16 (App Router) TypeScript Tailwind CSS Framer Motion Swiper.

This project is a marketing website for Sri Panchamukhi Astro Centre, with:
- Home, About, Services, Service Detail, Blog, Blog Detail, Pujas, Gallery, Testimonials, Contact
- Static data-driven content from `src/constants/*`
- Dynamic slug pages for services and blog
- Production-grade SEO: rich metadata, OG/Twitter cards, multi-schema JSON-LD, sitemap, robots, and area-targeted landing pages

## Setup

```bash
cd vishwanathguruji-site
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

`sitemap.xml` and `robots.txt` are generated automatically at request time by Next.js App Router from `src/app/sitemap.ts` and `src/app/robots.ts` — no postbuild step required.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Swiper
- React Hook Form + Zod

## Project Structure

```txt
src/
  app/                  # App Router pages and route segments
  components/
    layout/             # Navbar, footer, floating actions, menus
    sections/           # Section-level components per page
    ui/                 # Reusable UI primitives/components
  constants/            # Site data (services, testimonials, config, etc.)
  content/
    blogs/              # Standalone Markdown (.md) blog files
  lib/                  # Utilities and metadata helpers
  types/                # Shared TypeScript types
public/
  images/               # Replace placeholder assets with production images

## Blog Management

All blog posts are managed as individual Markdown files inside `src/content/blogs/`. See [`BLOG_GUIDE.md`](./BLOG_GUIDE.md) for full instructions on creating and publishing new blog posts.

```

## Routing Notes

- Dynamic pages:
  - `src/app/services/[slug]/page.tsx`
  - `src/app/blog/[slug]/page.tsx`
- Both use `generateStaticParams`.
- On Next.js 16, route `params` are awaited (async `params`) in dynamic pages and metadata functions.

## Recent UI Updates

- Home hero:
  - Removed "Trusted Since 1989" pill
  - Smoother slider movement/timing
- Home services section:
  - Removed service icons (home only)
- Global:
  - Hidden browser scrollbar styling

## SEO

This project ships with a production-grade SEO setup.

### Metadata
- `src/lib/metadata.ts` — `buildMetadata()` helper that produces title, description, canonical, keywords, OpenGraph (with image), Twitter card, robots, and author/publisher metadata. Each page calls it with a page-specific `title`, `description`, and optional `keywords`/`image`.
- `src/app/layout.tsx` — site-wide defaults, viewport/themeColor, manifest link, preconnect hints, and Search Console verification tokens (configurable in `siteConfig`).
- Per-page metadata exists on every route including dynamic services, blog posts, and area pages.

### Structured data (JSON-LD)
All schema builders live in `src/lib/seo.ts`:
- `organizationSchema` — `Organization` (founder, logo, contact, sameAs)
- `localBusinessSchema` — `LocalBusiness`/`ProfessionalService` (address, geo, hours, areaServed, aggregateRating, knowsAbout)
- `personSchema` — `Person` for Pandit Sri Vishwanath Guruji
- `websiteSchema` — `WebSite` for sitelinks search box eligibility
- `serviceSchema(service)` — `Service` for each service detail page
- `faqSchema(faqs)` — `FAQPage` for service detail + home + area pages
- `articleSchema(post)` — `BlogPosting` for blog detail pages
- `breadcrumbSchema(items)` — `BreadcrumbList` for every interior page
- `reviewsSchema(testimonials)` — review `ItemList`

### Sitemap & robots
- `src/app/sitemap.ts` — dynamic sitemap including all routes (static, services, blog, areas) with `changeFrequency` and `priority`.
- `src/app/robots.ts` — allows main crawlers plus AI crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`) and points to the sitemap.

### Area-targeted landing pages
The `/best-astrologer-in` route family generates one landing page per locality listed in `src/constants/areas.ts`. Each page:
- Renders a unique H1 `Best Astrologer in <Area>`
- Has a city-scoped meta title/description and keyword set
- Emits `LocalBusiness` + `FAQPage` + `BreadcrumbList` JSON-LD scoped to that area
- Links to all other areas from a chips section (internal-link graph)

To add a new locality, append a new entry to `SERVICE_AREAS` in `src/constants/areas.ts`. The sitemap, footer, area index page, and individual landing page are all generated automatically from that data.

### Verification tokens
Search Console verification tokens live on `SITE_CONFIG.verification` (`google`, `bing`, `yandex`). Set them before launch and the root `Metadata.verification` block will surface them automatically.

### Aggregate rating
`SITE_CONFIG.aggregateRating` is used by the LocalBusiness schema. Wire it to a real review aggregator (Google reviews, JustDial, etc.) before launch and keep the values honest.

## Pre-Deploy Checklist

Update these before production launch:

- `src/constants/siteConfig.ts`
  - `siteUrl`, contact details, social links, map embed
  - `verification.google` / `verification.bing` / `verification.yandex`
  - `aggregateRating` (sync with real review counts)
  - `twitterHandle` / `socials.*`
- Content constants:
  - `src/constants/services.ts`
  - `src/constants/blog.ts`
  - `src/constants/testimonials.ts`
  - `src/constants/pujas.ts`
  - `src/constants/areas.ts` (add/remove localities you actually serve)
- Replace placeholder images in `public/images/*`
- Add `/og-image.jpg` (1200×630) for OpenGraph/Twitter previews
- Add `favicon.ico` and (optionally) `apple-icon.png`
- Submit the production sitemap (`/sitemap.xml`) to Google Search Console and Bing Webmaster Tools
- Wire contact form delivery (if still using placeholder submit behavior)

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Production build
- `npm run start` - Run production server
- `npm run lint` - Lint checks

## Created By Praneel7015

