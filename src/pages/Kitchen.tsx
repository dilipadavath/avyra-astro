import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Flame, Droplets, ShieldCheck, Bug, Sparkles, Factory } from "lucide-react";
import heroKitchen1 from "@/assets/hero-kitchen-1.jpg";
import heroKitchen3 from "@/assets/hero-kitchen-3.jpg";
import heroKitchen4 from "@/assets/hero-kitchen-4.jpg";

const benefits = [
  { icon: Flame, title: "Heat Resistant", description: "Withstands high Indian cooking temperatures" },
  { icon: Droplets, title: "Waterproof", description: "100% moisture and water resistant" },
  { icon: ShieldCheck, title: "Rust-Proof", description: "SS 304 grade ensures zero corrosion" },
  { icon: Bug, title: "Termite Resistant", description: "Completely insect and pest proof" },
  { icon: Sparkles, title: "Easy to Clean", description: "Smooth, hygienic stainless steel surfaces" },
  { icon: Factory, title: "Premium Build", description: "Precision manufactured honeycomb carcass" },
];

const Kitchen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
  {/* ===============================
      PRIMARY SEO
  =============================== */}
  <title>
    SS 304 Stainless Steel Honeycomb Kitchens in Hyderabad | Modular Kitchen Manufacturers | AVYRA
  </title>

  <meta
    name="description"
    content="AVYRA manufactures premium SS 304 stainless steel honeycomb kitchens and aluminium modular kitchens in Hyderabad, Telangana, Andhra Pradesh & South India. Rust-proof, termite-proof, hygienic kitchens built for Indian homes."
  />

  <meta
    name="keywords"
    content="SS 304 stainless steel kitchen Hyderabad, SS 304 honeycomb kitchen manufacturers, stainless steel modular kitchen India, aluminium modular kitchen Telangana, premium kitchen manufacturers Hyderabad"
  />

  <link rel="canonical" href="https://www.avyra.co.in/kitchen" />

  {/* ===============================
      OPEN GRAPH
  =============================== */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.avyra.co.in/kitchen" />
  <meta
    property="og:title"
    content="SS 304 Stainless Steel Honeycomb Kitchens | AVYRA Hyderabad"
  />
  <meta
    property="og:description"
    content="Premium SS 304 stainless steel honeycomb and aluminium modular kitchens engineered for durability, hygiene, and Indian cooking needs across Hyderabad & South India."
  />
  <meta property="og:site_name" content="AVYRA" />
  <meta
    property="og:image"
    content="https://www.avyra.co.in/images/og-avyra-kitchen.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* ===============================
      TWITTER
  =============================== */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="SS 304 Stainless Steel Honeycomb Kitchens | AVYRA"
  />
  <meta
    name="twitter:description"
    content="Premium SS 304 stainless steel honeycomb and aluminium modular kitchens in Hyderabad & South India."
  />
  <meta
    name="twitter:image"
    content="https://www.avyra.co.in/images/og-avyra-kitchen.jpg"
  />

  {/* ===============================
      STRUCTURED DATA – Product / Service Page
  =============================== */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "SS 304 Stainless Steel Honeycomb Kitchens",
      serviceType: "Modular Kitchen Manufacturing",
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
        "Manufacturing and installation of premium SS 304 stainless steel honeycomb kitchens and aluminium modular kitchens designed for Indian homes.",
    })}
  </script>
</Helmet>

      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative h-screen min-h-[700px] flex items-end pb-16 md:pb-24">
          <div className="absolute inset-0">
            <img 
              src={heroKitchen1} 
              alt="SS 304 Stainless Steel Modular Kitchen in Hyderabad by AVYRA" 
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
                SS 304 Stainless Steel Kitchens
              </h1>
              <p className="text-lg text-foreground/90 mb-8 drop-shadow-md">
                Premium SS 304 stainless steel honeycomb and aluminium modular kitchens engineered for 
                modern Indian homes in Hyderabad, Vijayawada, Telangana & Andhra Pradesh. Hygienic, durable, and built to last a lifetime.
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

        {/* SS304 Section */}
        <section className="section-padding bg-charcoal">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-section text-gold-gradient mb-6">
                  About SS 304 Stainless Steel Honeycomb Kitchens
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  SS 304 is a premium food-grade stainless steel widely used in professional 
                  kitchens across Hyderabad, Telangana, and South India due to its superior strength, 
                  hygiene, and honeycomb carcass construction that provides exceptional durability.
                </p>
                <h3 className="text-xl font-serif text-primary mb-4">Benefits of SS 304 Stainless Steel Kitchen</h3>
                <ul className="space-y-3">
                  {["100% rust-proof SS 304 grade steel", "Termite-proof honeycomb construction", "Waterproof & moisture resistant", "Fire-resistant for Indian cooking", 
                    "Highly hygienic & easy to clean", "Extremely durable - lasts 25+ years", 
                    "Ideal for Hyderabad, Vijayawada & South India climate"].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden"
              >
                <img 
                  src={heroKitchen3} 
                  alt="SS 304 Stainless Steel Honeycomb Kitchen Design in Telangana" 
                  className="w-full h-auto" 
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-section text-gold-gradient text-center mb-16"
            >
              Why Choose AVYRA's SS 304 Stainless Steel Kitchens
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-premium p-6 text-center hover-lift"
                >
                  <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="section-padding bg-charcoal">
          <div className="container-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src={heroKitchen3}
                alt="Premium Stainless Steel Modular Kitchen Hyderabad"
                className="rounded-lg w-full h-80 object-cover"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                src={heroKitchen4}
                alt="Aluminium Modular Kitchen Design Andhra Pradesh"
                className="rounded-lg w-full h-80 object-cover"
              />
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="btn-outline-gold">
                <a href="/gallery">View Full Kitchen Gallery</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kitchen;
