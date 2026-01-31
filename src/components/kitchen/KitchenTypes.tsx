import { motion } from "framer-motion";
import { Shield, Box, CheckCircle } from "lucide-react";

const stainlessSteelBestFor = [
  "Maximum durability",
  "Heavy usage",
  "Long-term ownership",
  "Hygienic environments",
];

const aluminiumBestFor = [
  "Lightweight structures",
  "Sleek modern designs",
  "Contemporary aesthetics",
];

const KitchenTypes = () => {
  return (
    <section className="py-8 bg-card relative">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
            Stainless Steel vs Aluminium Kitchens
          </h2>
          <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
            AVYRA does not push one solution blindly. Both stainless steel and aluminium kitchens 
            have their strengths, and AVYRA recommends the right solution based on usage pattern, 
            design preference, environmental conditions, and lifestyle requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Stainless Steel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-dark p-8 rounded-xl border border-border/30 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Stainless Steel Kitchens
                </h3>
                <p className="text-primary text-sm">Maximum Strength & Durability</p>
              </div>
            </div>
            
            <p className="text-foreground/70 mb-6">Best for:</p>
            <ul className="space-y-3">
              {stainlessSteelBestFor.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Aluminium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-dark p-8 rounded-xl border border-border/30 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <Box className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Aluminium Kitchens
                </h3>
                <p className="text-primary text-sm">Modern & Contemporary</p>
              </div>
            </div>
            
            <p className="text-foreground/70 mb-6">Best for:</p>
            <ul className="space-y-3">
              {aluminiumBestFor.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-foreground/60 mt-12"
        >
          Both options are designed with AVYRA's uncompromising quality standards.
        </motion.p>
      </div>
    </section>
  );
};

export default KitchenTypes;
