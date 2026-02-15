import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    // Normalize path by removing trailing slash (except for root)
    const normalizePath = (path: string) => {
      if (path === "/") return path;
      return path.endsWith("/") ? path.slice(0, -1) : path;
    };
    
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const isActive = normalizePath(currentPath) === normalizePath(to);
    
    return (
      <a
        ref={ref}
        href={to}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
