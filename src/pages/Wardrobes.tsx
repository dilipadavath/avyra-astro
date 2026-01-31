import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroWardrobe from "@/assets/hero-wardrobe-2.jpg";
import heroInterior from "@/assets/hero-interior-5.jpg";

const wardrobeFeatures = [
  "Trouser Pull-outs",
  "Saree Baskets",
  "Accessory & Jewelry Drawers",
  "Shoe Racks",
  "Laundry Baskets",
];

const doorTypes = [
  "Steel Doors",
  "Sintered Stone Doors",
  "Lacquered Glass Doors",
  "Leather Finish Doors",
  "PU Finish Doors",
  "Fabric Finish Doors",
  "Combination & Custom Doors",
];

const Wardrobes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
  {/* ===============================
      PRIMARY SEO
  =============================== */}
  <title>
    Aluminium & SS 304 Stainless Steel Modular Wardrobes in Hyderabad | AVYRA
  </title>

  <meta
    name="description"
    content="AVYRA manufactures premium aluminium and SS 304 stainless steel modular wardrobes in Hyderabad, Telangana, Andhra Pradesh & South India. Moisture-proof, rust-proof wardrobes with intelligent storage solutions for modern Indian homes."
  />

  <meta
    name="keywords"
    content="aluminium wardrobes Hyderabad, SS 304 stainless steel wardrobe, modular wardrobes Hyderabad, premium wardrobes India, stainless steel wardrobes Telangana, aluminium modular wardrobes South India"
  />

  <link rel="canonical" href="https://www.avyra.co.in/wardrobes" />

  {/* ===============================
      OPEN GRAPH
  =============================== */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.avyra.co.in/wardrobes" />
  <meta
    property="og:title"
    content="Aluminium & SS 304 Stainless Steel Wardrobes | AVYRA Hyderabad"
  />
  <meta
    property="og:description"
    content="Premium aluminium and SS 304 stainless steel wardrobes engineered for durability, moisture resistance, and modern aesthetics across Hyderabad & South India."
  />
  <meta property="og:site_name" content="AVYRA" />
  <meta
    property="og:image"
    content="https://www.avyra.co.in/images/og-avyra-wardrobes.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* ===============================
      TWITTER
  =============================== */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Aluminium & SS 304 Stainless Steel Wardrobes | AVYRA"
  />
  <meta
    name="twitter:description"
    content="Premium aluminium and stainless steel wardrobes in Hyderabad & South India with modern storage solutions."
  />
  <meta
    name="twitter:image"
    content="https://www.avyra.co.in/images/og-avyra-wardrobes.jpg"
  />

  {/* ===============================
      STRUCTURED DATA – Service Page
  =============================== */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Aluminium & SS 304 Stainless Steel Wardrobes",
      serviceType: "Modular Wardrobe Manufacturing",
      provider: {
        "@type": "LocalBusiness",
        name: "AVYRA",
        url: "https://www.avyra.co.in",
        logo: "https://www.avyra.co.in/images/logo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
      },
      areaServed: [
        "Hyderabad",
        "Telangana",
        "Andhra Pradesh",
        "South India"
      ],
      description:
        "Manufacturing and installation of premium aluminium and SS 304 stainless steel modular wardrobes with modern finishes and intelligent storage systems.",
    })}
  </script>
</Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-screen min-h-[700px] flex items-end pb-16 md:pb-24">
          <div className="absolute inset-0">
            <img 
              src={heroWardrobe} 
              alt="Premium Aluminium Modular Wardrobe in Hyderabad by AVYRA" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          </div>
          
          {/* Gold vignette edges */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `
              radial-gradient(ellipse at top left, rgba(201, 162, 39, 0.15) 0%, transparent 40%),
              radial-gradient(ellipse at top right, rgba(201, 162, 39, 0.1) 0%, transparent 35%),
              radial-gradient(ellipse at bottom left, rgba(201, 162, 39, 0.12) 0%, transparent 30%),
              radial-gradient(ellipse at bottom right, rgba(201, 162, 39, 0.08) 0%, transparent 35%)
            `
          }} />
          
          {/* Decorative gold lines */}
          <div className="absolute top-24 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="absolute top-32 right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent via-primary/40 to-transparent" />
          <div className="absolute bottom-28 left-0 w-2/3 h-[1px] bg-gradient-to-r from-primary/50 via-primary/30 to-transparent" />
          
          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-left"
            >
              <h1 className="heading-display text-gold-gradient mb-6 drop-shadow-lg">
                Premium Aluminium & Stainless Steel Wardrobes
              </h1>
              <p className="text-lg text-foreground/90 mb-8 max-w-2xl drop-shadow-md">
                Precision-crafted aluminium and SS 304 stainless steel wardrobe systems with premium finishes and intelligent storage solutions for modern homes in Hyderabad, Vijayawada, Telangana & Andhra Pradesh.
              </p>
              <Button asChild className="btn-primary-gold group">
                <a href="/contact">
                  Book Consultation
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Aluminium Advantages */}
        <section className="section-padding bg-charcoal">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-section text-gold-gradient mb-6">
                  Advantages of Aluminium & Stainless Steel Wardrobes
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Lightweight yet exceptionally strong",
                    "100% corrosion and rust-resistant",
                    "Moisture-proof - ideal for Hyderabad & South India climate",
                    "Termite-proof unlike wood wardrobes",
                    "Perfect for modern, minimal interiors",
                    "Long life with minimal maintenance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  AVYRA's aluminium and stainless steel wardrobes offer a sleek, contemporary look combined with 
                  exceptional durability - a long-term investment for homes in Telangana, Andhra Pradesh & South India.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden"
              >
                <img 
                  src={heroInterior} 
                  alt="Aluminium Modular Wardrobe with Premium Finish in Telangana" 
                  className="w-full h-auto" 
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="heading-subsection text-gold-gradient mb-6">Wardrobe Storage Solutions</h3>
                <ul className="space-y-3">
                  {wardrobeFeatures.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="heading-subsection text-gold-gradient mb-6">Premium Door Finishes Available</h3>
                <ul className="space-y-3">
                  {doorTypes.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Hardware */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 card-premium"
            >
              <h3 className="heading-subsection text-gold-gradient mb-4">Premium International Hardware</h3>
              <p className="text-muted-foreground mb-4">
                We use only premium international hardware for smooth and silent performance in our aluminium and stainless steel wardrobes.
              </p>
              <div className="flex gap-8">
                <span className="text-foreground font-medium">• Higold</span>
                <span className="text-foreground font-medium">• Nuomi</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Wardrobes;
