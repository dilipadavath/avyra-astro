import { motion } from "framer-motion";
import { Shield, CheckCircle, Droplets, Bug, Clock, Weight } from "lucide-react";

const structureReasons = [
  { icon: Weight, text: "High load-bearing capacity" },
  { icon: Droplets, text: "Resistance to moisture and humidity" },
  { icon: Bug, text: "No termite or pest damage" },
  { icon: Clock, text: "Long-term structural stability" },
];

const dailyUseFeatures = [
  "Support heavy hanging loads",
  "Maintain drawer smoothness",
  "Keep shutters perfectly aligned",
  "Withstand continuous daily use",
];

const WardrobeStructure = () => {
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
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
              The AVYRA Wardrobe Structure
            </h2>
          </div>
          <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
            Every AVYRA wardrobe is built on a robust framework made from high-grade stainless steel 
            and aluminium. These materials are selected for their superior performance in Indian living conditions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Why Steel & Aluminium */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-xl border border-border/30"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              Why AVYRA Uses Steel & Aluminium
            </h3>
            <div className="space-y-4">
              {structureReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/80">{reason.text}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-foreground/60 mt-6 text-sm">
              Unlike wood-based wardrobes that can warp, swell, or deteriorate over time, 
              AVYRA wardrobes maintain their alignment, strength, and finish for years.
            </p>
          </motion.div>

          {/* Built for Daily Use */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-xl border border-border/30"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              Built for Daily Use
            </h3>
            <p className="text-foreground/70 mb-6">
              Wardrobes are among the most heavily used systems in a home. From hanging garments 
              to storing seasonal items, weight and usage increase over time.
            </p>
            <p className="text-foreground/80 mb-4">AVYRA wardrobes are engineered to:</p>
            <ul className="space-y-3">
              {dailyUseFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/70">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-border/30">
              <p className="text-primary font-semibold text-sm">
                The result is a wardrobe that feels solid, reliable, and effortless to use — even after years.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WardrobeStructure;
