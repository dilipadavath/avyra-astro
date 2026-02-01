import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";

import galleryKitchen2 from "@/assets/gallery-kitchen-2.jpg";
import galleryWardrobe3 from "@/assets/gallery-wardrobe-3.jpg";
import galleryWardrobe4 from "@/assets/gallery-wardrobe-4.jpg";
import galleryWardrobe5 from "@/assets/gallery-wardrobe-5.jpg";
import galleryWardrobe6 from "@/assets/gallery-wardrobe-6.jpg";
import galleryWardrobe7 from "@/assets/gallery-wardrobe-7.jpg";
import galleryWardrobe8 from "@/assets/gallery-wardrobe-8.jpg";
import galleryWardrobe9 from "@/assets/gallery-wardrobe-9.jpg";
import galleryWardrobe10 from "@/assets/gallery-wardrobe-10.jpg";
import galleryWardrobe12 from "@/assets/gallery-wardrobe-12.jpg";
import galleryWardrobe14 from "@/assets/gallery-wardrobe-14.jpg";
import galleryWardrobe15 from "@/assets/gallery-wardrobe-15.jpg";
import galleryWardrobe16 from "@/assets/gallery-wardrobe-16.jpg";
import galleryWardrobe17 from "@/assets/gallery-wardrobe-17.jpg";
import galleryWardrobe19 from "@/assets/gallery-wardrobe-19.jpg";
import galleryWardrobe20 from "@/assets/gallery-wardrobe-20.jpg";
import galleryWardrobe21 from "@/assets/gallery-wardrobe-21.jpg";
import galleryWardrobe22 from "@/assets/gallery-wardrobe-22.jpg";
import galleryWardrobe24 from "@/assets/gallery-wardrobe-24.jpg";
import galleryKitchen3 from "@/assets/gallery-kitchen-3.jpg";
import galleryKitchen4 from "@/assets/gallery-kitchen-4.jpg";
import galleryKitchenDrawer from "@/assets/gallery-kitchen-drawer.jpg";
import galleryKitchenPullout from "@/assets/gallery-kitchen-pullout.jpg";
import galleryKitchenPantry from "@/assets/gallery-kitchen-pantry.jpg";
import galleryKitchen325 from "@/assets/gallery-kitchen-325.jpg";
import galleryKitchen336 from "@/assets/gallery-kitchen-336.jpg";
import galleryKitchen342 from "@/assets/gallery-kitchen-342.jpg";
import galleryKitchen348 from "@/assets/gallery-kitchen-348.jpg";
import galleryKitchen350 from "@/assets/gallery-kitchen-350.jpg";
import galleryKitchen353 from "@/assets/gallery-kitchen-353.png";
import galleryKitchen371 from "@/assets/gallery-kitchen-371.jpg";
import galleryKitchen381 from "@/assets/gallery-kitchen-381.jpg";
import galleryKitchen393 from "@/assets/gallery-kitchen-393.jpg";
import galleryKitchen403 from "@/assets/gallery-kitchen-403.jpg";
import galleryKitchen437 from "@/assets/gallery-kitchen-437.jpg";
import galleryKitchen443 from "@/assets/gallery-kitchen-443.jpg";
import galleryKitchen453 from "@/assets/gallery-kitchen-453.jpg";
import galleryKitchenCarouselTall from "@/assets/gallery-kitchen-carousel-tall.jpg";
import galleryKitchenDrawerAppliance from "@/assets/gallery-kitchen-drawer-appliance.jpg";
import galleryKitchenPlateCutlery from "@/assets/gallery-kitchen-plate-cutlery.jpg";
import galleryKitchenElegantStorage from "@/assets/gallery-kitchen-elegant-storage.jpg";

