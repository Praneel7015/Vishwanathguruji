'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { validateToken, publishBlogPost } from '@/lib/githubClient';
import { parseBlogContent } from '@/lib/parseBlogContent';

const CATEGORIES = [
  'Astrology',
  'Vastu Shastra',
  'Doshas',
  'Remedies',
  'Marriage',
  'Protection',
  'Family',
  'Horoscopes',
  'Astrology Basics',
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function AdminPage() {
  // Token state
  const [token, setToken] = useState<string>('');
  const [tokenInput, setTokenInput] = useState<string>('');
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [isCheckingToken, setIsCheckingToken] = useState(false);
  const [showTokenModal, setShowTokenModal] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [isSlugManual, setIsSlugManual] = useState(false);
  const [category, setCategory] = useState('Astrology');
  const [customCategory, setCustomCategory] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [featured, setFeatured] = useState(false);
  const [content, setContent] = useState('');

  // Image state
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imageExt, setImageExt] = useState<string>('jpg');

  // UI state
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishStep, setPublishStep] = useState<string>('');
  const [publishDetail, setPublishDetail] = useState<string>('');
  const [publishSuccess, setPublishSuccess] = useState<{
    commitSha: string;
    slug: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved token on mount
  useEffect(() => {
    const saved = localStorage.getItem('github_pat');
    if (saved) {
      setToken(saved);
      setTokenInput(saved);
      checkTokenValidity(saved);
    } else {
      setShowTokenModal(true);
    }
  }, []);

  // Sync title -> slug if not manually edited
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isSlugManual) {
      setSlug(slugify(val));
    }
  };

  const checkTokenValidity = async (t: string) => {
    setIsCheckingToken(true);
    const { valid, message } = await validateToken(t);
    setIsTokenValid(valid);
    setIsCheckingToken(false);
    if (!valid && message) {
      setErrorMsg(message);
    }
    return valid;
  };

  const handleSaveToken = async () => {
    if (!tokenInput.trim()) return;
    setErrorMsg(null);
    const valid = await checkTokenValidity(tokenInput.trim());
    if (valid) {
      localStorage.setItem('github_pat', tokenInput.trim());
      setToken(tokenInput.trim());
      setShowTokenModal(false);
    }
  };

  const handleImageChange = (file: File | null) => {
    if (!file) return;

    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const validExts = ['jpg', 'jpeg', 'png', 'webp'];
    if (!validExts.includes(ext)) {
      setErrorMsg('Please upload a valid image file (JPG, PNG, or WebP).');
      return;
    }

    setImageFile(file);
    setImageExt(ext === 'jpeg' ? 'jpg' : ext);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImagePreview(result);
      // Remove data url prefix (e.g. data:image/jpeg;base64,)
      const base64Data = result.split(',')[1];
      setImageBase64(base64Data);
    };
    reader.readAsDataURL(file);
  };

  const insertMarkdown = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end) || 'text';
    const newContent =
      content.substring(0, start) + prefix + selectedText + suffix + content.substring(end);

    setContent(newContent);
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!token || !isTokenValid) {
      setShowTokenModal(true);
      return;
    }

    if (!title.trim() || !slug.trim()) {
      setErrorMsg('Please enter an article title.');
      return;
    }

    if (!excerpt.trim()) {
      setErrorMsg('Please enter a short excerpt summary.');
      return;
    }

    if (!content.trim()) {
      setErrorMsg('Please enter article content.');
      return;
    }

    if (!imageBase64) {
      setErrorMsg('Please upload a cover image for the blog post.');
      return;
    }

    const finalCategory = category === 'Custom' ? customCategory.trim() : category;
    if (!finalCategory) {
      setErrorMsg('Please specify a category.');
      return;
    }

    setIsPublishing(true);
    setPublishStep('Starting publish...');
    setPublishDetail('Initializing GitHub API...');

    try {
      const result = await publishBlogPost(
        {
          slug,
          title: title.trim(),
          excerpt: excerpt.trim(),
          date,
          category: finalCategory,
          content,
          featured,
          imageBase64,
          imageExtension: imageExt,
        },
        (step, detail) => {
          setPublishStep(step);
          setPublishDetail(detail || '');
        },
      );

      setPublishSuccess({
        commitSha: result.commitSha,
        slug,
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred while publishing to GitHub.');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleResetForm = () => {
    setTitle('');
    setSlug('');
    setIsSlugManual(false);
    setExcerpt('');
    setContent('');
    setImageFile(null);
    setImagePreview(null);
    setImageBase64(null);
    setPublishSuccess(null);
    setErrorMsg(null);
  };

  const parsedBlocks = parseBlogContent(content);

  return (
    <div className="min-h-screen bg-site-bg py-12 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-4xl mx-auto">
        {/* Header Band */}
        <div className="bg-site-white p-6 rounded-lg border border-site-border/60 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent block">
              Admin Portal
            </span>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-primary">
              Blog Article Creator
            </h1>
            <p className="text-xs text-site-text-muted mt-1">
              Publish new articles directly to GoDaddy via GitHub Actions deployment
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowTokenModal(true)}
              className={`text-xs px-3 py-2 rounded border font-medium transition-colors flex items-center gap-1.5 ${
                isTokenValid
                  ? 'border-emerald-300 text-emerald-800 bg-emerald-50 hover:bg-emerald-100'
                  : 'border-amber-300 text-amber-800 bg-amber-50 hover:bg-amber-100'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isTokenValid ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
              />
              {isTokenValid ? 'GitHub Token Active' : 'Setup Access Token'}
            </button>

            <Link
              href="/blog"
              className="text-xs px-3 py-2 rounded border border-site-border text-site-text-muted hover:text-primary transition-colors"
            >
              View Blog Page →
            </Link>
          </div>
        </div>

        {/* Token Modal */}
        {showTokenModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-site-white max-w-md w-full p-6 rounded-lg border border-site-border shadow-xl">
              <h2 className="font-display text-xl font-bold text-primary mb-2">
                GitHub Access Token Setup
              </h2>
              <p className="text-xs text-site-text-muted mb-3 leading-relaxed">
                Enter your GitHub Personal Access Token to authorize publishing directly to your repository:
              </p>

              <div className="bg-site-surface p-3 rounded text-[11px] text-site-text-muted space-y-1 mb-4 border border-site-border/40">
                <p className="font-semibold text-primary">Required Token Permissions:</p>
                <p>• <strong>Fine-Grained Token:</strong> Select <code>Praneel7015/Vishwanathguruji</code> & set <strong>Contents: Read and write</strong></p>
                <p>• <strong>Classic Token:</strong> Check the <code>repo</code> or <code>public_repo</code> scope</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-site-text uppercase mb-1">
                    Personal Access Token (PAT)
                  </label>
                  <input
                    type="password"
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    placeholder="github_pat_11A..."
                    className="w-full text-sm p-3 rounded border border-site-border bg-site-white text-site-text focus:outline-none focus:border-primary font-mono"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 text-xs bg-red-50 text-red-700 border border-red-200 rounded">
                    {errorMsg}
                  </div>
                )}

                <div className="flex justify-end gap-2 pt-2">
                  {token && (
                    <button
                      type="button"
                      onClick={() => setShowTokenModal(false)}
                      className="px-4 py-2 text-xs font-semibold text-site-text-muted hover:text-site-text"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleSaveToken}
                    disabled={isCheckingToken}
                    className="px-5 py-2 text-xs font-semibold text-white bg-primary hover:bg-primary-dark rounded transition-colors"
                  >
                    {isCheckingToken ? 'Validating...' : 'Save & Verify Token'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal / Banner */}
        {publishSuccess && (
          <div className="bg-emerald-50 border border-emerald-300 p-6 rounded-lg mb-8 shadow-sm text-emerald-900">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                ✓
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-emerald-900">
                  Article Published Successfully!
                </h3>
                <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                  Your new blog post and cover image have been committed to GitHub (Commit:{' '}
                  <code className="font-mono bg-emerald-100 px-1 py-0.5 rounded">
                    {publishSuccess.commitSha.slice(0, 7)}
                  </code>
                  ).
                </p>
                <p className="text-xs text-emerald-700 mt-1">
                  GoDaddy deployment via GitHub Actions has been triggered automatically. Your post
                  will be live on the website in ~1-2 minutes!
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <Link
                    href={`/blog/${publishSuccess.slug}`}
                    target="_blank"
                    className="text-xs px-4 py-2 bg-emerald-700 text-white font-semibold rounded hover:bg-emerald-800 transition-colors"
                  >
                    Preview Article Page ↗
                  </Link>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="text-xs px-4 py-2 border border-emerald-600 text-emerald-800 font-semibold rounded hover:bg-emerald-100 transition-colors"
                  >
                    Write Another Article +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && !showTokenModal && (
          <div className="bg-red-50 border border-red-300 text-red-800 p-4 rounded-lg mb-6 text-xs flex items-center justify-between">
            <span>{errorMsg}</span>
            <button
              onClick={() => setErrorMsg(null)}
              className="text-red-600 font-bold hover:text-red-900 ml-4"
            >
              ✕
            </button>
          </div>
        )}

        {/* Main Publishing Form */}
        <form onSubmit={handlePublish} className="space-y-6">
          <div className="bg-site-white p-6 rounded-lg border border-site-border/60 shadow-sm space-y-5">
            {/* Title & Slug */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-site-text uppercase tracking-wider mb-1">
                  Article Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. How to Know If You Have Kaal Sarp Dosha?"
                  required
                  className="w-full text-sm p-3 rounded border border-site-border bg-site-white text-site-text focus:outline-none focus:border-primary font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-site-text uppercase tracking-wider mb-1">
                  URL Slug <span className="text-site-text-light font-normal">(Auto-generated)</span>
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => {
                    setSlug(slugify(e.target.value));
                    setIsSlugManual(true);
                  }}
                  placeholder="kaal-sarp-dosha-signs-and-remedies"
                  required
                  className="w-full text-sm p-3 rounded border border-site-border bg-site-surface text-site-text font-mono focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Category & Date & Featured */}
            <div className="grid md:grid-cols-3 gap-5 pt-2">
              <div>
                <label className="block text-xs font-semibold text-site-text uppercase tracking-wider mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-sm p-3 rounded border border-site-border bg-site-white text-site-text focus:outline-none focus:border-primary font-medium"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  <option value="Custom">+ Custom Category...</option>
                </select>

                {category === 'Custom' && (
                  <input
                    type="text"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    placeholder="Enter custom category"
                    className="w-full text-sm p-2.5 mt-2 rounded border border-site-border bg-site-white text-site-text"
                  />
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-site-text uppercase tracking-wider mb-1">
                  Publish Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-sm p-3 rounded border border-site-border bg-site-white text-site-text focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex items-center pt-6">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="w-4 h-4 text-primary rounded border-site-border focus:ring-primary"
                  />
                  <span className="text-xs font-semibold text-site-text uppercase tracking-wider">
                    Feature on Blog Hero
                  </span>
                </label>
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-semibold text-site-text uppercase tracking-wider mb-1">
                Short Excerpt / Preview Summary <span className="text-red-500">*</span>
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                placeholder="1-2 sentences summarizing the article for card previews and Google search metadata..."
                required
                className="w-full text-sm p-3 rounded border border-site-border bg-site-white text-site-text focus:outline-none focus:border-primary leading-relaxed"
              />
            </div>

            {/* Cover Image Upload */}
            <div>
              <label className="block text-xs font-semibold text-site-text uppercase tracking-wider mb-1">
                Cover Image <span className="text-red-500">*</span>
              </label>

              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-site-border/80 hover:border-primary rounded-lg p-6 text-center cursor-pointer bg-site-surface/30 hover:bg-site-surface/60 transition-colors"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => handleImageChange(e.target.files?.[0] || null)}
                  className="hidden"
                />

                {imagePreview ? (
                  <div className="flex flex-col items-center">
                    <div className="relative w-full max-w-md aspect-[16/9] rounded overflow-hidden mb-3 shadow">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <span className="text-xs text-site-text font-medium">
                      {imageFile?.name} ({(imageFile?.size ? imageFile.size / 1024 : 0).toFixed(1)} KB)
                    </span>
                    <span className="text-xs text-accent mt-1 hover:underline">
                      Click to change image
                    </span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto text-xl font-bold">
                      📷
                    </div>
                    <p className="text-xs font-semibold text-site-text">
                      Click or drag cover image here
                    </p>
                    <p className="text-[11px] text-site-text-muted">
                      Supports JPG, PNG, or WebP (Recommended: 1200x675px)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Article Body Content & Editor */}
          <div className="bg-site-white rounded-lg border border-site-border/60 shadow-sm overflow-hidden">
            {/* Editor Header / Tabs */}
            <div className="bg-site-surface px-6 py-3 border-b border-site-border/60 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('write')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded transition-colors ${
                    activeTab === 'write'
                      ? 'bg-primary text-white'
                      : 'text-site-text-muted hover:text-site-text'
                  }`}
                >
                  Write Content
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded transition-colors ${
                    activeTab === 'preview'
                      ? 'bg-primary text-white'
                      : 'text-site-text-muted hover:text-site-text'
                  }`}
                >
                  Live Preview
                </button>
              </div>

              {activeTab === 'write' && (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => insertMarkdown('## ')}
                    className="text-xs px-2 py-1 bg-site-white border border-site-border rounded font-bold hover:bg-site-surface"
                    title="Add Heading"
                  >
                    H2 Heading
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdown('• ')}
                    className="text-xs px-2 py-1 bg-site-white border border-site-border rounded font-bold hover:bg-site-surface"
                    title="Add Bullet Point"
                  >
                    • List
                  </button>
                  <button
                    type="button"
                    onClick={() => insertMarkdown('**', '**')}
                    className="text-xs px-2 py-1 bg-site-white border border-site-border rounded font-bold hover:bg-site-surface"
                    title="Bold"
                  >
                    B
                  </button>
                </div>
              )}
            </div>

            {/* Tab content */}
            <div className="p-6">
              {activeTab === 'write' ? (
                <div>
                  <textarea
                    id="content-editor"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={16}
                    placeholder={`Write your article content here...\n\n## Section Title\n\nDetailed explanation paragraph...\n\n• Point 1\n• Point 2\n\n## Conclusion\n\nFinal thoughts...`}
                    required
                    className="w-full text-sm p-4 rounded border border-site-border bg-site-white text-site-text font-body leading-relaxed focus:outline-none focus:border-primary"
                  />
                  <p className="text-[11px] text-site-text-muted mt-2">
                    Tip: Use <code className="bg-site-surface px-1 py-0.5 rounded">## Section Heading</code> for major section headings.
                  </p>
                </div>
              ) : (
                <div className="prose max-w-none">
                  {content ? (
                    <div className="space-y-4">
                      {parsedBlocks.map((block, idx) =>
                        block.type === 'heading' ? (
                          <h2
                            key={idx}
                            className="font-display text-2xl md:text-3xl text-primary font-semibold mt-6 mb-3"
                          >
                            {block.content}
                          </h2>
                        ) : (
                          <p
                            key={idx}
                            className="text-site-text-muted leading-relaxed whitespace-pre-line text-sm"
                          >
                            {block.content}
                          </p>
                        ),
                      )}
                    </div>
                  ) : (
                    <p className="text-xs text-site-text-light italic text-center py-8">
                      No content written yet. Switch to "Write Content" tab to begin drafting.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Submit Action Band */}
          <div className="bg-site-white p-6 rounded-lg border border-site-border/60 shadow-sm flex items-center justify-between flex-wrap gap-4">
            <div className="text-xs text-site-text-muted">
              {isPublishing ? (
                <span className="text-accent font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  {publishStep} — {publishDetail}
                </span>
              ) : (
                <span>Ready to commit to GitHub & trigger GoDaddy FTP deployment</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isPublishing}
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-display text-sm font-bold rounded shadow transition-all duration-200 disabled:opacity-50"
            >
              {isPublishing ? 'Publishing to GitHub...' : 'Publish Article Now 🚀'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
