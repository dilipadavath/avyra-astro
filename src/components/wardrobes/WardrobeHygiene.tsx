import { motion } from "framer-motion";
import { Sparkles, CheckCircle, CloudRain, Shirt } from "lucide-react";

const hygieneAdvantages = [
  "Non-porous internal surfaces",
  "Easy to clean and maintain",
  "Resistant to mold, odor, and moisture",
  "Ideal for enclosed storage spaces",
];

const WardrobeHygiene = () => {
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
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                Hygiene That Protects What You Store
              </h2>
            </div>
            
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Clothing storage demands a clean, controlled environment. AVYRA's choice of materials 
              ensures superior hygiene.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-4">Hygienic Advantages</h3>
            <div className="space-y-3 mb-6">
              {hygieneAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-background/50 p-3 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{advantage}</span>
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shirt className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    Perfect for Your Garments
                  </h3>
                  <p className="text-primary text-sm">Long-term clothing care</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg mb-4">
                <CloudRain className="w-6 h-6 text-primary" />
                <span className="text-foreground/70">
                  Especially suitable for humid climates
                </span>
              </div>
              
              <p className="text-foreground/60 text-sm italic">
                This makes AVYRA wardrobes especially suitable for humid climates and 
                long-term garment care.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WardrobeHygiene;
