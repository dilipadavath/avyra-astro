import { motion } from "framer-motion";
import { Settings, Shirt, Grid3X3, ShoppingBag, Lock, Wrench, Award, CheckCircle } from "lucide-react";
import customizationImg from "@/assets/wardrobe-customization.jpg";
import hardwareImg from "@/assets/wardrobe-hardware.jpg";

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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Settings className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
              Customization Inside and Out
            </h2>
          </div>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            AVYRA believes a wardrobe should adapt to the user, not the other way around.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Internal Customization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark rounded-xl border border-border/30 overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden group">
              <img 
                src={customizationImg} 
                alt="Modern wardrobe interior organization system"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="p-6">
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
            </div>
          </motion.div>

          {/* Premium Hardware */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark rounded-xl border border-primary/20 overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden group">
              <img 
                src={hardwareImg} 
                alt="Premium wardrobe hardware close-up"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-display font-bold text-gold-gradient">
                  Premium Hardware for Effortless Use
                </h3>
              </div>
              
              <p className="text-foreground/70 mb-6 text-sm">
                Smooth operation is essential for everyday comfort. AVYRA uses globally trusted 
                hardware brands to ensure reliability and precision.
              </p>

              <div className="bg-background/50 p-4 rounded-lg mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Hardware Brands
                </h4>
                <div className="flex flex-wrap gap-2">
                  {hardwareBrands.map((brand, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1.5 bg-primary/20 text-primary font-semibold rounded-lg text-sm"
                    >
                      {brand}
                    </motion.span>
                  ))}
                </div>
              </div>

              <h4 className="text-sm font-semibold text-foreground mb-2">Benefits</h4>
              <div className="space-y-2">
                {hardwareBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/70 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-foreground/60 mt-4 text-xs italic">
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