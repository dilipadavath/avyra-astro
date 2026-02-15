import BlogPost from '@/components/sections/BlogPostPage';
import QueryProvider from '@/components/providers/QueryProvider';

interface BlogPostWrapperProps {
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

export default function BlogPostWrapper({ post }: BlogPostWrapperProps) {
  return (
    <QueryProvider>
      <BlogPost post={post} />
    </QueryProvider>
  );
}
