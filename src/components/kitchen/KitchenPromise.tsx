import { motion } from "framer-motion";
import { Award, Shield, Wrench, Palette, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import kitchenValueImg from "@/assets/kitchen-value.jpg";
import kitchenPromiseImg from "@/assets/kitchen-promise.jpg";

const promisePoints = [
  { icon: Shield, text: "Structural integrity" },
  { icon: Wrench, text: "Thoughtful engineering" },
  { icon: Palette, text: "Design flexibility" },
  { icon: Clock, text: "Long-term reliability" },
];

const valuePoints = [
  "Superior materials",
  "Advanced engineering",
  "Longer lifespan",
  "Lower maintenance costs",
];

const KitchenPromise = () => {
  return (
    <>
      {/* Competitive Pricing Section */}
      <section className="py-8 relative">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
                Competitive Without Compromise
              </h2>
            </div>
            
            <p className="text-foreground/70 mb-8 text-lg max-w-3xl mx-auto">
              AVYRA kitchens are priced competitively compared to other premium brands, while offering:
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-72 rounded-xl overflow-hidden group"
            >
              <img 
                src={kitchenValueImg} 
                alt="Premium kitchen showroom"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4 mb-8">
                {valuePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <span className="text-foreground/80 text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-primary font-semibold text-lg">
                The focus is always on value over time, not short-term pricing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-8 pb-4 md:pb-8 bg-card relative overflow-hidden">
        {/* Decorative gold lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-10 h-10 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
                The AVYRA Kitchen Promise
              </h2>
            </div>
            
            <p className="text-foreground/70 mb-8 text-lg">
              Every AVYRA kitchen represents:
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
            {/* Promise Points */}
            <div className="grid grid-cols-2 gap-6">
              {promisePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4 p-4"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-foreground font-semibold text-sm text-center">{point.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-72 rounded-xl overflow-hidden group"
            >
              <img 
                src={kitchenPromiseImg} 
                alt="Family enjoying their AVYRA kitchen"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-background/60 to-transparent" />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-foreground/80 font-serif italic mb-10">
              It is a kitchen designed not just for today, but for years of everyday living.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary-gold group hover:bg-white hover:text-background hover:border-white">
                <a href="/contact">
                  Book Your Consultation
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild className="btn-outline-gold bg-transparent text-white hover:bg-white hover:text-background hover:border-white">
                <a href="/gallery?category=Kitchen">View Gallery</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default KitchenPromise;