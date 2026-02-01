import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";

import heroKitchen1 from "@/assets/hero-kitchen-1.jpg";
import heroKitchen3 from "@/assets/hero-kitchen-3.jpg";
import heroKitchen4 from "@/assets/hero-kitchen-4.jpg";
import heroWardrobe from "@/assets/hero-wardrobe-2.jpg";
import heroInterior from "@/assets/hero-interior-5.jpg";

const galleryImages = [
  { src: heroKitchen1, category: "Kitchen", title: "SS 304 Stainless Steel Modular Kitchen Hyderabad" },
  { src: heroWardrobe, category: "Wardrobe", title: "Premium Aluminium Walk-in Wardrobe Telangana" },
  { src: heroKitchen3, category: "Kitchen", title: "SS 304 Honeycomb Kitchen Design Vijayawada" },
  { src: heroKitchen4, category: "Kitchen", title: "Premium Aluminium Modular Kitchen South India" },
  { src: heroKitchen1, category: "Kitchen", title: "Contemporary SS 304 Kitchen Hyderabad" },
];

const categories = ["Kitchen", "Wardrobe"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Kitchen");

  const filteredImages = galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
  {/* ===============================
      PRIMARY SEO
  =============================== */}
  <title>
    SS 304 Kitchen & Aluminium Wardrobe Gallery | AVYRA Hyderabad Portfolio
  </title>

  <meta
    name="description"
    content="Browse AVYRA’s gallery of premium SS 304 stainless steel honeycomb kitchens, aluminium wardrobes, and interior solutions across Hyderabad, Telangana, Andhra Pradesh & South India. Explore our craftsmanship."
  />

  <meta
    name="keywords"
    content="SS 304 kitchen gallery Hyderabad, stainless steel kitchen designs India, aluminium wardrobe designs, modular kitchen portfolio, premium interior gallery South India"
  />

  <link rel="canonical" href="https://www.avyra.co.in/gallery" />

  {/* ===============================
      OPEN GRAPH
  =============================== */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.avyra.co.in/gallery" />
  <meta
    property="og:title"
    content="SS 304 Kitchen & Aluminium Wardrobe Gallery | AVYRA"
  />
  <meta
    property="og:description"
    content="Explore AVYRA’s portfolio of premium SS 304 stainless steel kitchens, aluminium wardrobes, and modern interior solutions across Hyderabad & South India."
  />
  <meta property="og:site_name" content="AVYRA" />
  <meta
    property="og:image"
    content="https://www.avyra.co.in/images/og-avyra-gallery.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* ===============================
      TWITTER
  =============================== */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="SS 304 Kitchen & Wardrobe Gallery | AVYRA"
  />
  <meta
    name="twitter:description"
    content="Premium SS 304 stainless steel kitchens and aluminium wardrobes portfolio in Hyderabad & South India."
  />
  <meta
    name="twitter:image"
    content="https://www.avyra.co.in/images/og-avyra-gallery.jpg"
  />

  {/* ===============================
      STRUCTURED DATA – Image Gallery
  =============================== */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "AVYRA Gallery",
      url: "https://www.avyra.co.in/gallery",
      description:
        "Gallery showcasing premium SS 304 stainless steel kitchens, aluminium wardrobes, and interior projects by AVYRA.",
      mainEntity: {
        "@type": "ImageGallery",
        name: "AVYRA Kitchen & Wardrobe Gallery",
        image: [
          "https://www.avyra.co.in/images/gallery/kitchen-1.jpg",
          "https://www.avyra.co.in/images/gallery/wardrobe-1.jpg",
          "https://www.avyra.co.in/images/gallery/interior-1.jpg"
        ],
      },
      publisher: {
        "@type": "Organization",
        name: "AVYRA",
        logo: {
          "@type": "ImageObject",
          url: "https://www.avyra.co.in/images/logo.png",
        },
      },
    })}
  </script>
</Helmet>

      <Header />

      <main>
        <GalleryHero />

        {/* Filters */}
        <section className="py-3 border-b border-border/30">
          <div className="container-premium">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-1.5 text-sm font-medium tracking-wider uppercase transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-6">
          <div className="container-premium">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={`${image.title}-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg"
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
