import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KitchenHero from "@/components/kitchen/KitchenHero";
import KitchenIntro from "@/components/kitchen/KitchenIntro";
import KitchenCarcass from "@/components/kitchen/KitchenCarcass";
import KitchenStrength from "@/components/kitchen/KitchenStrength";
import KitchenHygiene from "@/components/kitchen/KitchenHygiene";
import KitchenAluminium from "@/components/kitchen/KitchenAluminium";
import KitchenDoors from "@/components/kitchen/KitchenDoors";
import KitchenHardware from "@/components/kitchen/KitchenHardware";
import KitchenComparison from "@/components/kitchen/KitchenComparison";
import KitchenTypes from "@/components/kitchen/KitchenTypes";
import KitchenPromise from "@/components/kitchen/KitchenPromise";

const Kitchen = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Rich marble/granite texture background - matching About page */}
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
        {/* PRIMARY SEO */}
        <title>
          SS 304 Stainless Steel Honeycomb Kitchens in Hyderabad | Modular Kitchen Manufacturers | AVYRA
        </title>
        <meta
          name="description"
          content="AVYRA manufactures premium SS 304 & SS 316 stainless steel honeycomb kitchens and aluminium modular kitchens in Hyderabad, Telangana, Andhra Pradesh & South India. Rust-proof, termite-proof, hygienic kitchens built for Indian homes."
        />
        <meta
          name="keywords"
          content="SS 304 stainless steel kitchen Hyderabad, SS 304 honeycomb kitchen manufacturers, stainless steel modular kitchen India, aluminium modular kitchen Telangana, premium kitchen manufacturers Hyderabad"
        />
        <link rel="canonical" href="https://www.avyra.co.in/kitchen" />

        {/* OPEN GRAPH */}
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

        {/* TWITTER */}
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

        {/* STRUCTURED DATA */}
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
      
      <main className="relative z-10">
        <KitchenHero />
        <KitchenIntro />
        <KitchenCarcass />
        <KitchenStrength />
        <KitchenHygiene />
        <KitchenAluminium />
        <KitchenDoors />
        <KitchenHardware />
        <KitchenComparison />
        <KitchenTypes />
        <KitchenPromise />
      </main>

      <Footer />
    </div>
  );
};

export default Kitchen;
