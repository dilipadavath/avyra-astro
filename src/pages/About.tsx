import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Layers, Droplets, CheckCircle, Wrench, Award, Sparkles, Heart, Target, Eye, Users, Settings, Home, Star, Headphones } from "lucide-react";

// Import images
import heroKitchen1 from "@/assets/hero-kitchen-1.jpg";
import aboutTeamMeeting from "@/assets/about-team-meeting.jpg";
import aboutEngineering from "@/assets/about-engineering.jpg";
import aboutClientTrust from "@/assets/about-client-trust.jpg";
import aboutQualityControl from "@/assets/about-quality-control.jpg";
import aboutCustomization from "@/assets/about-customization.jpg";
import aboutIndianKitchen from "@/assets/about-indian-kitchen.jpg";
import aboutVision from "@/assets/about-vision.jpg";

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
            radial-gradient(1px 1px at 85% 55%, rgba(201, 162, 39, 0.65) 50%, transparent 50%)
          `,
          backgroundSize: '500px 500px'
        }}
      />
      
      {/* Sweeping gold light streaks */}
      <div className="fixed top-[10%] -left-20 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -rotate-12 blur-[2px] pointer-events-none" />
      <div className="fixed top-[45%] -left-10 w-[45%] h-[1px] bg-gradient-to-r from-transparent via-primary/35 to-transparent transform -rotate-5 pointer-events-none" />
      <div className="fixed top-[80%] -left-20 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -rotate-8 pointer-events-none" />
      
      <Helmet>
        <title>About AVYRA | Premium Living Solutions - Hyderabad, Vijayawada</title>
        <meta
          name="description"
          content="AVYRA is a design-led living solutions brand specializing in stainless steel kitchens, aluminium kitchens, and engineered interior solutions. Living Redefined."
        />
        <meta
          name="keywords"
          content="AVYRA about, premium interiors Hyderabad, stainless steel kitchen brand, aluminium kitchen India, living solutions Telangana"
        />
        <link rel="canonical" href="https://www.avyra.co.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.avyra.co.in/about" />
        <meta property="og:title" content="About AVYRA | Premium Living Solutions" />
        <meta property="og:description" content="Living Redefined. AVYRA brings together aesthetics, durability, functionality, and innovation under one roof." />
        <meta property="og:site_name" content="AVYRA" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About AVYRA",
            url: "https://www.avyra.co.in/about",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "AVYRA",
              url: "https://www.avyra.co.in",
              description: "Design-led living solutions brand specializing in stainless steel and aluminium kitchens, wardrobes, and engineered interiors.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
              areaServed: ["Hyderabad", "Vijayawada", "Telangana", "Andhra Pradesh"],
            },
          })}
        </script>
      </Helmet>

      <Header />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-28 md:pt-32 pb-12 relative overflow-hidden min-h-[25vh] flex items-end">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroKitchen1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 via-charcoal-dark/60 to-charcoal-dark/90" />
          
          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="heading-display text-gold-gradient mb-4 drop-shadow-lg">
                About AVYRA
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-8 relative">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                  AVYRA was born from a simple yet powerful belief: living spaces should do more than just look beautiful — they should elevate the way people live, think, and feel every day.
                </p>
                <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                  In a market crowded with generic interior solutions and short-term design trends, AVYRA stands as a brand that believes in <span className="text-primary font-semibold">timeless design, intelligent engineering, and uncompromising quality</span>.
                </p>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  At its core, AVYRA is not just an interiors or kitchen company. It is a <span className="text-primary font-semibold">design-led living solutions brand</span> that brings together aesthetics, durability, functionality, and innovation under one roof.
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
                    src={aboutTeamMeeting} 
                    alt="AVYRA Team - Premium Interior Consultation" 
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-primary/40" />
                <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-primary/40" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-8 bg-card relative">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
                The Philosophy Behind AVYRA
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
                The name AVYRA represents strength, refinement, and modern living. From day one, the vision was clear — to redefine how Indian homes are designed and built, especially in kitchens, wardrobes, and functional interior spaces.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-dark p-8 rounded-xl border border-border/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    Living Redefined
                  </h3>
                </div>
                <p className="text-foreground/70">
                  This means going beyond surface-level design and focusing on how spaces perform over time. Every cabinet, hinge, surface, and layout is chosen not just for appearance, but for longevity, safety, and ease of use.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-dark p-8 rounded-xl border border-border/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    True Luxury
                  </h3>
                </div>
                <p className="text-foreground/70">
                  While many brands focus on fast delivery or visual appeal alone, AVYRA believes that true luxury lies in precision, material integrity, and long-term reliability.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Engineering First Section */}
        <section className="py-8 relative">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src={aboutEngineering} 
                    alt="AVYRA Engineering Excellence" 
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
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                    Engineering, Not Just Design
                  </h2>
                </div>
                <p className="text-foreground/70 mb-6">
                  One of the strongest pillars of AVYRA is its engineering-first approach. Design is important, but without strong structural integrity, even the most beautiful interiors fail over time.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Material Science",
                    "Structural Strength",
                    "Moisture Resistance",
                    "Heat Resistance",
                    "Load-Bearing Capacity",
                    "Precision Manufacturing",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-foreground/70 mt-6">
                  This is why AVYRA specializes in <span className="text-primary font-semibold">stainless steel kitchens, aluminium kitchens, and engineered interior solutions</span>, which outperform conventional wooden interiors in Indian conditions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modern Lifestyles Section */}
        <section className="py-8 bg-card relative">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
                Inspired by Modern Lifestyles
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg max-w-3xl mx-auto">
                Today's homeowners demand more. They want spaces that adapt to their lifestyle, support efficiency, and maintain their elegance for years.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: Home, title: "Urban Living Needs" },
                { icon: Layers, title: "Space Optimization" },
                { icon: Target, title: "Minimal Layouts" },
                { icon: Sparkles, title: "Modern Finishes" },
                { icon: Shield, title: "Smart Storage" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-dark p-6 rounded-xl border border-border/30 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold text-sm">{item.title}</h3>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-foreground/70 text-lg max-w-3xl mx-auto mt-10"
            >
              Every AVYRA project begins with understanding how the client lives — cooking habits, storage needs, family size, workflow, and future requirements. This understanding translates into layouts that feel intuitive, spacious, and purposeful.
            </motion.p>
          </div>
        </section>

        {/* Trust & Transparency Section */}
        <section className="py-8 relative">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                    Built on Trust & Transparency
                  </h2>
                </div>
                <p className="text-foreground/70 mb-6">
                  AVYRA believes that trust is built through clarity. From the first consultation to final installation, the brand maintains transparency in everything.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    "Design Discussions",
                    "Material Specifications",
                    "Pricing Structures",
                    "Timelines",
                    "After-Sales Support",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-foreground/70 italic">
                  There are no hidden compromises or shortcuts. Clients know exactly what goes into their home — from the grade of stainless steel to the quality of hardware and finishes used.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src={aboutClientTrust} 
                    alt="AVYRA Client Consultation" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section className="py-8 bg-card relative">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
                  Quality Without Compromise
                </h2>
                <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                  Quality is not an add-on at AVYRA — it is the foundation. Every product and project goes through strict quality checks.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Wrench, title: "Precision Fabrication" },
                    { icon: Sparkles, title: "Smooth Finishes" },
                    { icon: Target, title: "Perfect Alignment" },
                    { icon: Shield, title: "Durable Fittings" },
                    { icon: Award, title: "Flawless Installation" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70 text-sm">{item.title}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-foreground/70 italic">
                  AVYRA sources premium-grade materials and works with advanced manufacturing techniques to ensure consistency across projects. This attention to detail ensures that AVYRA interiors age gracefully, retaining both strength and beauty over time.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src={aboutQualityControl} 
                    alt="AVYRA Quality Control Process" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-primary/40" />
                <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-primary/40" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section className="py-8 relative">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src={aboutCustomization} 
                    alt="AVYRA Customization Options" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
                  Customization as a Standard
                </h2>
                <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                  No two homes are the same — and AVYRA treats customization not as a luxury, but as a standard offering.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    "Layouts",
                    "Finishes",
                    "Storage Modules",
                    "Hardware Options",
                    "Accessories",
                    "Functional Add-ons",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-foreground/70 italic">
                  AVYRA's design team collaborates closely with clients to translate ideas into practical, elegant solutions that fit both lifestyle and budget.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Indian Conditions Section */}
        <section className="py-8 bg-card relative">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-6">
                  Designed for Indian Conditions
                </h2>
                <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                  Many interior solutions fail because they are not designed for Indian environmental conditions. AVYRA takes this seriously.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Droplets, title: "High Humidity" },
                    { icon: Sparkles, title: "Temperature Variations" },
                    { icon: Wrench, title: "Heavy Daily Usage" },
                    { icon: Home, title: "Indian Cooking Styles" },
                    { icon: Shield, title: "Long-term Durability" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/70 text-sm">{item.title}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-foreground/70 italic">
                  This is why AVYRA emphasizes <span className="text-primary font-semibold">stainless steel and aluminium solutions</span> that outperform traditional materials and ensure hygiene, safety, and strength.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src={aboutIndianKitchen} 
                    alt="Modern Indian Kitchen Design" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-8 relative">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden border border-primary/20">
                  <img 
                    src={aboutVision} 
                    alt="AVYRA Vision for the Future" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                    A Vision for the Future
                  </h2>
                </div>
                <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                  AVYRA is continuously evolving. The brand invests in innovation, research, and design development to stay ahead of industry trends while staying true to its core values.
                </p>
                <p className="text-foreground/70 leading-relaxed text-lg mb-8">
                  The long-term vision is to become a trusted name in premium, engineered living spaces across India — known for integrity, quality, and thoughtful design.
                </p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xl font-serif text-primary italic"
                >
                  "AVYRA does not chase volume. It focuses on excellence."
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer className="relative z-10" />
    </div>
  );
};

export default About;
