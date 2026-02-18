import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWordPressPosts } from "@/hooks/useWordPressPosts";

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

const BlogPost = ({ post }: BlogPostProps) => {
  const { data: allPosts } = useWordPressPosts();

  // Return nothing if no post provided
  if (!post) {
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

