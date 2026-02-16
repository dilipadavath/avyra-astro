import BlogComponent from '@/components/sections/BlogPage';
import BlogPost from '@/components/sections/BlogPostPage';
import QueryProvider from '@/components/providers/QueryProvider';
import { useWordPressPost } from '@/hooks/useWordPressPosts';
import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

// Navigation helper
export function navigateToPost(slug: string) {
  window.history.pushState({}, '', `/articles/${slug}`);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function navigateToListing() {
  window.history.pushState({}, '', '/articles');
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function BlogPostView({ slug }: { slug: string }) {
  const { data: post, isLoading, error } = useWordPressPost(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-foreground/70 text-lg mb-4">Post not found</p>
          <button 
            onClick={() => navigateToListing()}
            className="text-primary hover:text-primary/80 cursor-pointer bg-transparent border-0"
          >
            ← Back to Articles
          </button>
        </div>
      </div>
    );
  }

  return <BlogPost post={post} />;
}

function BlogRouter() {
  const [slug, setSlug] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const updateSlug = () => {
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      // /articles → listing, /articles/hello-world → post view
      if (pathParts.length > 1 && (pathParts[0] === 'articles' || pathParts[0] === 'blog')) {
        setSlug(pathParts[1]);
      } else {
        setSlug(null);
      }
    };

    updateSlug();
    setReady(true);

    // Listen for navigation events
    window.addEventListener('popstate', updateSlug);
    return () => window.removeEventListener('popstate', updateSlug);
  }, []);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (slug) {
    return <BlogPostView slug={slug} />;
  }

  return <BlogComponent />;
}

export default function BlogWrapper() {
  return (
    <QueryProvider>
      <BlogRouter />
    </QueryProvider>
  );
}
