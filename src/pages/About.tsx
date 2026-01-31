import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Compass, ShieldCheck, Settings } from "lucide-react";

// Import images
import teamMeeting from "@/assets/team-meeting.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

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
      <div className="fixed top-[15%] -left-20 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -rotate-6 blur-[1px] pointer-events-none" />
      <div className="fixed top-[25%] -right-20 w-[50%] h-[1.5px] bg-gradient-to-l from-transparent via-primary/40 to-transparent transform rotate-6 blur-[1px] pointer-events-none" />
      <div className="fixed top-[60%] -left-10 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-primary/35 to-transparent transform -rotate-3 pointer-events-none" />
      <div className="fixed top-[75%] -right-10 w-[45%] h-[1.5px] bg-gradient-to-l from-transparent via-primary/45 to-transparent transform rotate-8 blur-[1px] pointer-events-none" />
      
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
        {/* About Us Hero Section */}
        <section className="pt-32 md:pt-40 pb-16 relative">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h1 className="heading-display text-gold-gradient mb-6">
                About Us
              </h1>
              
              {/* Decorative gold line with diamond */}
              <div className="flex items-center gap-4 w-full max-w-xl">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
                <div className="w-3 h-3 rotate-45 border border-primary bg-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About AVYRA Section */}
        <section className="py-16 relative">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-gold-gradient mb-6">
                  About AVYRA
                </h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  AVYRA was founded on a belief: that living spaces should do more than look beautiful — they should 
                  elevate your everyday living experience. We provide refined design solutions marked by precision, quality, 
                  and innovation.
                </p>
              </motion.div>
              
              {/* Right: Image with Gold Frame */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Gold corner frame accents */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/70 rounded-tr-lg z-10" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/70 rounded-bl-lg z-10" />
                
                {/* Additional subtle corner accents */}
                <div className="absolute -top-2 -left-2 w-12 h-12 border-t border-l border-primary/40 z-10" />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b border-r border-primary/40 z-10" />
                
                <div className="relative rounded-lg overflow-hidden border border-primary/30 shadow-[0_8px_32px_rgba(201,162,39,0.15)]">
                  <img 
                    src={teamMeeting} 
                    alt="AVYRA Team Meeting" 
                    className="w-full h-[320px] md:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Decorative Divider with Diamond */}
        <div className="container-premium py-8">
          <div className="flex items-center justify-center gap-4 w-full">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-primary/60" />
            <div className="w-2 h-2 rotate-45 bg-primary/60" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="w-2 h-2 rotate-45 bg-primary/60" />
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-primary/40 to-primary/60" />
          </div>
        </div>

        {/* The AVYRA Team Section */}
        <section className="py-16 relative">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-gold-gradient mb-6">
                  The AVYRA Team
                </h2>
                <p className="text-foreground/80 leading-relaxed text-lg mb-8">
                  Driven by passion and expertise, our team of designers, engineers, and project managers collaborate seamlessly 
                  to transform visions into elegant and functional spaces.
                </p>
                
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 btn-outline-gold rounded-md group"
                >
                  Meet The Team
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </motion.div>
              
              {/* Right: Image with Gold Frame */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Gold corner frame accents */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/70 rounded-tr-lg z-10" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/70 rounded-bl-lg z-10" />
                
                {/* Additional subtle corner accents */}
                <div className="absolute -top-2 -left-2 w-12 h-12 border-t border-l border-primary/40 z-10" />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b border-r border-primary/40 z-10" />
                
                <div className="relative rounded-lg overflow-hidden border border-primary/30 shadow-[0_8px_32px_rgba(201,162,39,0.15)]">
                  <img 
                    src={teamCollaboration} 
                    alt="AVYRA Team Collaboration" 
                    className="w-full h-[320px] md:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Makes AVYRA Different Section */}
        <section className="py-20 md:py-28 relative">
          {/* Decorative elements */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rotate-45 bg-primary/50" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary/50" />
          </div>
          
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-gold-gradient mb-4">
                What Makes AVYRA Different
              </h2>
              
              {/* Decorative line under heading */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-1.5 h-1.5 rotate-45 bg-primary/50" />
                <div className="w-2 h-2 rotate-45 bg-primary" />
                <div className="w-1.5 h-1.5 rotate-45 bg-primary/50" />
              </div>
            </motion.div>

            {/* Three Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Precision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-primary/40 flex items-center justify-center bg-primary/10">
                    <Compass className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
                  Precision
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Engineered solutions that are durable and meticulously crafted.
                </p>
              </motion.div>

              {/* Transparency Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-primary/40 flex items-center justify-center bg-primary/10">
                    <ShieldCheck className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
                  Transparency
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Honest processes with clear pricing and reliable timelines.
                </p>
              </motion.div>

              {/* Customization Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-primary/40 flex items-center justify-center bg-primary/10">
                    <Settings className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
                  Customization
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Tailored designs that cater to your unique lifestyle & needs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default About;
