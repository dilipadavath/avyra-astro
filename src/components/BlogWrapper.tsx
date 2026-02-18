import BlogComponent from '@/components/sections/BlogPage';
import QueryProvider from '@/components/providers/QueryProvider';

export default function BlogWrapper() {
  return (
    <QueryProvider>
      <BlogComponent />
    </QueryProvider>
  );
}
