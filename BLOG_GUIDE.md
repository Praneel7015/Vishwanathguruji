# 📝 How to Add & Publish Blog Posts

There are two ways to add new blog posts to the website:

1. **Option A: Admin Portal (Recommended for Website Owner)** — No code required!
2. **Option B: Manual Markdown File Addition** — For developers.

---

## 🚀 Option A: Automated Admin Portal (`/admin`)

The easiest way for the website owner to publish blogs without touching code or GitHub!

### Step 1: Open the Admin Portal
Visit: **`https://vishwanathguruji.com/admin`** (or `http://localhost:3000/admin` locally).

### Step 2: Setup GitHub Access Token (First Time Only)
1. Click **"Setup Access Token"**.
2. Enter a GitHub Personal Access Token (PAT) with `repo` / `contents` write permissions.
3. Click **Save & Verify Token**. The token is stored safely in your browser.

### Step 3: Write & Publish Article
1. Enter **Article Title** (the URL slug generates automatically).
2. Choose a **Category** (`Astrology`, `Vastu Shastra`, `Doshas`, `Remedies`, `Marriage`, etc.).
3. Upload a **Cover Image** (drag and drop JPG, PNG, or WebP).
4. Write a **Short Excerpt Summary** (1-2 sentences for preview cards & Google SEO).
5. Draft your article content in the editor (use `##` for section titles, or click formatting buttons).
6. Click **Publish Article Now 🚀**.

> **What happens automatically?**
> The Admin Portal commits the image to `public/images/` and the article to `src/content/blogs/` directly on GitHub. 
> GitHub Actions automatically builds and deploys your new blog post to GoDaddy via FTP in ~1-2 minutes!

---

## 💻 Option B: Manual Markdown File (For Developers)

Each blog post lives in its own simple `.md` file inside `src/content/blogs/`.

1. Add your cover image to `public/images/my-cover-image.jpg`.
2. Create `src/content/blogs/my-new-blog-slug.md`:

```markdown
---
slug: "my-new-blog-slug"
title: "My New Blog Post Title"
excerpt: "Short 1-2 sentence preview text for search engines and cards."
date: "2026-08-01"
image: "/images/my-cover-image.jpg"
category: "Astrology"
featured: false
---

Opening introduction paragraph...

## Section Title

Section content...
```

3. Commit and push to `main` branch on GitHub:
```bash
git add .
git commit -m "feat(blog): add my new blog post"
git push origin main
```
