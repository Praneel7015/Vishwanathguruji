import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from '@/types';

const BLOGS_DIR = path.join(process.cwd(), 'src/content/blogs');

export function getAllBlogs(): BlogPost[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];

  const fileNames = fs.readdirSync(BLOGS_DIR);
  const blogs = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(BLOGS_DIR, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: data.slug || fileName.replace(/\.md$/, ''),
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        image: data.image || '',
        category: data.category || 'Astrology',
        content: content.trim(),
        featured: Boolean(data.featured),
      } as BlogPost;
    });

  // Sort blogs by date descending (newest first)
  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const BLOG: BlogPost[] = getAllBlogs();

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
  BLOG.find((p) => p.slug === slug);
