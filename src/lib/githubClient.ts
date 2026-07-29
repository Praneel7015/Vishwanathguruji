/**
 * Client-side GitHub REST API helper.
 * Commits files (images + markdown) directly to the repository
 * using a GitHub Personal Access Token stored in localStorage.
 */

const REPO_OWNER = 'Praneel7015';
const REPO_NAME = 'Vishwanathguruji';
const BRANCH = 'main';
const API_BASE = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;

function getToken(): string {
  const token = localStorage.getItem('github_pat');
  if (!token) throw new Error('GitHub token not configured. Please set up your access token first.');
  return token;
}

function headers(): HeadersInit {
  return {
    Authorization: `Bearer ${getToken()}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json',
  };
}

/** Helper to encode UTF-8 string to Base64 in browser */
function stringToBase64(str: string): string {
  return btoa(unescape(encodeURIComponent(str)));
}

/**
 * Creates or updates a file in the repository using GitHub Contents API
 */
async function createOrUpdateFile(
  filePath: string,
  contentBase64: string,
  commitMessage: string,
): Promise<{ commitSha: string }> {
  // Check if file exists to get existing SHA for updates
  let sha: string | undefined;
  try {
    const checkRes = await fetch(`${API_BASE}/contents/${filePath}?ref=${BRANCH}`, {
      headers: headers(),
    });
    if (checkRes.ok) {
      const existingData = await checkRes.json();
      sha = existingData.sha;
    }
  } catch {
    // File does not exist yet
  }

  const res = await fetch(`${API_BASE}/contents/${filePath}`, {
    method: 'PUT',
    headers: headers(),
    body: JSON.stringify({
      message: commitMessage,
      content: contentBase64,
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    let parsed: any = {};
    try {
      parsed = JSON.parse(errorText);
    } catch {
      // Ignore
    }

    if (res.status === 403) {
      throw new Error(
        `GitHub Permission Error (403): Your Personal Access Token does not have write permission for repository "${REPO_OWNER}/${REPO_NAME}". Please ensure your token has "Contents: Read & Write" permission (Fine-Grained PAT) or "repo" / "public_repo" scope (Classic PAT).`,
      );
    }

    throw new Error(
      `Failed to save ${filePath}: ${res.status} ${parsed.message || errorText}`,
    );
  }

  const data = await res.json();
  return { commitSha: data.commit.sha };
}

export interface PublishResult {
  commitSha: string;
  blogPath: string;
  imagePath: string;
}

export type ProgressCallback = (step: string, detail?: string) => void;

/**
 * Publishes a new blog post to the GitHub repository.
 * Uploads cover image and creates/updates markdown post via GitHub Contents API.
 */
export async function publishBlogPost(
  {
    slug,
    title,
    excerpt,
    date,
    category,
    content,
    featured,
    imageBase64,
    imageExtension,
  }: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    content: string;
    featured: boolean;
    imageBase64: string;
    imageExtension: string;
  },
  onProgress?: ProgressCallback,
): Promise<PublishResult> {
  const imagePath = `public/images/${slug}.${imageExtension}`;
  const blogPath = `src/content/blogs/${slug}.md`;

  // Build frontmatter markdown content
  const markdown = `---
slug: "${slug}"
title: "${title.replace(/"/g, '\\"')}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
date: "${date}"
image: "/images/${slug}.${imageExtension}"
category: "${category}"
featured: ${featured}
---

${content.trim()}
`;

  // 1. Upload Cover Image
  onProgress?.('Uploading image', `Saving cover image to ${imagePath}...`);
  await createOrUpdateFile(
    imagePath,
    imageBase64,
    `feat(blog): upload cover image for "${title}"`,
  );

  // 2. Create Blog Markdown File
  onProgress?.('Creating blog post', `Saving article file to ${blogPath}...`);
  const { commitSha } = await createOrUpdateFile(
    blogPath,
    stringToBase64(markdown),
    `feat(blog): add article "${title}"`,
  );

  onProgress?.('Done', 'Blog post published! GoDaddy deployment started via GitHub Actions.');

  return {
    commitSha,
    blogPath,
    imagePath,
  };
}

/** Validates a GitHub token and checks repository write permissions */
export async function validateToken(
  token: string,
): Promise<{ valid: boolean; message?: string }> {
  try {
    const res = await fetch(API_BASE, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
      },
    });

    if (!res.ok) {
      if (res.status === 401) {
        return { valid: false, message: 'Invalid or expired Personal Access Token.' };
      }
      if (res.status === 404) {
        return {
          valid: false,
          message: `Repository ${REPO_OWNER}/${REPO_NAME} not found or token has no access to it.`,
        };
      }
      return { valid: false, message: `GitHub API error (${res.status}).` };
    }

    const repoData = await res.json();
    if (repoData.permissions && repoData.permissions.push === false) {
      return {
        valid: false,
        message:
          'Token authenticated, but lacks WRITE/PUSH permissions for this repository. Please grant "Contents: Read & Write" permission.',
      };
    }

    return { valid: true };
  } catch (err: any) {
    return { valid: false, message: err.message || 'Connection error to GitHub API.' };
  }
}
