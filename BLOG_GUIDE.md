# How to Add a New Blog Post Manually

This guide explains step-by-step how anyone can manually add new blog posts to the website.

---

## Step 1: Add the Blog Image (Optional but Recommended)

1. Save your blog post image (JPG, PNG, or WebP format) in the directory:
   `public/images/`
   *Example filename*: `kaal-sarpa-dosha.jpg` or `my-new-blog-image.jpg`

2. Open [`src/constants/images.ts`](file:///c:/Mydocs/PRANEEL/Freelancing/vishwanathguruji/vishwanathguruji-site/src/constants/images.ts).

3. Add your new image key inside the `IMG` object:
   ```ts
   export const IMG = {
     // ... existing images ...
     myNewBlogImage: '/images/my-new-blog-image.jpg',
   };
   ```

---

## Step 2: Add the Blog Post Content & Metadata

1. Open [`src/constants/blog.ts`](file:///c:/Mydocs/PRANEEL/Freelancing/vishwanathguruji/vishwanathguruji-site/src/constants/blog.ts).

2. Define your post content string at the top of the file (or directly in the object). 
   Use `## Heading Title` for section headings:

   ```ts
   const myNewBlogBody = `This is the introduction paragraph of your blog.

   ## First Section Title

   This is a detailed paragraph explaining the topic.

   ## Second Section Title

   • Point 1
   • Point 2

   ## Conclusion

   Final thoughts and contact recommendations.`;
   ```

3. Add your blog post entry to the `BLOG` array at the top of the list (so it appears newest first):

   ```ts
   export const BLOG: BlogPost[] = [
     {
       slug: 'my-new-blog-post-slug',
       title: 'My New Blog Post Title',
       excerpt: 'A short summary (1-2 sentences) of the blog post for preview cards and SEO.',
       date: '2026-07-29', // Format: YYYY-MM-DD
       image: IMG.myNewBlogImage, // or IMG.hero.vastu, etc.
       category: 'Astrology', // e.g. 'Astrology', 'Doshas', 'Vastu Shastra', 'Remedies'
       content: myNewBlogBody,
       featured: false, // Set true if you want this post highlighted as featured
     },
     // ... other existing blogs ...
   ];
   ```

---

## Field Descriptions

| Field | Description | Example |
| :--- | :--- | :--- |
| **`slug`** | Unique URL identifier (lowercase, hyphens instead of spaces) | `'kaal-sarp-dosha-remedies'` |
| **`title`** | Full article title shown at the top of the post | `'How to Know If You Have Kaal Sarp Dosha'` |
| **`excerpt`** | 1-2 sentence preview text used in blog grid cards & meta tags | `'Understand signs, effects, and remedies for Kaal Sarp Dosha.'` |
| **`date`** | Publication date in `YYYY-MM-DD` format | `'2026-07-25'` |
| **`image`** | Image reference from `IMG` constant | `IMG.kaalSarpaDosha` |
| **`category`** | Topic category shown above the title | `'Doshas'` or `'Vastu Shastra'` |
| **`content`** | Full article body text (supports `##` headings) | `myNewBlogBody` |
| **`featured`** | `true` or `false` — whether to highlight as the primary featured post | `false` |

---

## Step 3: Test and Verify locally

Run the development server or build command to test:

```bash
# Test in development mode
npm run dev

# Or test static build
npm run build
```

Check your new post live at `http://localhost:3000/blog/my-new-blog-post-slug`.

---

## Step 4: Commit and Push to GitHub

```bash
git add .
git commit -m "feat: add new blog post - My New Blog Post Title"
git push origin main
```
