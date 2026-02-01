import { motion } from "framer-motion";
import { Wrench, CheckCircle, Award, Gem } from "lucide-react";

const hardwareBrands = ["Blum", "Higold", "Nuomi"];

const hardwareBenefits = [
  "Soft-close mechanisms",
  "Smooth and silent operation",
  "High cycle durability",
  "Precision alignment",
];

const KitchenHardware = () => {
  return (
    <section className="py-8 bg-card relative">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Hardware Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                Premium Hardware & Hinges
              </h2>
            </div>
            
            <p className="text-foreground/70 mb-6">
              A kitchen is only as good as its hardware. AVYRA uses globally trusted brands 
              known for precision and long-term reliability.
            </p>

            <div className="glass-dark p-6 rounded-xl border border-border/30 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Hardware Brands Used by AVYRA
              </h3>
              <div className="flex flex-wrap gap-3">
                {hardwareBrands.map((brand, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-primary/20 text-primary font-semibold rounded-lg"
                  >
                    {brand}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {hardwareBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground/70 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-foreground/60 mt-6 text-sm">
              Every hinge, drawer system, and pull-out unit is selected to complement AVYRA's structural strength.
            </p>
          </motion.div>

          {/* Countertop Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-dark p-8 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <Gem className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-display font-bold text-gold-gradient">
                  Countertop Solutions
                </h2>
              </div>
              
              <p className="text-foreground/70 mb-6">
                AVYRA recommends <strong className="text-foreground">Quartz countertops</strong> for 
                their durability and refined finish.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-4">Why Quartz?</h3>
              <div className="space-y-3 mb-6">
                {[
                  "High scratch resistance",
                  "Low maintenance",
                  "Non-porous and hygienic",
                  "Consistent appearance",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground/70">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-foreground/60 text-sm italic">
                Quartz complements stainless steel and aluminium kitchens perfectly, 
                creating a balanced blend of strength and elegance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KitchenHardware;
