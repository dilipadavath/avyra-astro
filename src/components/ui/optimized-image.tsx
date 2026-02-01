import { useState, useRef, useEffect, ImgHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  eager?: boolean; // For above-the-fold images
}

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, className, placeholderClassName, eager = false, ...props }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(eager);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      if (eager) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: "50px",
          threshold: 0.01,
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }, [eager]);

    return (
      <div ref={imgRef as any} className={cn("relative overflow-hidden", className)}>
        {/* Placeholder skeleton */}
        {!isLoaded && (
          <div
            className={cn(
              "absolute inset-0 bg-muted animate-pulse",
              placeholderClassName
            )}
          />
        )}
        
        {/* Actual image */}
        {isInView && (
          <img
            ref={ref}
            src={src}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            {...props}
          />
        )}
      </div>
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export { OptimizedImage };
