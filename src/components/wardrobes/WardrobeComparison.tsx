import { motion } from "framer-motion";
import { Scale, X, CheckCircle, AlertTriangle, Award } from "lucide-react";

const conventionalMaterials = [
  "Plywood or MDF carcasses",
  "Laminate-based finishes",
  "Basic hardware systems",
];

const avyraMaterials = [
  "Stainless steel and aluminium structures",
  "Premium, customizable finishes",
  "High-quality hardware systems",
];

const WardrobeComparison = () => {
  return (
    <section className="py-20 relative">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
              AVYRA vs Conventional Wardrobes
            </h2>
          </div>
          <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
            The difference lies in longevity, hygiene, and performance over time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Conventional Wardrobes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-xl border border-destructive/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <h3 className="text-xl font-display font-bold text-foreground">
                Conventional Wardrobes Often Use
              </h3>
            </div>
            
            <ul className="space-y-3 mb-6">
              {conventionalMaterials.map((material, index) => (
                <li key={index} className="flex items-center gap-3">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-foreground/70">{material}</span>
                </li>
              ))}
            </ul>

            <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
              <p className="text-foreground/70 text-sm">
                These materials may look appealing initially but can degrade due to 
                moisture, pests, and structural fatigue.
              </p>
            </div>
          </motion.div>

          {/* AVYRA Wardrobes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-xl border border-primary/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-display font-bold text-gold-gradient">
                AVYRA Wardrobes Use
              </h3>
            </div>
            
            <ul className="space-y-3">
              {avyraMaterials.map((material, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{material}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-border/30">
              <p className="text-primary font-semibold">
                The difference lies in longevity, hygiene, and performance over time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WardrobeComparison;
