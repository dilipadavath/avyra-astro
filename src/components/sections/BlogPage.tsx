import { motion } from "framer-motion";
import { ArrowRight, Calendar, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { useWordPressPosts } from "@/hooks/useWordPressPosts";
import { useState, useMemo } from "react";

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const { data: posts, isLoading, error } = useWordPressPosts();
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const pagination = useMemo(() => {
    if (!posts) return { displayPosts: [], totalPages: 0, currentPage: 1 };
    
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const displayPosts = posts.slice(startIndex, endIndex);
    
    return { displayPosts, totalPages, currentPage };
  }, [posts, currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < pagination.totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center relative pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/placeholder.svg')`,
          }}
        />
        <div className="container-premium relative z-10 text-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold-gradient mb-6"
          >
            Blogs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Whether you're planning a full home makeover or simply love thoughtful design, 
            explore fresh ideas and expert advice crafted to help you make more informed decisions.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-premium">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-3 text-foreground/70">Loading posts...</span>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-foreground/70">Unable to load blog posts. Please try again later.</p>
            </div>
          ) : posts && posts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pagination.displayPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                  <a 
                    href={`/blog/${post.slug}`}
                    className="block cursor-pointer"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-card">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {post.category}
                      </span>
                        
                        <h2 
                          className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: post.title }}
                        />
                        
                        <p className="text-foreground/70 text-sm line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-2">
                          <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </span>
                          
                          <span className="flex items-center gap-1 text-xs text-foreground/50">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </a>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-16 pt-8 border-t border-foreground/10">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => {
                          setCurrentPage(page);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                          currentPage === page
                            ? 'bg-primary text-background'
                            : 'border border-primary text-primary hover:bg-primary/10'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === pagination.totalPages}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <a 
                    href={`/blog/${post.slug}`}
                    className="block cursor-pointer"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-card">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {post.category}
                      </span>
                      
                      <h2 
                        className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />
                      
                      <p className="text-foreground/70 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                        
                        <span className="flex items-center gap-1 text-xs text-foreground/50">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-foreground/70">No blog posts available yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
