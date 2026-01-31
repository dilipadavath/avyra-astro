import { motion } from "framer-motion";
import {
  Salad,
  Flame,
  Recycle,
  Ban,
  SprayCanIcon,
  ShieldX,
  Bug,
  Building2,
  Ruler,
  Gem,
  Sparkles,
  ShieldCheck,
  Droplets,
  Palette,
  Scale,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  { icon: Salad, title: "Food-Safe Materials", description: "Food-safe materials for everyday living." },
  { icon: Flame, title: "Heat & Moisture Resistant", description: "Handles heat and moisture with ease." },
  { icon: Recycle, title: "Sustainable & Recyclable", description: "Sustainable and recyclable materials." },
  { icon: Ban, title: "No Stains or Odors", description: "No stains, odors, or oil absorption." },
  { icon: SprayCanIcon, title: "Low Maintenance", description: "Minimal maintenance required." },
  { icon: ShieldX, title: "Zero Rust", description: "Zero rust, peeling, or surface decay." },
  { icon: Bug, title: "Insect & Termite Resistant", description: "Fully resistant to insects and termites." },
  { icon: Building2, title: "Strong Structural Integrity", description: "Strong structure with long lifespan." },
  { icon: Ruler, title: "Shape Stability", description: "Keeps shape without warping or cracks." },
  { icon: Gem, title: "Long-Term Value", description: "Adds long-term value to your home." },
  { icon: Sparkles, title: "Easy-to-Clean Finish", description: "Smooth finish that's easy to clean." },
  { icon: ShieldCheck, title: "Fire-Safe Choice", description: "Fire-safe choice for modern kitchens." },
  { icon: Droplets, title: "Humidity Friendly", description: "Performs well in humid climates." },
  { icon: Palette, title: "Premium Appearance", description: "Clean, modern, premium appearance." },
  { icon: Scale, title: "High Strength, Lightweight", description: "High strength with lightweight build." },
];

const MaterialsSection = () => {
  return (
    <section className="py-8 bg-charcoal">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="heading-subsection text-gold-gradient mb-2">
            Materials That Define Durability
          </h2>
          <p className="text-muted-foreground text-lg">
            Built with Stainless Steel &x Aluminium
          </p>
        </motion.div>

        {/* Benefits Grid with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {benefits.map((benefit, index) => {
            const BenefitIcon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="flex items-start gap-3 group"
              >
                <BenefitIcon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {benefit.description}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
