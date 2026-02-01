import { motion } from "framer-motion";
import { Sparkles, CheckCircle } from "lucide-react";
import heroWardrobe from "@/assets/hero-wardrobe-2.jpg";
import perceptionImg from "@/assets/wardrobe-perception.jpg";

const WardrobeIntro = () => {
  return (
    <>
      {/* Main Intro */}
      <section className="py-8 relative">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                At AVYRA, wardrobes are designed as <span className="text-primary font-semibold">long-term living systems</span>, 
                combining advanced engineering with refined aesthetics. Built using stainless steel and aluminium structures, 
                AVYRA wardrobes challenge traditional ideas and redefine what modern storage can be.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Strong", "Hygienic", "Stylish", "Customizable"].map((trait, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary/20 text-primary font-semibold rounded-lg text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
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
                  src={heroWardrobe} 
                  alt="Premium AVYRA Stainless Steel Wardrobe" 
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-primary/40" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-primary/40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breaking the Myth Section */}
      <section className="py-8 bg-card relative">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
               <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-xl overflow-hidden border border-primary/20">
                <img 
                  src={perceptionImg} 
                  alt="Modern elegant wardrobe with luxury matte finish hiding steel structure" 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-foreground/90 text-sm font-medium">
                    Hidden strength, visible elegance
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
                  Redefining the Perception of Steel & Aluminium
                </h2>
              </div>
              
              <p className="text-foreground/70 mb-6 text-lg">
                A common misconception is that steel and aluminium wardrobes lack warmth or visual appeal. 
                This belief stems from outdated designs and limited material options.
              </p>
              
              <div className="glass-dark p-6 rounded-xl border border-primary/30 mb-6">
                <p className="text-xl font-serif text-primary font-semibold mb-3">
                  AVYRA breaks this myth.
                </p>
                <p className="text-foreground/70 text-sm">
                  By pairing precision-engineered internal structures with luxury external finishes, 
                  AVYRA wardrobes deliver a seamless blend of strength and sophistication.
                </p>
              </div>
              
              <p className="text-foreground/60 italic">
                Steel and aluminium do not dictate appearance — <span className="text-primary">design does</span>.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WardrobeIntro;
