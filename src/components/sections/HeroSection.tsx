import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImage1 from "@/assets/hero-kitchen-1.jpg";
import heroImage2 from "@/assets/hero-wardrobe-2.jpg";
import heroImage3 from "@/assets/hero-kitchen-3.jpg";
import heroImage4 from "@/assets/hero-kitchen-4.jpg";
import heroImage5 from "@/assets/hero-interior-5.jpg";

const heroImages = [
  { src: heroImage1, alt: "SS 304 Stainless Steel Modular Kitchen Hyderabad" },
  { src: heroImage2, alt: "Premium Aluminium Walk-in Wardrobe Telangana" },
  { src: heroImage3, alt: "SS 304 Honeycomb Kitchen Design Vijayawada" },
  { src: heroImage4, alt: "Stainless Steel Modular Kitchen Andhra Pradesh" },
  { src: heroImage5, alt: "Aluminium Interior Storage Solutions South India" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-16 md:pb-24">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-left"
          >
            {/* Main Heading */}
            <h1 className="heading-display text-gold-gradient text-foreground mb-0 pb-2 md:mb-6">
              Crafted for Everyday Living
            </h1>

            {/* Sub Heading */}
            <h2 className="font-sans font-light tracking-wide leading-relaxed text-lg md:text-xl lg:text-2xl text-foreground/90 mb-6 -mt-4">
              Engineered stainless steel and aluminium interiors where precision meets everyday elegance.
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary-gold group hover:bg-white hover:text-background hover:border-white">
                <a href="/contact">
                  Book Your Consultation
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild className="btn-outline-gold bg-transparent text-white hover:bg-white hover:text-background hover:border-white">
                <a href="/about">About Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
