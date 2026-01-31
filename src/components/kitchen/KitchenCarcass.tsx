import { motion } from "framer-motion";
import { Shield, Layers, CheckCircle, Hexagon } from "lucide-react";
import heroKitchen3 from "@/assets/hero-kitchen-3.jpg";

const honeycombBenefits = [
  { title: "Exceptional Load-Bearing", desc: "Heavy cookware support" },
  { title: "Zero Cabinet Flex", desc: "No vibration or movement" },
  { title: "Sound Insulation", desc: "Quieter operation" },
  { title: "Structural Stability", desc: "Long-term performance" },
];

const KitchenCarcass = () => {
  return (
    <>
      {/* Carcass Foundation Section */}
      <section className="py-8 bg-card relative">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
              The Foundation: AVYRA Kitchen Carcass
            </h2>
            <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
              The strength of any kitchen lies in its carcass — the internal structural framework 
              that holds the entire system together. At AVYRA, the carcass is engineered to outperform 
              traditional wooden and MDF-based structures in every measurable way.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Premium SS Construction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-dark p-8 rounded-xl border border-border/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Premium Stainless Steel Construction
                </h3>
              </div>
              <p className="text-foreground/70 mb-6">
                AVYRA kitchens are manufactured using SS 304 and SS 316 grade stainless steel, 
                materials known for their superior corrosion resistance, strength, and hygiene.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">
                    <strong className="text-foreground">SS 304</strong> — Durability, rust resistance, food-safe properties
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">
                    <strong className="text-foreground">SS 316</strong> — Higher resistance to moisture, heat, and chemical exposure
                  </span>
                </li>
              </ul>
              <p className="text-foreground/60 text-sm mt-6 italic">
                These materials are used in commercial kitchens, hospitals, and food processing units 
                where hygiene and longevity are critical.
              </p>
            </motion.div>

            {/* Double-Sheet Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-dark p-8 rounded-xl border border-border/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Double-Sheet Cabinet Engineering
                </h3>
              </div>
              <p className="text-foreground/70 mb-6">
                AVYRA stainless steel cabinets are built using a double-sheet construction, 
                not single thin metal sheets as used by many manufacturers.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background/50 p-4 rounded-lg text-center">
                  <p className="text-primary font-bold text-lg">0.8 - 1.0 mm</p>
                  <p className="text-foreground/60 text-sm">Outer Sheet</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg text-center">
                  <p className="text-primary font-bold text-lg">0.8 - 1.0 mm</p>
                  <p className="text-foreground/60 text-sm">Inner Sheet</p>
                </div>
              </div>
              <p className="text-foreground/70">
                Between these sheets, AVYRA uses a structured infill system consisting of 
                <strong className="text-foreground"> stainless steel and aluminium honeycomb</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Honeycomb Section with Image */}
      <section className="py-8 relative">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <Hexagon className="w-8 h-8 text-primary" />
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                  Why Honeycomb Filling Matters
                </h3>
              </div>
              <p className="text-foreground/70 mb-6">
                The honeycomb core is the secret to AVYRA's exceptional strength and durability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {honeycombBenefits.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-4 rounded-lg border border-border/30"
                  >
                    <h4 className="text-foreground font-semibold mb-1">{item.title}</h4>
                    <p className="text-foreground/60 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-foreground/60 mt-6 text-sm">
                This construction ensures that cabinets remain solid even under heavy loads, 
                with no sagging, warping, or deformation over time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-xl overflow-hidden border border-primary/20">
                <img 
                  src={heroKitchen3} 
                  alt="AVYRA Honeycomb Kitchen Carcass Structure" 
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
    </>
  );
};

export default KitchenCarcass;
