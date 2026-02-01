import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import MaterialsSection from "@/components/sections/MaterialsSection";
import WhatWeCreateSection from "@/components/sections/WhatWeCreateSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        {/* ===============================
            PRIMARY SEO
        =============================== */}
        <title>
          AVYRA | SS 304 Stainless Steel Honeycomb Kitchens & Aluminium Wardrobes in Hyderabad
        </title>

        <meta
          name="description"
          content="Premium SS 304 stainless steel honeycomb kitchens and aluminium wardrobes in Hyderabad, Telangana, Andhra Pradesh & South India. Durable, rust-proof interior solutions by AVYRA."
        />

        <meta
          name="keywords"
          content="SS 304 kitchen, SS 304 honeycomb kitchen, stainless steel kitchen Hyderabad, stainless steel modular kitchen, aluminium kitchen India, stainless steel wardrobe, premium modular kitchens India"
        />

        <link rel="canonical" href="https://www.avyra.co.in/" />

        {/* ===============================
            OPEN GRAPH
        =============================== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.avyra.co.in/" />
        <meta
          property="og:title"
          content="AVYRA | SS 304 Stainless Steel & Aluminium Kitchens & Wardrobes"
        />
        <meta
          property="og:description"
          content="Premium SS 304 stainless steel honeycomb kitchens and aluminium wardrobes in Hyderabad, Telangana & South India."
        />
        <meta property="og:site_name" content="AVYRA" />
        <meta
          property="og:image"
          content="https://www.avyra.co.in/images/og-avyra.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ===============================
            TWITTER
        =============================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AVYRA | SS 304 Stainless Steel & Aluminium Kitchens & Wardrobes"
        />
        <meta
          name="twitter:description"
          content="Premium stainless steel and aluminium modular kitchens & wardrobes engineered for durability and elegance."
        />
        <meta
          name="twitter:image"
          content="https://www.avyra.co.in/images/og-avyra.jpg"
        />

        {/* ===============================
            STRUCTURED DATA
        =============================== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AVYRA",
            "url": "https://www.avyra.co.in",
            "logo": "https://www.avyra.co.in/images/logo.png",
            "description": "Premium SS 304 stainless steel honeycomb kitchens and aluminium wardrobes in Hyderabad.",
            "telephone": "+91-9689684222",
            "email": "info@avyra.co.in",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "addressCountry": "IN"
            },
            "areaServed": [
              "Hyderabad",
              "Vijayawada",
              "Telangana",
              "Andhra Pradesh",
              "South India"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9689684222",
              "contactType": "Customer Support"
            }
          }
          )}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* SEO-safe hidden H1 */}
        <h1 className="sr-only">
          AVYRA – Premium SS 304 Stainless Steel & Aluminium Kitchens and
          Wardrobes in Hyderabad, Telangana & South India
        </h1>

        <HeroSection />
        <ProcessSection />
        <MaterialsSection />
        <WhatWeCreateSection />

      </main>

      <Footer />
    </div>
  );
};

export default Index;
