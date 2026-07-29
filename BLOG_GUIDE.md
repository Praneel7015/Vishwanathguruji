# 📝 How to Add a New Blog Post Manually

Adding a new blog post is now super easy! Each blog post lives in its own simple `.md` (Markdown) file inside `src/content/blogs/`.

---

## Step 1: Add the Blog Image (Optional but Recommended)

Save your blog post cover image (JPG, PNG, or WebP) inside:
`public/images/`
*Example*: `public/images/my-new-blog-image.jpg`

---

## Step 2: Create a New Markdown File

1. Navigate to:
   `src/content/blogs/`

2. Create a new `.md` file named after your blog's topic/slug:
   *Example*: `my-new-blog-post.md`

3. Copy and paste the template below into your new file:

```markdown
---
slug: "my-new-blog-post"
title: "My New Blog Post Title"
excerpt: "A short 1-2 sentence preview summary of the post for search engines and cards."
date: "2026-08-01"
image: "/images/my-new-blog-image.jpg"
category: "Astrology"
featured: false
---

Write your opening introduction paragraph here.

## First Section Heading

Write your section content here. You can use normal text formatting:

• Bullet point 1
• Bullet point 2

## Second Section Heading

Add as many sections as you like.

## Conclusion

Final summary and contact advice.
```

---

## Header Field Reference

| Field | Description | Example |
| :--- | :--- | :--- |
| **`slug`** | Unique URL identifier (lowercase, hyphens) | `"my-new-blog-post"` |
| **`title`** | Article title displayed at the top | `"How Vastu Shastra Helps Your Home"` |
| **`excerpt`** | 1-2 sentence preview text used in cards & Google SEO | `"Discover how Vastu Shastra balances natural elements..."` |
| **`date`** | Publication date (`YYYY-MM-DD`) | `"2026-08-01"` |
| **`image`** | Image path in `public/images/` | `"/images/my-image.jpg"` |
| **`category`** | Topic badge shown above title | `"Astrology"`, `"Vastu Shastra"`, `"Doshas"`, `"Remedies"` |
| **`featured`** | `true` or `false` — whether to highlight as featured post | `false` |

---

## Step 3: Test Locally

To test your new blog post on your computer:

```bash
npm run dev
```

Visit: `http://localhost:3000/blog/my-new-blog-post`

---

## Step 4: Publish to GitHub

```bash
git add .
git commit -m "feat: add new blog post - My New Blog Post"
git push origin main
```
