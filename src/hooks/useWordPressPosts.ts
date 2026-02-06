import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts, fetchBlogPostBySlug, BlogPost } from "@/services/wordpress";

export const useWordPressPosts = () => {
  return useQuery<BlogPost[], Error>({
    queryKey: ["wordpress-posts"],
    queryFn: fetchBlogPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes (formerly cacheTime)
  });
};

export const useWordPressPost = (slug: string | undefined) => {
  return useQuery<BlogPost | null, Error>({
    queryKey: ["wordpress-post", slug],
    queryFn: () => (slug ? fetchBlogPostBySlug(slug) : Promise.resolve(null)),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};
