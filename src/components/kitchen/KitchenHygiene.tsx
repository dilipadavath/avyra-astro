import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Baby, Heart, UtensilsCrossed } from "lucide-react";

const hygieneBenefits = [
  "Non-porous surfaces",
  "Easy to clean and sanitize",
  "No absorption of oils, stains, or odors",
  "Resistant to bacteria and mold growth",
];

const suitableFor = [
  { icon: UtensilsCrossed, text: "Indian cooking styles" },
  { icon: Baby, text: "Homes with children or elderly members" },
  { icon: Heart, text: "Health-conscious households" },
];

const KitchenHygiene = () => {
  return (
    <section className="py-8 relative">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
              Hygiene at the Core
            </h2>
          </div>
          <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
            Hygiene is one of the most important yet overlooked aspects of kitchen design. 
            AVYRA kitchens are engineered to meet the highest hygiene standards.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Why Stainless Steel & Aluminium Are Superior
            </h3>
            <div className="space-y-4 mb-8">
              {hygieneBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border/30"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-dark p-8 rounded-xl border border-primary/20">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Especially Suitable For
              </h3>
              <div className="space-y-4">
                {suitableFor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-foreground/60 mt-6 text-sm italic">
                Where wooden kitchens degrade silently over time, AVYRA kitchens remain 
                hygienic and fresh year after year.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KitchenHygiene;
