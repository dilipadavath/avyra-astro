import { motion } from "framer-motion";
import heroKitchen1 from "@/assets/hero-kitchen-1.jpg";

const KitchenHero = () => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroKitchen1})` }}
      />
      
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 via-charcoal-dark/60 to-charcoal-dark/90" />
      
      {/* Gold vignette edges */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at top left, rgba(201, 162, 39, 0.15) 0%, transparent 40%),
          radial-gradient(ellipse at top right, rgba(201, 162, 39, 0.1) 0%, transparent 35%),
          radial-gradient(ellipse at bottom left, rgba(201, 162, 39, 0.12) 0%, transparent 30%),
          radial-gradient(ellipse at bottom right, rgba(201, 162, 39, 0.08) 0%, transparent 35%)
        `
      }} />
      
      {/* Decorative gold lines */}
      <div className="absolute top-24 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute top-32 right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-20 left-0 w-2/3 h-[1px] bg-gradient-to-r from-primary/50 via-primary/30 to-transparent" />
      
      {/* Content (match Home hero left-edge alignment) */}
      <div className="relative z-10 h-full flex items-end pb-16 md:pb-24">
        <div className="container-premium w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="heading-display text-gold-gradient mb-4 drop-shadow-lg">
              AVYRA Kitchens
            </h1>
            <p className="text-xl md:text-2xl font-serif text-foreground/90 mb-8 italic drop-shadow-md">
              Engineered for Strength. Designed for Living.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg max-w-3xl drop-shadow-sm">
              At AVYRA, kitchens are not built as furniture — they are engineered as long-term living systems.
              Every AVYRA kitchen is designed to perform flawlessly under Indian cooking conditions while
              maintaining elegance, hygiene, and durability for decades.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KitchenHero;
