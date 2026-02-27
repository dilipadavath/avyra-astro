import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWordPressPosts } from "@/hooks/useWordPressPosts";
import { useEffect, useState } from "react";

interface BlogPostProps {
  post?: {
    id: string | number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
    readTime?: string;
  };
}

const BlogPost = ({ post: initialPost }: BlogPostProps) => {
  const { data: allPosts } = useWordPressPosts();
  const [post, setPost] = useState(initialPost);
  const [loading, setLoading] = useState(!initialPost);

  // If no post provided, fetch from WordPress API by slug
  useEffect(() => {
    if (!post) {
      // Get slug from query parameter (passed by .htaccess) or URL pathname
      const params = new URLSearchParams(window.location.search);
      let slug: string | null = params.get('post');
      
      if (!slug) {
        slug = window.location.pathname.split('/').filter(Boolean).pop() || null;
      }
      
      // First try to find in allPosts (if already loaded)
      if (allPosts && allPosts.length > 0 && slug) {
        const found = allPosts.find(p => p.slug === slug);
        if (found) {
          setPost(found);
          setLoading(false);
          return;
        }
      }

      // If not in allPosts, fetch directly from WordPress API by slug
      if (slug) {
        fetch(
          `https://avyra.co.in/blogs-cms9384xk-dont-delete/wp-json/wp/v2/posts?slug=${slug}&_embed`
        )
          .then(res => res.json())
          .then(data => {
            if (data && data.length > 0) {
              // Transform WordPress post to our format
              const wpPost = data[0];
              const categoryName = wpPost._embedded?.["wp:term"]?.[0]?.[0]?.name;
              const transformedPost = {
                id: wpPost.id.toString(),
                slug: wpPost.slug || "",
                title: wpPost.title.rendered || "",
                excerpt: (wpPost.excerpt.rendered || "").replace(/<[^>]*>/g, "").trim(),
                content: wpPost.content.rendered || "",
                image: wpPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%231a1a1a'/%3E%3C/svg%3E",
                date: new Date(wpPost.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
                category: categoryName || "Uncategorized",
                readTime: `${Math.ceil((wpPost.content.rendered || "").replace(/<[^>]*>/g, "").split(/\s+/).length / 200)} min read`,
              };
              setPost(transformedPost);
            }
            setLoading(false);
          })
          .catch(err => {
            console.error("Error fetching post:", err);
            setLoading(false);
          });
      }
    }
  }, [post, allPosts]);

  // Return nothing if no post provided
  if (!post) {
    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      );
    }
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-foreground/70 text-lg mb-4">Post not found</p>
          <a 
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = (allPosts || [])
    .filter(p => p.category === post.category && String(p.id) !== String(post.id))
    .slice(0, 3) || [];

  return (
    <>
      <style>{`
        .blog-post-content.prose h2,
        .blog-post-content.prose h3,
        .blog-post-content.prose h4,
        .blog-post-content.prose h5,
        .blog-post-content.prose h6 {
          color: #D4AF37 !important;
        }
        .blog-post-content.prose h2 {
          font-size: 24px !important;
          line-height: 1.3 !important;
          margin-bottom: 1rem !important;
        }
        .blog-post-content.prose h3 {
          font-size: 18px !important;
          line-height: 1.3 !important;
          margin-bottom: 0.875rem !important;
        }
        @media (min-width: 768px) {
          .blog-post-content.prose h2 {
            font-size: 28px !important;
            line-height: 1.3 !important;
            margin-bottom: 1.25rem !important;
          }
          .blog-post-content.prose h3 {
            font-size: 20px !important;
            line-height: 1.3 !important;
            margin-bottom: 1rem !important;
          }
        }
        @media (min-width: 1024px) {
          .blog-post-content.prose h2 {
            font-size: 32px !important;
            line-height: 1.3 !important;
            margin-bottom: 1.5rem !important;
          }
          .blog-post-content.prose h3 {
            font-size: 24px !important;
            line-height: 1.3 !important;
            margin-bottom: 1.25rem !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-end relative pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('${post.image}')`,
          }}
        />
        <div className="container-premium relative z-10 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </a>

            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70 mb-4">
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4 text-primary" />
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              {post.readTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              )}
            </div>

            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground max-w-4xl"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="blog-post-content prose prose-invert max-w-none
                prose-headings:font-display
                prose-p:text-foreground/80 prose-p:mb-6
                prose-ul:ml-6 prose-ol:ml-6
                prose-li:text-foreground/80
                prose-strong:text-foreground prose-strong:font-bold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-card rounded-xl border border-border/30 text-center"
            >
              <h3 className="text-xl font-display font-semibold text-gold-gradient mb-3">
                Ready to Transform Your Space?
              </h3>
              <p className="text-foreground/70 mb-6">
                Get in touch with our design experts for a free consultation.
              </p>
              <Button asChild className="btn-primary-gold">
                <a href="/contact">Book Consultation</a>
              </Button>
            </motion.div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <a
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block cursor-pointer"
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-card">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 
                      className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: relatedPost.title }}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPost;

