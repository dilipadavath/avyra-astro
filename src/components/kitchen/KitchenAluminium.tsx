import { motion } from "framer-motion";
import { Box, CheckCircle, Feather, Shield, Palette } from "lucide-react";
import heroInterior from "@/assets/hero-interior-5.jpg";

const aluminiumBenefits = [
  { icon: Feather, text: "Lightweight yet strong" },
  { icon: Shield, text: "Corrosion-resistant" },
  { icon: Palette, text: "Ideal for sleek, contemporary designs" },
];

const KitchenAluminium = () => {
  return (
    <section className="py-20 bg-card relative">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Box className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                Aluminium Kitchens by AVYRA
              </h2>
            </div>
            
            <p className="text-foreground/70 mb-6 leading-relaxed">
              In addition to stainless steel, AVYRA also offers premium aluminium kitchen systems 
              designed for modern homes.
            </p>
            
            <div className="space-y-4 mb-8">
              {aluminiumBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/80">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-foreground/60 text-sm bg-background/50 p-4 rounded-lg border border-border/30">
              AVYRA aluminium kitchens are engineered with precision profiles, reinforced joints, 
              and premium finishes to deliver durability without compromising on aesthetics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-primary/20">
              <img 
                src={heroInterior} 
                alt="AVYRA Modern Aluminium Kitchen Design" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-primary/40" />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-primary/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KitchenAluminium;
