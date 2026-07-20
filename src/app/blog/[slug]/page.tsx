import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BlogContent from '@/components/sections/blog/BlogContent';
import { BLOG, getBlogBySlug } from '@/constants/blog';
import { buildMetadata } from '@/lib/metadata';
import { formatDate } from '@/lib/utils';
import GlobalClosingCta from '@/components/sections/shared/GlobalClosingCta';
import { articleSchema, breadcrumbSchema, jsonLd } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: 'Article not found' };
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.date,
    keywords: [
      post.category.toLowerCase(),
      `${post.category.toLowerCase()} Bangalore`,
      'vedic astrology article',
      'pandit Vishwanath Guruji',
    ],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();
  const recent = BLOG.filter((p) => p.slug !== post.slug).slice(0, 4);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema(post))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))}
      />
      <PageHero title={post.title} breadcrumb={breadcrumbs} backgroundImage={post.image} />
      <section className="bg-site-bg py-16 md:py-20">
        <div className="max-w-container mx-auto px-6 grid lg:grid-cols-[1fr_320px] gap-12">
          <article>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-2">
              {post.category} · {formatDate(post.date)}
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-primary font-bold mb-6">
              {post.title}
            </h1>
            <div className="relative aspect-[16/9] rounded-md overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
            <BlogContent content={post.content} />
          </article>
          <aside className="lg:sticky lg:top-32 self-start">
            <div className="bg-site-white p-6 rounded-md border border-site-border/40">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-3">
                Recent Articles
              </div>
              <ul className="space-y-3">
                {recent.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="group block">
                      <div className="text-sm font-display text-site-text group-hover:text-primary">
                        {r.title}
                      </div>
                      <div className="text-xs text-site-text-muted mt-1">{formatDate(r.date)}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <GlobalClosingCta />
    </>
  );
}
