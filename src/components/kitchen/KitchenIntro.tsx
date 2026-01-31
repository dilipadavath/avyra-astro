import { motion } from "framer-motion";
import heroKitchen1 from "@/assets/hero-kitchen-1.jpg";

const KitchenIntro = () => {
  return (
    <section className="py-20 relative">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-foreground/70 leading-relaxed text-lg mb-6">
              Unlike conventional kitchen brands that rely heavily on wood-based materials, 
              AVYRA specializes in <span className="text-primary font-semibold">stainless steel and aluminium kitchens</span>, 
              combining advanced material science with refined design aesthetics.
            </p>
            <p className="text-foreground/70 leading-relaxed text-lg">
              The result is a kitchen that is stronger, safer, more hygienic, and future-ready.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-primary/20">
              <img 
                src={heroKitchen1} 
                alt="Premium AVYRA SS 304 Stainless Steel Kitchen" 
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Decorative corner */}
            <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-primary/40" />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-primary/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KitchenIntro;
