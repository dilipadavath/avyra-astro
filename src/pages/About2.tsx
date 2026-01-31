import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Compass, ShieldCheck, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About2 = () => {
  const differentiators = [
    {
      icon: Compass,
      title: "Precision",
      description: "Engineered solutions that are durable and meticulously crafted."
    },
    {
      icon: ShieldCheck,
      title: "Transparency",
      description: "Honest processes with clear pricing and reliable timelines."
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Tailored designs that cater to your unique lifestyle & needs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | AVYRA - Living Redefined</title>
        <meta name="description" content="AVYRA is a design-led living solutions brand that brings together aesthetics, durability, functionality, and innovation. Discover our philosophy of Living Redefined." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen relative overflow-hidden">
        {/* Rich marble texture background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(139, 90, 43, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(139, 90, 43, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(80, 50, 30, 0.1) 0%, transparent 70%),
              linear-gradient(180deg, hsl(0 0% 6%) 0%, hsl(0 0% 8%) 50%, hsl(0 0% 6%) 100%)
            `
          }}
        />
        
        {/* Marble veining texture */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='marble'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='5' seed='5' stitchTiles='stitch'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='80'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23marble)' fill='%23201510'/%3E%3C/svg%3E")`,
            backgroundSize: '600px 600px',
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Gold dust particles effect */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 10% 20%, rgba(201, 162, 39, 0.8) 50%, transparent 50%),
              radial-gradient(1px 1px at 30% 60%, rgba(201, 162, 39, 0.6) 50%, transparent 50%),
              radial-gradient(1.5px 1.5px at 50% 30%, rgba(201, 162, 39, 0.7) 50%, transparent 50%),
              radial-gradient(1px 1px at 70% 80%, rgba(201, 162, 39, 0.5) 50%, transparent 50%),
              radial-gradient(1px 1px at 90% 40%, rgba(201, 162, 39, 0.6) 50%, transparent 50%),
              radial-gradient(1.5px 1.5px at 20% 90%, rgba(201, 162, 39, 0.4) 50%, transparent 50%),
              radial-gradient(1px 1px at 80% 10%, rgba(201, 162, 39, 0.7) 50%, transparent 50%)
            `,
            backgroundSize: '400px 400px'
          }}
        />
        
        {/* Sweeping gold light streaks */}
        <div className="absolute top-20 -left-20 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent transform -rotate-12 blur-[1px]" />
        <div className="absolute top-40 -right-20 w-[50%] h-[1px] bg-gradient-to-l from-transparent via-primary/40 to-transparent transform rotate-6" />
        <div className="absolute top-[30%] -left-10 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -rotate-3" />
        <div className="absolute top-[60%] -right-10 w-[35%] h-[1px] bg-gradient-to-l from-transparent via-primary/50 to-transparent transform rotate-8" />
        <div className="absolute top-[80%] -left-20 w-[45%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent transform -rotate-6" />
        
        {/* Section 1: About Us Hero */}
        <section className="relative py-16 md:py-24">
          {/* Diagonal gold accent lines */}
          <div className="absolute top-32 left-0 w-[30%] h-px bg-gradient-to-r from-transparent via-primary to-primary/30 transform -rotate-6 origin-left" />
          <div className="absolute top-48 right-0 w-[20%] h-px bg-gradient-to-l from-transparent via-primary/50 to-primary/20 transform rotate-6 origin-right" />
          
          <div className="container-premium relative z-10">
            {/* About Us Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground italic mb-3">
                About Us
              </h1>
              <div className="flex items-center gap-4">
                <div className="w-full max-w-xs h-px bg-gradient-to-r from-primary via-primary to-primary/30" />
                <div className="w-2 h-2 bg-primary rotate-45 flex-shrink-0" />
              </div>
            </motion.div>

            {/* About AVYRA Section */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-4"
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary italic mb-6">
                  About AVYRA
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  AVYRA was founded on a belief: that living spaces should do more than look beautiful — they should elevate your everyday living experience. We provide refined design solutions marked by precision, quality, and innovation.
                </p>
                
                {/* Diagonal accent below text */}
                <div className="mt-8 w-[60%] h-px bg-gradient-to-r from-primary/50 to-transparent transform -rotate-3" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                {/* Image container with gold corner accents */}
                <div className="relative">
                  {/* Top-right corner accent */}
                  <div className="absolute -top-3 -right-3 w-24 h-24 z-10">
                    <div className="absolute top-0 right-0 w-full h-px bg-primary" />
                    <div className="absolute top-0 right-0 h-full w-px bg-primary" />
                  </div>
                  
                  {/* Bottom-left corner accent */}
                  <div className="absolute -bottom-3 -left-3 w-24 h-24 z-10">
                    <div className="absolute bottom-0 left-0 w-full h-px bg-primary" />
                    <div className="absolute bottom-0 left-0 h-full w-px bg-primary" />
                  </div>
                  
                  {/* Inner gold border */}
                  <div className="absolute inset-0 border border-primary/40 rounded-sm" />
                  
                  <div className="relative overflow-hidden rounded-sm">
                    <img 
                      src="/placeholder.svg" 
                      alt="AVYRA Office with team" 
                      className="w-full aspect-[16/10] object-cover"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Diamond Divider */}
        <div className="relative py-8">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="flex justify-center">
            <div className="w-4 h-4 bg-background border border-primary/50 rotate-45 relative z-10" />
          </div>
        </div>

        {/* Section 2: The AVYRA Team */}
        <section className="relative py-16 md:py-20">
          {/* Decorative diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/20 via-transparent to-primary/10" />
          
          <div className="container-premium relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary italic mb-6">
                  The AVYRA Team
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base mb-8">
                  Driven by passion and expertise, our team of designers, engineers, and project managers collaborate seamlessly to transform visions into elegant and functional spaces.
                </p>
                
                <Button 
                  variant="outline" 
                  className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary group"
                >
                  Meet The Team
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Image container with gold corner accents */}
                <div className="relative">
                  {/* Top-right corner accent */}
                  <div className="absolute -top-3 -right-3 w-24 h-24 z-10">
                    <div className="absolute top-0 right-0 w-full h-px bg-primary" />
                    <div className="absolute top-0 right-0 h-full w-px bg-primary" />
                  </div>
                  
                  {/* Bottom-left corner accent */}
                  <div className="absolute -bottom-3 -left-3 w-24 h-24 z-10">
                    <div className="absolute bottom-0 left-0 w-full h-px bg-primary" />
                    <div className="absolute bottom-0 left-0 h-full w-px bg-primary" />
                  </div>
                  
                  {/* Inner gold border */}
                  <div className="absolute inset-0 border border-primary/40 rounded-sm" />
                  
                  <div className="relative overflow-hidden rounded-sm">
                    <img 
                      src="/placeholder.svg" 
                      alt="AVYRA Team meeting" 
                      className="w-full aspect-[16/10] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />
        </section>

        {/* Section 3: What Makes AVYRA Different */}
        <section className="relative py-20 md:py-28">
          {/* Section background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal-dark/60 to-transparent" />
          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold italic">
                <span className="text-primary">What Makes AVYRA</span>{" "}
                <span className="text-foreground">Different</span>
              </h2>
              {/* Diamond accent */}
              <div className="flex justify-center mt-6">
                <div className="w-3 h-3 border border-primary rotate-45" />
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 max-w-5xl mx-auto">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center"
                >
                  {/* Icon with decorative styling */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    {/* Outer decorative ring */}
                    <div className="absolute inset-0 border border-primary/30 rounded-full" />
                    {/* Inner icon container */}
                    <div className="absolute inset-2 border border-primary/50 rounded-full flex items-center justify-center bg-background/50">
                      <item.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                    {/* Small accent dots */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Content Sections */}
        
        {/* Philosophy Section */}
        <section className="relative py-20 md:py-28">
          <div className="container-premium relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary italic mb-6">
                  The Philosophy Behind AVYRA
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The name AVYRA represents strength, refinement, and modern living. From day one, the vision was clear — to redefine how Indian homes are designed and built, especially in kitchens, wardrobes, and functional interior spaces.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="p-6 border border-primary/20 rounded-lg bg-charcoal-dark/30">
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">Living Redefined</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Going beyond surface-level design and focusing on how spaces perform over time. Every cabinet, hinge, surface, and layout is chosen not just for appearance, but for longevity, safety, and ease of use.
                  </p>
                </div>
                <div className="p-6 border border-primary/20 rounded-lg bg-charcoal-dark/30">
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">True Luxury</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    While many brands focus on fast delivery or visual appeal alone, AVYRA believes that true luxury lies in precision, material integrity, and long-term reliability.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Engineering Focus */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal-dark/60 to-transparent" />
          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold italic mb-6">
                <span className="text-primary">Engineering-First</span>{" "}
                <span className="text-foreground">Approach</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Design is important, but without strong structural integrity, even the most beautiful interiors fail over time. AVYRA places equal importance on material science, structural strength, and precision manufacturing.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Material Science", "Structural Strength", "Moisture Resistance", "Heat Resistance", "Load-bearing Capacity", "Precision Manufacturing"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 border border-primary/20 rounded-lg bg-background/30"
                  >
                    <div className="w-2 h-2 bg-primary rotate-45 flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative py-20 md:py-28">
          <div className="container-premium relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="w-3 h-3 border border-primary rotate-45 mx-auto mb-8" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary italic mb-6">
                A Vision for the Future
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AVYRA is continuously evolving. The brand invests in innovation, research, and design development to stay ahead of industry trends while staying true to its core values.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The long-term vision is to become a trusted name in premium, engineered living spaces across India — known for integrity, quality, and thoughtful design.
              </p>
              <p className="text-xl md:text-2xl font-display font-bold text-primary italic">
                "AVYRA does not chase volume. It focuses on excellence."
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About2;
