import { motion } from "framer-motion";
import { Settings, Shirt, Grid3X3, ShoppingBag, Lock, Wrench, Award, CheckCircle } from "lucide-react";

const customizationOptions = [
  { icon: Shirt, text: "Hanging sections of varying heights" },
  { icon: Grid3X3, text: "Shelves and drawers" },
  { icon: Settings, text: "Accessory organizers" },
  { icon: ShoppingBag, text: "Shoe storage modules" },
  { icon: Lock, text: "Secure compartments" },
];

const hardwareBrands = ["Blum", "Higold", "Nuomi"];

const hardwareBenefits = [
  "Soft-close doors and drawers",
  "Silent, smooth movement",
  "High durability and performance",
];

const WardrobeCustomization = () => {
  return (
    <section className="py-8 bg-card relative">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Internal Customization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                Customization Inside and Out
              </h2>
            </div>
            
            <p className="text-foreground/70 mb-6">
              AVYRA believes a wardrobe should adapt to the user, not the other way around.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-4">Internal Customization Options</h3>
            <div className="space-y-3 mb-6">
              {customizationOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <option.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/80">{option.text}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-foreground/60 text-sm bg-background/50 p-4 rounded-lg border border-border/30">
              Each layout is designed based on lifestyle needs and storage habits.
            </p>
          </motion.div>

          {/* Premium Hardware */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-dark p-8 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-display font-bold text-gold-gradient">
                  Premium Hardware for Effortless Use
                </h2>
              </div>
              
              <p className="text-foreground/70 mb-6">
                Smooth operation is essential for everyday comfort. AVYRA uses globally trusted 
                hardware brands to ensure reliability and precision.
              </p>

              <div className="bg-background/50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Hardware Brands
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

              <h3 className="text-lg font-semibold text-foreground mb-3">Benefits</h3>
              <div className="space-y-2">
                {hardwareBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/70 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-foreground/60 mt-6 text-sm italic">
                This ensures a refined experience every time the wardrobe is used.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WardrobeCustomization;