const galleryImages = [
  { src: galleryKitchen2, category: "Kitchen", title: "Professional SS 304 Kitchen with Island" },
  { src: galleryKitchen3, category: "Kitchen", title: "Luxury Marble & Glass Kitchen Design" },
  { src: galleryKitchen4, category: "Kitchen", title: "Contemporary Kitchen with Wine Storage" },
  { src: galleryKitchenDrawer, category: "Kitchen", title: "Premium Plate Drawer Organiser System" },
  { src: galleryKitchenPullout, category: "Kitchen", title: "Higold Pull-Out Drawer System" },
  { src: galleryKitchenPantry, category: "Kitchen", title: "Tall Pull-Out Pantry Unit" },
  { src: galleryKitchen325, category: "Kitchen", title: "Corner Cabinet Pull-Out Storage" },
  { src: galleryKitchen336, category: "Kitchen", title: "Modern Kitchen with Pull-Out Pantry Units" },
  { src: galleryKitchen342, category: "Kitchen", title: "Higold Pull-Down Dish Rack System" },
  { src: galleryKitchen348, category: "Kitchen", title: "Corner Carousel Storage Solution" },
  { src: galleryKitchen350, category: "Kitchen", title: "Corner Pull-Out Cabinet Organiser" },
  { src: galleryKitchen353, category: "Kitchen", title: "Multi-Tier Pull-Out Storage System" },
  { src: galleryKitchen371, category: "Kitchen", title: "Premium Cutlery Drawer Organiser" },
  { src: galleryKitchen381, category: "Kitchen", title: "Lift-Up Overhead Storage Unit" },
  { src: galleryKitchen393, category: "Kitchen", title: "Pull-Down Spice & Bottle Rack" },
  { src: galleryKitchen403, category: "Kitchen", title: "Wall-Mounted Modular Storage System" },
  { src: galleryKitchen437, category: "Kitchen", title: "Pull-Down Grocery Storage Basket" },
  { src: galleryKitchen443, category: "Kitchen", title: "Auto-Open Waste Bin System" },
  { src: galleryKitchen453, category: "Kitchen", title: "Higold Dual Waste Bin Pull-Out" },
  { src: galleryKitchenCarouselTall, category: "Kitchen", title: "Carousel-Type Tall Storage Unit" },
  { src: galleryKitchenDrawerAppliance, category: "Kitchen", title: "Appliance & Bakeware Drawer Organiser" },
  { src: galleryKitchenPlateCutlery, category: "Kitchen", title: "Complete Plate & Cutlery Organiser" },
  { src: galleryKitchenElegantStorage, category: "Kitchen", title: "Effortless Access Elegant Storage" },
  { src: galleryWardrobe3, category: "Wardrobe", title: "Modern Grey Hinged Wardrobe with Fluted Panels" },
  { src: galleryWardrobe4, category: "Wardrobe", title: "Elegant Built-in Wardrobe with Open Shelving" },
  { src: galleryWardrobe5, category: "Wardrobe", title: "Luxury Walk-in Closet with Glass Display" },
  { src: galleryWardrobe6, category: "Wardrobe", title: "Premium Walk-in with Golden Accents" },
  { src: galleryWardrobe7, category: "Wardrobe", title: "Teal Leather Finish Hinged Wardrobe" },
  { src: galleryWardrobe8, category: "Wardrobe", title: "White & Gold Walk-in with Island" },
  { src: galleryWardrobe9, category: "Wardrobe", title: "Teal Sliding Door Walk-in Closet" },
  { src: galleryWardrobe10, category: "Wardrobe", title: "Sage Green Walk-in with Vanity Island" },
  { src: galleryWardrobe12, category: "Wardrobe", title: "Diamond Pattern Blue Hinged Wardrobe" },
  { src: galleryWardrobe14, category: "Wardrobe", title: "Grey Lacquered Walk-in with Glass Display" },
  { src: galleryWardrobe15, category: "Wardrobe", title: "Teal Accent Open Shelving Walk-in" },
  { src: galleryWardrobe16, category: "Wardrobe", title: "Corner Wardrobe with Shoe Storage" },
  { src: galleryWardrobe17, category: "Wardrobe", title: "Cream Lacquered Hinged Wardrobe System" },
  { src: galleryWardrobe19, category: "Wardrobe", title: "Sage Fabric Finish with Glass Centre" },
  { src: galleryWardrobe20, category: "Wardrobe", title: "Olive Leather Finish Glass Wardrobe" },
  { src: galleryWardrobe21, category: "Wardrobe", title: "Green Leather with Centre Display Niche" },
  { src: galleryWardrobe22, category: "Wardrobe", title: "Cream Full-Height Hinged with Display Shelf" },
  { src: galleryWardrobe24, category: "Wardrobe", title: "Hermes Orange Walk-in with Marble Accent" },
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
