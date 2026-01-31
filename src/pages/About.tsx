import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Layers, Droplets, CheckCircle, Wrench, Award, Sparkles, Scale } from "lucide-react";

// Import images
import heroKitchen1 from "@/assets/hero-kitchen-1.jpg";
import heroKitchen3 from "@/assets/hero-kitchen-3.jpg";
import heroKitchen4 from "@/assets/hero-kitchen-4.jpg";
import heroWardrobe from "@/assets/hero-wardrobe-2.jpg";
import heroInterior from "@/assets/hero-interior-5.jpg";
import aboutTeamDiscussion from "@/assets/about-team-discussion.png";
import aboutInstallation from "@/assets/about-installation.png";
import aboutClientDiscussion from "@/assets/about-client-discussion.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Rich marble/granite texture background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(139, 90, 43, 0.18) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(139, 90, 43, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(80, 50, 30, 0.12) 0%, transparent 70%),
            radial-gradient(ellipse at 30% 80%, rgba(120, 80, 40, 0.1) 0%, transparent 40%),
            linear-gradient(180deg, hsl(0 0% 6%) 0%, hsl(0 0% 8%) 50%, hsl(0 0% 6%) 100%)
          `
        }}
      />
      
      {/* Marble veining texture overlay */}
      <div 
        className="fixed inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='marble'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.012' numOctaves='6' seed='15' stitchTiles='stitch'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='100'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23marble)' fill='%23201510'/%3E%3C/svg%3E")`,
          backgroundSize: '800px 800px',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Gold dust particles effect */}
      <div 
        className="fixed inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 10% 20%, rgba(201, 162, 39, 0.9) 50%, transparent 50%),
            radial-gradient(1px 1px at 25% 45%, rgba(201, 162, 39, 0.7) 50%, transparent 50%),
            radial-gradient(2px 2px at 40% 15%, rgba(201, 162, 39, 0.8) 50%, transparent 50%),
            radial-gradient(1px 1px at 55% 70%, rgba(201, 162, 39, 0.6) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 70% 35%, rgba(201, 162, 39, 0.75) 50%, transparent 50%),
            radial-gradient(1px 1px at 85% 55%, rgba(201, 162, 39, 0.65) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 15% 75%, rgba(201, 162, 39, 0.5) 50%, transparent 50%),
            radial-gradient(1px 1px at 90% 85%, rgba(201, 162, 39, 0.7) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 35% 90%, rgba(201, 162, 39, 0.55) 50%, transparent 50%),
            radial-gradient(1px 1px at 60% 5%, rgba(201, 162, 39, 0.8) 50%, transparent 50%)
          `,
          backgroundSize: '500px 500px'
        }}
      />
      
      {/* Sweeping gold light streaks */}
      <div className="fixed top-[10%] -left-20 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -rotate-12 blur-[2px] pointer-events-none" />
      <div className="fixed top-[25%] -right-20 w-[55%] h-[1.5px] bg-gradient-to-l from-transparent via-primary/40 to-transparent transform rotate-8 blur-[1px] pointer-events-none" />
      <div className="fixed top-[45%] -left-10 w-[45%] h-[1px] bg-gradient-to-r from-transparent via-primary/35 to-transparent transform -rotate-5 pointer-events-none" />
      <div className="fixed top-[65%] -right-10 w-[40%] h-[1.5px] bg-gradient-to-l from-transparent via-primary/45 to-transparent transform rotate-10 blur-[1px] pointer-events-none" />
      <div className="fixed top-[80%] -left-20 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -rotate-8 pointer-events-none" />
      
      <Helmet>
        <title>About AVYRA Kitchens | SS 304 Stainless Steel & Aluminium Kitchen Manufacturers Hyderabad</title>
        <meta
          name="description"
          content="AVYRA specializes in SS 304 & SS 316 stainless steel honeycomb kitchens and aluminium kitchen systems. Engineered for strength, designed for living. Premium kitchen manufacturers in Hyderabad, Telangana & South India."
        />
        <meta
          name="keywords"
          content="SS 304 stainless steel kitchen Hyderabad, SS 316 kitchen manufacturers, aluminium kitchen India, honeycomb kitchen carcass, premium modular kitchen Telangana"
        />
        <link rel="canonical" href="https://www.avyra.co.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.avyra.co.in/about" />
        <meta property="og:title" content="About AVYRA Kitchens | SS 304 Stainless Steel Kitchen Manufacturers" />
        <meta property="og:description" content="Engineered for strength. Designed for living. Premium SS 304 & aluminium kitchens built to last decades." />
        <meta property="og:site_name" content="AVYRA" />
        <meta property="og:image" content="https://www.avyra.co.in/images/og-avyra-about.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About AVYRA Kitchens",
            url: "https://www.avyra.co.in/about",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "AVYRA",
              url: "https://www.avyra.co.in",
              description: "Premium SS 304 stainless steel and aluminium kitchen manufacturers specializing in honeycomb construction.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
              areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh", "South India"],
            },
          })}
        </script>
      </Helmet>

      <Header />
      
      <main className="relative z-10">
        {/* Hero Section with Background Image */}
        <section className="pt-28 md:pt-32 pb-12 relative overflow-hidden min-h-[50vh] flex items-end">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroKitchen1})` }}
          />
          
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 via-charcoal-dark/60 to-charcoal-dark/90" />
          
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
          <div className="absolute bottom-20 left-0 w-2/3 h-[1px] bg-gradient-to-r from-primary/50 via-primary/30 to-transparent" />
          
          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="heading-display text-gold-gradient mb-4 drop-shadow-lg">
                AVYRA Kitchens
              </h1>
              <p className="text-xl md:text-2xl font-serif text-foreground/90 mb-8 italic drop-shadow-md">
                Engineered for Strength. Designed for Living.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg max-w-3xl mx-auto drop-shadow-sm">
                At AVYRA, kitchens are not built as furniture — they are engineered as long-term living systems. 
                Every AVYRA kitchen is designed to perform flawlessly under Indian cooking conditions while 
                maintaining elegance, hygiene, and durability for decades.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Section with Image */}
        <section className="py-8 relative">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                  Unlike conventional kitchen brands that rely heavily on wood-based materials, 
                  AVYRA specializes in <span className="text-primary font-semibold">stainless steel and aluminium kitchens</span>, 
                  combining advanced material science with refined design aesthetics.
                </p>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  The result is a kitchen that is stronger, safer, more hygienic, and future-ready.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src={aboutTeamDiscussion} 
                    alt="AVYRA Team Discussion - Premium Kitchen Consultation" 
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                {/* Decorative corner */}
                <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-primary/40" />
                <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-primary/40" />
              </motion.div>
            </div>
          </div>
        </section>

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

            <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient mb-6">
                  Why Honeycomb Filling Matters
                </h3>
                <p className="text-foreground/70 mb-6">
                  The honeycomb core is the secret to AVYRA's exceptional strength and durability.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Exceptional Load-Bearing", desc: "Heavy cookware support" },
                    { title: "Zero Cabinet Flex", desc: "No vibration or movement" },
                    { title: "Sound Insulation", desc: "Quieter operation" },
                    { title: "Structural Stability", desc: "Long-term performance" },
                  ].map((item, index) => (
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
                <p className="text-foreground/70 mt-6 italic">
                  This construction ensures cabinets remain solid even under heavy loads, 
                  with no sagging, warping, or deformation over time.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="relative rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src={aboutInstallation} 
                    alt="AVYRA Kitchen Installation Process" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strength & Durability Section */}
        <section className="py-8 bg-card">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
                Strength That Lasts Decades
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
                AVYRA kitchens are built to withstand heavy cookware storage, high-temperature cooking environments, 
                continuous exposure to steam and moisture, and daily opening and closing cycles.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                { icon: "✓", text: "Do not swell" },
                { icon: "✓", text: "Do not crack" },
                { icon: "✓", text: "Do not warp" },
                { icon: "✓", text: "No termites or pests" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-dark p-6 rounded-xl border border-primary/20 text-center"
                >
                  <span className="text-3xl text-primary mb-3 block">{item.icon}</span>
                  <p className="text-foreground font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-foreground/70 text-lg max-w-2xl mx-auto italic"
            >
              This makes AVYRA kitchens a long-term investment rather than a short-term solution.
            </motion.p>
          </div>
        </section>

        {/* Hygiene Section */}
        <section className="py-8 relative">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src={aboutClientDiscussion} 
                    alt="AVYRA Client Consultation - Stainless Steel Kitchen Planning" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                    Hygiene at the Core
                  </h2>
                </div>
                <p className="text-foreground/70 mb-6">
                  Hygiene is one of the most important yet overlooked aspects of kitchen design. 
                  AVYRA kitchens are engineered to meet the highest hygiene standards.
                </p>
                
                <h4 className="text-foreground font-semibold mb-4">
                  Why Stainless Steel & Aluminium Are Superior:
                </h4>
                <ul className="space-y-3 mb-6">
                  {[
                    "Non-porous surfaces",
                    "Easy to clean and sanitize",
                    "No absorption of oils, stains, or odors",
                    "Resistant to bacteria and mold growth",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-foreground/70 italic">
                  Especially suitable for Indian cooking styles, homes with children or elderly members, 
                  and health-conscious households.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aluminium Kitchens Section */}
        <section className="py-8 bg-card">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
                  Aluminium Kitchens by AVYRA
                </h2>
                <p className="text-foreground/70 mb-6 text-lg">
                  In addition to stainless steel, AVYRA also offers premium aluminium kitchen systems 
                  designed for modern homes.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    { title: "Lightweight yet strong", desc: "Easy handling without compromising durability" },
                    { title: "Corrosion-resistant", desc: "Long-lasting performance in any environment" },
                    { title: "Sleek contemporary designs", desc: "Perfect for modern aesthetics" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-foreground font-semibold">{item.title}</h4>
                        <p className="text-foreground/60 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-foreground/70">
                  AVYRA aluminium kitchens are engineered with precision profiles, reinforced joints, 
                  and premium finishes to deliver durability without compromising on aesthetics.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src={heroWardrobe} 
                    alt="Premium AVYRA Aluminium Kitchen" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Door & Shutter Options */}
        <section className="py-8 relative">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
                Door & Shutter Options: Design Without Limits
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
                AVYRA believes that strength should never limit design. That's why AVYRA kitchens 
                offer a wide range of door and shutter options to match every interior style.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Sintered Stone Doors",
                  features: ["Highly durable & scratch-resistant", "Heat, stain & moisture resistant", "Premium stone-like appearance", "Ideal for luxury kitchens"],
                },
                {
                  title: "Glass Doors",
                  features: ["Lacquered Glass options", "Clear, Frosted & Patterned", "Elegant appearance", "Easy to maintain"],
                },
                {
                  title: "Glass with Aluminium Frame",
                  features: ["Perfect strength & sophistication", "Slim aluminium profiles", "Premium glass panels", "Minimalist aesthetics"],
                },
                {
                  title: "Powder-Coated Metal",
                  features: ["Industrial yet refined look", "High scratch resistance", "Multiple color options", "Durable finish"],
                },
              ].map((door, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-dark p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-display font-bold text-foreground mb-4">{door.title}</h3>
                  <ul className="space-y-2">
                    {door.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <span className="text-primary text-sm">•</span>
                        <span className="text-foreground/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hardware & Countertops */}
        <section className="py-8 bg-card">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Hardware */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-dark p-8 rounded-xl border border-border/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gold-gradient">
                    Premium Hardware & Hinges
                  </h3>
                </div>
                <p className="text-foreground/70 mb-6">
                  A kitchen is only as good as its hardware. AVYRA uses globally trusted brands 
                  known for precision and long-term reliability.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Blum", "Higold", "Nuomi"].map((brand) => (
                    <span key={brand} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {brand}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-2">
                  {["Soft-close mechanisms", "Smooth and silent operation", "High cycle durability", "Precision alignment"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Countertops */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-dark p-8 rounded-xl border border-border/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gold-gradient">
                    Countertop Solutions
                  </h3>
                </div>
                <p className="text-foreground/70 mb-6">
                  AVYRA recommends Quartz countertops for their durability and refined finish.
                </p>
                
                <h4 className="text-foreground font-semibold mb-4">Why Quartz?</h4>
                <ul className="space-y-2">
                  {[
                    "High scratch resistance",
                    "Low maintenance",
                    "Non-porous and hygienic",
                    "Consistent appearance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-foreground/70 mt-6 italic text-sm">
                  Quartz complements stainless steel and aluminium kitchens perfectly, 
                  creating a balanced blend of strength and elegance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Material Comparison */}
        <section className="py-8 relative">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
                Material Comparison
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
                The difference lies in engineering depth, not just appearance.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Conventional */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-destructive/10 border border-destructive/30"
              >
                <h3 className="text-xl font-display font-bold text-destructive mb-6">
                  What Most Brands Use
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "MDF or particle board carcass",
                    "Laminates or acrylic shutters",
                    "Basic hinges with limited lifespan",
                    "Wood-based internal structures",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-destructive">✗</span>
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-foreground/60 text-sm">
                  These materials may look good initially but degrade over time due to moisture exposure, 
                  heat, pest infestation, and structural fatigue.
                </p>
              </motion.div>

              {/* AVYRA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-primary/5 border border-primary/30"
              >
                <h3 className="text-xl font-display font-bold text-primary mb-6">
                  What AVYRA Uses
                </h3>
                <ul className="space-y-3">
                  {[
                    "SS 304 / SS 316 stainless steel",
                    "Aluminium structural profiles",
                    "Lacquered glass and premium finishes",
                    "Soft-close hardware from Blum, Higold, Nuomi",
                    "Quartz countertops",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SS vs Aluminium Comparison */}
        <section className="py-8 bg-card">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
                Stainless Steel vs Aluminium: AVYRA's Honest Approach
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
                AVYRA does not push one solution blindly. Both stainless steel and aluminium kitchens 
                have their strengths, and AVYRA recommends the right solution based on usage pattern, 
                design preference, environmental conditions, and lifestyle requirements.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* SS Kitchen */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-dark p-8 rounded-xl border border-border/30"
              >
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Stainless Steel Kitchens
                </h3>
                <p className="text-primary mb-6">Best for:</p>
                <ul className="space-y-3">
                  {[
                    "Maximum durability",
                    "Heavy usage",
                    "Long-term ownership",
                    "Hygienic environments",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Aluminium Kitchen */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-dark p-8 rounded-xl border border-border/30"
              >
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Aluminium Kitchens
                </h3>
                <p className="text-primary mb-6">Best for:</p>
                <ul className="space-y-3">
                  {[
                    "Lightweight structures",
                    "Sleek modern designs",
                    "Contemporary aesthetics",
                    "Budget-conscious premium",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-foreground/70 mt-8 italic"
            >
              Both options are designed with AVYRA's uncompromising quality standards.
            </motion.p>
          </div>
        </section>

        {/* Competitive Pricing */}
        <section className="py-8 relative">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
                Competitive Without Compromise
              </h2>
              <p className="text-foreground/70 text-lg mb-8">
                AVYRA kitchens are priced competitively compared to other premium brands, while offering:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Superior materials",
                  "Advanced engineering",
                  "Longer lifespan",
                  "Lower maintenance",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-4 rounded-lg border border-primary/20"
                  >
                    <p className="text-foreground font-semibold text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-foreground/70 mt-8 italic">
                The focus is always on value over time, not short-term pricing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AVYRA Promise */}
        <section className="py-8 bg-card relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
          
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-8">
                The AVYRA Kitchen Promise
              </h2>
              
              <p className="text-foreground/70 text-lg mb-8">
                Every AVYRA kitchen represents:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {[
                  { title: "Structural Integrity", desc: "Built to last decades" },
                  { title: "Thoughtful Engineering", desc: "Every detail matters" },
                  { title: "Design Flexibility", desc: "Customized to your style" },
                  { title: "Long-term Reliability", desc: "Peace of mind guaranteed" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-dark p-6 rounded-xl border border-primary/20"
                  >
                    <h4 className="text-foreground font-semibold mb-2">{item.title}</h4>
                    <p className="text-foreground/60 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl font-serif text-foreground/80 italic"
              >
                It is a kitchen designed not just for today, but for years of everyday living.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Full Width Image */}
        <section className="relative h-[400px] overflow-hidden">
          <img 
            src={heroInterior} 
            alt="AVYRA Premium Kitchen Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </section>
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default About;
