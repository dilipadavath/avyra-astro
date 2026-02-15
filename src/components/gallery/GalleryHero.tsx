import { motion } from "framer-motion";
import heroKitchen3 from "@/assets/hero-kitchen-3.jpg?url";

const GalleryHero = () => {
  return (
    <section className="pt-28 md:pt-32 pb-12 relative overflow-hidden min-h-[20vh] flex items-end">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroKitchen3})` }}
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
      
      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="heading-display text-gold-gradient mb-4 drop-shadow-lg">
            Gallery
          </h1>
          <p className="text-foreground/80 leading-relaxed text-lg max-w-3xl mx-auto drop-shadow-sm">
            Explore our portfolio of premium SS 304 stainless steel honeycomb kitchens, aluminium wardrobes, 
            and interior solutions crafted for homes across Hyderabad, Vijayawada, Telangana & South India.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryHero;
