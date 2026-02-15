import { motion } from "framer-motion";
import { Award, Shield, Palette, Settings, Clock, Home, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import indianHomeImg from "@/assets/wardrobe-indian-home.jpg?url";
import promiseImg from "@/assets/wardrobe-promise.jpg?url";

const indianHomeFeatures = [
  "Compact urban spaces",
  "High storage needs",
  "Climate variations",
  "Long-term usage expectations",
];

const promisePoints = [
  { icon: Shield, text: "Structural strength" },
  { icon: Palette, text: "Elegant design" },
  { icon: Settings, text: "Custom-built precision" },
  { icon: Clock, text: "Long-lasting performance" },
];

const WardrobePromise = () => {
  return (
    <>
      {/* Designed for Modern Indian Homes */}
      <section className="py-8 bg-card relative">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden group order-2 lg:order-1"
            >
              <img 
                src={indianHomeImg} 
                alt="Modern Indian bedroom with built-in wardrobe"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-primary" />
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                  Designed for Modern Indian Homes
                </h2>
              </div>
              
              <p className="text-foreground/70 mb-6">
                AVYRA wardrobes are designed with modern Indian living in mind:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {indianHomeFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background/50 p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-primary font-semibold">
                The result is a wardrobe that performs as beautifully as it looks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitive Without Compromise */}
      <section className="py-8 relative">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-xl border border-primary/20 max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                Competitive Without Compromise
              </h2>
            </div>
            
            <p className="text-foreground/70 mb-4 text-lg">
              AVYRA wardrobes are priced competitively compared to premium wooden wardrobe brands, 
              while offering superior durability, hygiene, and customization.
            </p>
            
            <p className="text-primary font-semibold">
              The focus is not on short-term trends, but on long-term value and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-8 pb-4 md:pb-8 relative overflow-hidden">
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
                The AVYRA Wardrobe Promise
              </h2>
            </div>
            
            <p className="text-foreground/70 mb-8 text-lg">
              Every AVYRA wardrobe delivers:
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
                src={promiseImg} 
                alt="Luxury modern wardrobe in elegant bedroom"
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
              It is not just a storage unit — it is a thoughtfully engineered part of your living space.
            </p>
            
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary-gold group hover:bg-white hover:text-background hover:border-white">
                <a href="/contact">
                  Book Your Consultation
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild className="btn-outline-gold bg-transparent text-white hover:bg-white hover:text-background hover:border-white">
                <a href="/gallery?category=Wardrobe">View Gallery</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WardrobePromise;