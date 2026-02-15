import { motion } from "framer-motion";
import { Palette, Paintbrush, Gem } from "lucide-react";
import neutralPalette from "@/assets/wardrobe-neutral-palette.png?url";
import colorPalette from "@/assets/wardrobe-color-palette.png?url";
import sinteredStone from "@/assets/wardrobe-sintered-stone.png?url";

const finishOptions = [
  {
    title: "PU Finish",
    description: "Smooth, seamless surfaces available in matte or gloss, with extensive color choices.",
  },
  {
    title: "Fabric Finish",
    description: "Soft, textured finishes that add warmth and comfort to bedroom spaces.",
  },
  {
    title: "Leather Finish",
    description: "Luxurious, tactile surfaces that create a bold design statement.",
  },
  {
    title: "Lacquered Finish",
    description: "Clean, contemporary finishes known for durability and ease of maintenance.",
  },
  {
    title: "Sintered Surfaces",
    description: "Highly durable, scratch-resistant finishes with a premium stone-like appearance.",
  },
];

const colorOptions = [
  "Neutral shades for minimal interiors",
  "Rich hues for statement designs",
  "Metallic finishes for modern luxury",
  "Soft textures for warm living spaces",
];

const WardrobeFinishes = () => {
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
            <Paintbrush className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient">
              Design Freedom Without Compromise
            </h2>
          </div>
          <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
            AVYRA wardrobes offer complete design freedom without sacrificing structural integrity. 
            A wide range of door and shutter finishes allows the wardrobe to blend seamlessly into any interior style.
          </p>
        </motion.div>

        {/* Finish Options with Sintered Stone Image */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
            {finishOptions.slice(0, 4).map((finish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark p-5 rounded-xl border border-border/30 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Gem className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-base font-display font-bold text-foreground">
                    {finish.title}
                  </h3>
                </div>
                <p className="text-foreground/70 text-sm">{finish.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Sintered Stone Feature */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative rounded-xl overflow-hidden border border-primary/20 h-full">
              <img 
                src={sinteredStone} 
                alt="Premium sintered stone wardrobe finish with natural veining" 
                className="w-full h-full min-h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/95 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <Gem className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-display font-bold text-foreground">
                    Sintered Surfaces
                  </h3>
                </div>
                <p className="text-foreground/70 text-sm">
                  Highly durable, scratch-resistant finishes with a premium stone-like appearance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-foreground/60 mb-6"
        >
          Each finish is applied over AVYRA's engineered structure, ensuring beauty backed by strength.
        </motion.p>

        {/* Color Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-8 rounded-xl border border-border/30 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Palette className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-display font-bold text-gold-gradient">
              Multiple Colour Options
            </h3>
          </div>
          <p className="text-foreground/70 text-center mb-8">
            AVYRA wardrobes are available in a wide palette of colors and tones:
          </p>
          
          {/* Color Palette Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <img 
                src={neutralPalette} 
                alt="Neutral and monochrome color palette with grey and black shades" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                <p className="text-foreground font-medium text-sm">Neutral & Monochrome Shades</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <img 
                src={colorPalette} 
                alt="Multi-color palette with rich and vibrant finish options" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                <p className="text-foreground font-medium text-sm">Rich & Vibrant Hues</p>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {colorOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground/80 text-sm">{option}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-primary font-semibold text-center mt-6 text-sm">
            This flexibility ensures complete harmony with the surrounding interior design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WardrobeFinishes;
