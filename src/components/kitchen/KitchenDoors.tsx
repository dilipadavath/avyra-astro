import { motion } from "framer-motion";
import { DoorOpen, Gem, GlassWater, Frame, Paintbrush } from "lucide-react";

const doorOptions = [
  {
    icon: Gem,
    title: "Sintered Stone Doors",
    features: [
      "Highly durable and scratch-resistant",
      "Resistant to heat, stains, and moisture",
      "Premium stone-like appearance",
      "Ideal for modern and luxury kitchens",
    ],
  },
  {
    icon: GlassWater,
    title: "Glass Doors",
    features: [
      "Lacquered Glass",
      "Clear Glass",
      "Frosted Glass",
      "Patterned Glass",
    ],
    description: "Glass doors add elegance while remaining easy to maintain and hygienic.",
  },
  {
    icon: Frame,
    title: "Glass with Aluminium Frame",
    features: [
      "Perfect balance of strength and sophistication",
      "Slim aluminium profiles with premium glass panels",
      "Ideal for contemporary and minimalist kitchens",
    ],
  },
  {
    icon: Paintbrush,
    title: "Powder-Coated Metal Finishes",
    features: [
      "Industrial yet refined look",
      "High durability and scratch resistance",
      "Available in multiple color options",
    ],
  },
];

const KitchenDoors = () => {
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
            <DoorOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
              Door & Shutter Options
            </h2>
          </div>
          <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
            AVYRA believes that strength should never limit design. That's why AVYRA kitchens 
            offer a wide range of door and shutter options to match every interior style.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {doorOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-8 rounded-xl border border-border/30 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  {option.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-foreground/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              {option.description && (
                <p className="text-foreground/60 mt-4 text-sm italic">
                  {option.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-foreground/60 mt-12 text-lg"
        >
          These options allow complete customization while maintaining AVYRA's engineering standards.
        </motion.p>
      </div>
    </section>
  );
};

export default KitchenDoors;
