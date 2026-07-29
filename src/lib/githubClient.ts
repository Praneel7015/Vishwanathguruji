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

/** Get the SHA of the latest commit on the branch */
async function getLatestCommitSha(): Promise<string> {
  const res = await fetch(`${API_BASE}/git/ref/heads/${BRANCH}`, { headers: headers() });
  if (!res.ok) throw new Error(`Failed to get branch ref: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data.object.sha;
}

/** Get the tree SHA for a given commit */
async function getCommitTreeSha(commitSha: string): Promise<string> {
  const res = await fetch(`${API_BASE}/git/commits/${commitSha}`, { headers: headers() });
  if (!res.ok) throw new Error(`Failed to get commit: ${res.status}`);
  const data = await res.json();
  return data.tree.sha;
}

/** Create a blob (for binary image or text content) */
async function createBlob(content: string, encoding: 'base64' | 'utf-8'): Promise<string> {
  const res = await fetch(`${API_BASE}/git/blobs`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ content, encoding }),
  });
  if (!res.ok) throw new Error(`Failed to create blob: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data.sha;
}

/** Create a new tree with the given file entries */
async function createTree(
  baseTreeSha: string,
  files: { path: string; sha: string; mode: '100644' }[],
): Promise<string> {
  const res = await fetch(`${API_BASE}/git/trees`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      base_tree: baseTreeSha,
      tree: files.map((f) => ({
        path: f.path,
        mode: f.mode,
        type: 'blob',
        sha: f.sha,
      })),
    }),
  });
  if (!res.ok) throw new Error(`Failed to create tree: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data.sha;
}

/** Create a new commit */
async function createCommit(
  message: string,
  treeSha: string,
  parentSha: string,
): Promise<string> {
  const res = await fetch(`${API_BASE}/git/commits`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      message,
      tree: treeSha,
      parents: [parentSha],
    }),
  });
  if (!res.ok) throw new Error(`Failed to create commit: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data.sha;
}

/** Update the branch reference to point at a new commit */
async function updateBranchRef(commitSha: string): Promise<void> {
  const res = await fetch(`${API_BASE}/git/refs/heads/${BRANCH}`, {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify({ sha: commitSha }),
  });
  if (!res.ok) throw new Error(`Failed to update branch: ${res.status} ${await res.text()}`);
}

export interface PublishResult {
  commitSha: string;
  blogPath: string;
  imagePath: string;
}

export type ProgressCallback = (step: string, detail?: string) => void;

/**
 * Publishes a new blog post to the GitHub repository.
 * Commits both the cover image and the markdown file atomically in a single commit.
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

  // Build the frontmatter markdown content
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

  onProgress?.('Preparing upload', 'Getting latest commit info...');
  const latestCommitSha = await getLatestCommitSha();
  const baseTreeSha = await getCommitTreeSha(latestCommitSha);

  onProgress?.('Uploading image', `Uploading cover image to ${imagePath}...`);
  const imageBlobSha = await createBlob(imageBase64, 'base64');

  onProgress?.('Creating blog file', `Creating ${blogPath}...`);
  const markdownBlobSha = await createBlob(markdown, 'utf-8');

  onProgress?.('Building commit', 'Creating Git tree and commit...');
  const newTreeSha = await createTree(baseTreeSha, [
    { path: imagePath, sha: imageBlobSha, mode: '100644' },
    { path: blogPath, sha: markdownBlobSha, mode: '100644' },
  ]);

  const commitMessage = `feat(blog): add "${title}"`;
  const newCommitSha = await createCommit(commitMessage, newTreeSha, latestCommitSha);

  onProgress?.('Publishing', 'Pushing to main branch...');
  await updateBranchRef(newCommitSha);

  onProgress?.('Done', 'Blog post published! Deployment will start automatically.');

  return {
    commitSha: newCommitSha,
    blogPath,
    imagePath,
  };
}

/** Validates a GitHub token by fetching the repository info */
export async function validateToken(token: string): Promise<boolean> {
  try {
    const res = await fetch(API_BASE, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
      },
    });
    return res.ok;
  } catch {
    return false;
  }
}
