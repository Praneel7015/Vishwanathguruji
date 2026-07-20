export interface BlogContentBlock {
  type: 'heading' | 'paragraph';
  content: string;
}

/**
 * Parse blog content with markdown-style headers (## Heading)
 * Returns blocks separated by type for proper rendering
 */
export function parseBlogContent(content: string): BlogContentBlock[] {
  const lines = content.split('\n');
  const blocks: BlogContentBlock[] = [];
  let currentParagraph = '';

  for (const line of lines) {
    const trimmed = line.trim();

    // Check for h2 heading (## Text)
    if (trimmed.startsWith('##')) {
      // Save any accumulated paragraph
      if (currentParagraph.trim()) {
        blocks.push({
          type: 'paragraph',
          content: currentParagraph.trim(),
        });
        currentParagraph = '';
      }

      // Extract heading text (remove ## prefix)
      const headingText = trimmed.replace(/^##\s*/, '').trim();
      blocks.push({
        type: 'heading',
        content: headingText,
      });
    } else if (trimmed === '') {
      // Empty line - mark paragraph boundary
      if (currentParagraph.trim()) {
        blocks.push({
          type: 'paragraph',
          content: currentParagraph.trim(),
        });
        currentParagraph = '';
      }
    } else {
      // Regular content line
      currentParagraph += (currentParagraph ? '\n' : '') + line;
    }
  }

  // Don't forget the last paragraph
  if (currentParagraph.trim()) {
    blocks.push({
      type: 'paragraph',
      content: currentParagraph.trim(),
    });
  }

  return blocks;
}
