import { motion } from "framer-motion";
import { Palette, Paintbrush, Gem } from "lucide-react";

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

        {/* Finish Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {finishOptions.map((finish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Gem className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">
                  {finish.title}
                </h3>
              </div>
              <p className="text-foreground/70 text-sm">{finish.description}</p>
            </motion.div>
          ))}
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
          className="glass-dark p-8 rounded-xl border border-border/30 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Palette className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-display font-bold text-gold-gradient">
              Multiple Colour Options
            </h3>
          </div>
          <p className="text-foreground/70 text-center mb-6">
            AVYRA wardrobes are available in a wide palette of colors and tones:
          </p>
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
