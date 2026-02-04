import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | AVYRA Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Header />

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
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70 mb-4">
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4 text-primary" />
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground max-w-4xl">
              {post.title}
            </h1>
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
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-display prose-headings:text-foreground
                prose-h1:text-3xl prose-h1:text-gold-gradient
                prose-h2:text-2xl prose-h2:text-primary prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:text-foreground/90
                prose-p:text-foreground/80 prose-p:leading-relaxed
                prose-li:text-foreground/80
                prose-strong:text-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.div>

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
                <Link to="/contact">Book Consultation</Link>
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
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-card">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPost;
