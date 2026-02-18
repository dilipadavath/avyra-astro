// WordPress REST API integration
// Calls WordPress REST API directly (CORS enabled in WordPress)
// WordPress is installed under /blogs-cms9384xk-dont-delete on avyra.co.in

const WP_API_BASE = "https://avyra.co.in/blogs-cms9384xk-dont-delete/wp-json/wp/v2/posts";

/* =======================
   Interfaces
======================= */

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
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
      }>
    >;
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

/* =======================
   Helpers
======================= */

// Calculate read time based on word count
const calculateReadTime = (content: string): string => {
  const text = content.replace(/<[^>]*>/g, "");
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 200);
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

// Strip HTML tags safely (works in Node.js and browser)
const stripHtml = (html: string): string => {
  // Remove all HTML tags using regex
  const plainText = html.replace(/<[^>]*>/g, "");
  // Decode HTML entities
  return plainText
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)));
};

// Transform WP post to BlogPost
const transformPost = (post: WPPost): BlogPost => {
  // Try to get featured image from multiple sources
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    (post as any).featured_image_url ||
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%23D4AF37' text-anchor='middle' dominant-baseline='middle'%3EAVYRA%3C/text%3E%3C/svg%3E";

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

/* =======================
   API Tests
======================= */

// 🔍 Test WordPress API root (NO query string)
export const testWpApiConnection = async (): Promise<void> => {
  try {
    const response = await fetch(WP_API_BASE);

    if (!response.ok) {
      throw new Error(`WP API not reachable: ${response.status}`);
    }

    const data = await response.json();
    console.log("WP API ROOT RESPONSE:", data);
  } catch (error) {
    console.error("WP API connection test failed:", error);
  }
};

// 🔍 Test basic posts endpoint (no params)
export const testWpPostsEndpoint = async (): Promise<void> => {
  try {
    const response = await fetch(WP_API_BASE);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const data = await response.json();
    console.log("WP POSTS RESPONSE:", data);
  } catch (error) {
    console.error("WP posts test failed:", error);
  }
};

/* =======================
   Build-time Fetchers (Direct from WordPress)
======================= */

// Fetch all blog posts directly from WordPress (for static generation)
export const fetchBlogPostsForBuild = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(
      "https://avyra.co.in/blogs-cms9384xk-dont-delete/wp-json/wp/v2/posts?_embed&per_page=100&orderby=date&order=desc",
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Avyra-Blog-Client/1.0',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const posts: WPPost[] = await response.json();
    return posts.map(transformPost);
  } catch (error) {
    console.error("Error fetching WordPress posts for build:", error);
    return [];
  }
};

/* =======================
   Production Fetchers
======================= */

// Fetch all blog posts
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(
      `${WP_API_BASE}?_embed&per_page=100&orderby=date&order=desc`
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
export const fetchBlogPostBySlug = async (
  slug: string
): Promise<BlogPost | null> => {
  try {
    const response = await fetch(
      `${WP_API_BASE}?_embed&slug=${encodeURIComponent(slug)}`
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
