import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts, fetchBlogPostBySlug } from "@/services/wordpress";
import type { BlogPost } from "@/services/wordpress";

export const useWordPressPosts = () => {
  return useQuery<BlogPost[], Error>({
    queryKey: ["wordpress-posts"],
    queryFn: fetchBlogPosts,

    // Stop after 5 total attempts (1 initial + 4 retries)
    retry: 4,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 8000),

    // Avoid surprise refetch loops when the tab regains focus / network reconnects
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,

    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes (formerly cacheTime)
  });
};

export const useWordPressPost = (slug: string | undefined) => {
  return useQuery<BlogPost | null, Error>({
    queryKey: ["wordpress-post", slug],
    queryFn: () => (slug ? fetchBlogPostBySlug(slug) : Promise.resolve(null)),
    enabled: !!slug,

    // Stop after 5 total attempts (1 initial + 4 retries)
    retry: 4,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 8000),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,

    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};
