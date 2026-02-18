import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import heroKitchen from "@/assets/hero-kitchen-1.jpg?url";
import heroWardrobe from "@/assets/hero-wardrobe-2.jpg?url";

const categories = [
  {
    title: "SS 304 Stainless Steel Modular Kitchens",
    description: "Premium, hygienic, long-lasting kitchen systems.",
    image: heroKitchen,
    link: "/kitchen",
  }, 
  {
    title: "Luxury Wardrobes",
    description: "Precision-crafted storage with a premium finish.",
    image: heroWardrobe,
    link: "/wardrobes",
  },
];

const WhatWeCreateSection = () => {
  return (
    <section className="py-8 bg-background overflow-hidden w-full">
      <div className="container-premium w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 w-full"
        >
          <h2 className="heading-subsection text-gold-gradient mb-2">What We Create</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium interior solutions crafted with precision engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <a href={category.link} className="block">
                <div className="relative overflow-hidden rounded-lg h-[250px]">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl md:text-2xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCreateSection;
