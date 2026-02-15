import { motion } from "framer-motion";
import { Shield, Droplets, CheckCircle, X, ThermometerSun, RefreshCw, Bug } from "lucide-react";
import heroKitchen4 from "@/assets/hero-kitchen-4.jpg?url";

const strengthFeatures = [
  { icon: ThermometerSun, text: "Heavy cookware storage" },
  { icon: ThermometerSun, text: "High-temperature cooking environments" },
  { icon: RefreshCw, text: "Daily opening and closing cycles" },
  { icon: Droplets, text: "Continuous exposure to steam and moisture" },
];

const avyraAdvantages = [
  "Do not swell",
  "Do not crack",
  "Do not warp",
  "Do not attract termites or pests",
];

const KitchenStrength = () => {
  return (
    <section className="py-8 bg-card relative">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-primary/20">
              <img 
                src={heroKitchen4} 
                alt="Durable AVYRA Stainless Steel Kitchen" 
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-primary/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                Strength That Lasts Decades
              </h2>
            </div>
            
            <p className="text-foreground/70 mb-6">
              AVYRA kitchens are built to withstand:
            </p>
            
            <div className="space-y-3 mb-8">
              {strengthFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground/70">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="glass-dark p-6 rounded-xl border border-border/30">
              <p className="text-foreground font-semibold mb-4">
                Unlike wooden or MDF kitchens, AVYRA stainless steel and aluminium kitchens:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {avyraAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-foreground/70 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
              <p className="text-primary font-semibold mt-4 text-sm">
                This makes AVYRA kitchens a long-term investment rather than a short-term solution.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KitchenStrength;
