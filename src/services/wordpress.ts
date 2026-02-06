// WordPress REST API integration
const WP_API_BASE = "https://avyra.co.in/wp-json/wp/v2";

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    "wp:term"?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

// Calculate read time based on word count
const calculateReadTime = (content: string): string => {
  const text = content.replace(/<[^>]*>/g, ""); // Strip HTML
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 200); // Average reading speed
  return `${minutes} min read`;
};

// Format date to readable format
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Strip HTML tags for excerpt
const stripHtml = (html: string): string => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

// Transform WP post to our BlogPost format
const transformPost = (post: WPPost): BlogPost => {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg";
  const categories = post._embedded?.["wp:term"]?.[0] || [];
  const category = categories[0]?.name || "Uncategorized";

  return {
    id: post.id.toString(),
    slug: post.slug,
    title: post.title.rendered,
    excerpt: stripHtml(post.excerpt.rendered).trim(),
    content: post.content.rendered,
    image: featuredImage,
    date: formatDate(post.date),
    category,
    readTime: calculateReadTime(post.content.rendered),
  };
};

// Fetch all blog posts
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(
      `${WP_API_BASE}/posts?_embed&per_page=100&orderby=date&order=desc`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    
    const posts: WPPost[] = await response.json();
    return posts.map(transformPost);
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    throw error;
  }
};

// Fetch single blog post by slug
export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(
      `${WP_API_BASE}/posts?_embed&slug=${encodeURIComponent(slug)}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status}`);
    }
    
    const posts: WPPost[] = await response.json();
    
    if (posts.length === 0) {
      return null;
    }
    
    return transformPost(posts[0]);
  } catch (error) {
    console.error("Error fetching WordPress post:", error);
    throw error;
  }
};
