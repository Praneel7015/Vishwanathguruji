'use client';

import { parseBlogContent } from '@/lib/parseBlogContent';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const blocks = parseBlogContent(content);

  return (
    <div className="space-y-4">
      {blocks.map((block, idx) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={idx}
              className="font-display text-2xl md:text-3xl text-primary font-semibold mt-8 mb-4"
            >
              {block.content}
            </h2>
          );
        }

        return (
          <p
            key={idx}
            className="text-site-text-muted leading-relaxed whitespace-pre-line"
          >
            {block.content}
          </p>
        );
      })}
    </div>
  );
}
