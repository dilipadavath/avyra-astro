import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/avyra-logo.png?url";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Kitchen", path: "/kitchen" },
  { name: "Wardrobes", path: "/wardrobes" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/articles" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-dark py-3" : "bg-transparent py-4"
        }`}
    >
      <div className="container-premium flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1">
          <img
            src={logoIcon}
            alt="AVYRA"
            className={`transition-all duration-500 ${isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
              }`}
          />

          <div className="flex flex-col">
            <span
              className="text-white text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              
               <span style={{ letterSpacing: '0.1em' }}>AVYRA</span>
              </span>

            <span className="text-white/80 text-xs md:text-sm font-light tracking-[0.25em]">
              Living Redefined
            </span>

          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${currentPath === item.path
                ? "text-primary"
                : "text-foreground/80 hover:text-primary"
                }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark border-t border-border/30"
          >
            <nav className="container-premium py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium tracking-wide py-2 transition-colors ${currentPath === item.path
                    ? "text-primary"
                    : "text-foreground/80"
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
