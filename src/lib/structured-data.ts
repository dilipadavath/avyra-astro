// Enterprise-level Structured Data (Schema.org) for Google Rich Results
// This enables Knowledge Graph, Rich Snippets, and enhanced search appearance

const BASE_URL = "https://www.avyra.co.in/";

export interface StructuredDataConfig {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

// Main Organization Schema - For Knowledge Graph
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ManufacturingCompany"],
  "@id": `${BASE_URL}#organization`,
  name: "AVYRA",
  alternateName: "AVYRA Interiors",
  description: "Premium SS 304 stainless steel honeycomb kitchens and aluminium wardrobes manufacturer and supplier in Hyderabad, Telangana & South India.",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}#logo`,
    url: `${BASE_URL}logo.png`,
    width: "200",
    height: "80",
    caption: "AVYRA Logo"
  },
  image: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}#image`,
    url: `${BASE_URL}og-avyra.jpg`,
    width: "1200",
    height: "630",
    caption: "AVYRA - Premium Kitchen & Wardrobe Solutions"
  },
  telephone: "+91-9689684222",
  email: "info@avyra.co.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
    postalCode: "500089"
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "17.3850",
      longitude: "78.4867"
    },
    geoRadius: "100"
  },
  serviceArea: [
    "Hyderabad",
    "Vijayawada",
    "Telangana",
    "Andhra Pradesh",
    "South India"
  ],
  knowsAbout: [
    "Stainless Steel Kitchens",
    "SS 304 Honeycomb Kitchens",
    "Aluminium Wardrobes",
    "Modular Kitchens",
    "Interior Design",
    "Home Furnishings"
  ],
  sameAs: [
    "https://www.instagram.com/avyra.interiors",
    "https://www.facebook.com/avyra.interiors"
  ]
});

// Home Page Schema
export const getHomePageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}#website`,
  url: BASE_URL,
  name: "AVYRA",
  description: "Premium SS 304 stainless steel honeycomb kitchens and aluminium wardrobes in Hyderabad, South India.",
  publisher: getOrganizationSchema(),
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}?s={search_term_string}`
    },
    query: "required name=search_term_string"
  }
});

// Kitchen Service Schema
export const getKitchenServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SS 304 Stainless Steel Honeycomb Kitchens",
  serviceType: "Kitchen Manufacturing & Installation",
  description: "Premium SS 304 stainless steel honeycomb kitchen design, manufacturing, and installation. Rust-proof, durable, and hygienic kitchens engineered for Indian homes.",
  provider: getOrganizationSchema(),
  areaServed: [
    "Hyderabad",
    "Vijayawada",
    "Telangana",
    "Andhra Pradesh",
    "South India"
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${BASE_URL}kitchen`,
    availableLanguage: "English"
  }
});

// Wardrobe Service Schema
export const getWardrobeServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Premium Aluminium Wardrobes",
  serviceType: "Wardrobe Manufacturing & Installation",
  description: "Premium aluminium wardrobe design, manufacturing, and installation. Rust-proof, moisture-resistant, and customizable wardrobe solutions for modern homes.",
  provider: getOrganizationSchema(),
  areaServed: [
    "Hyderabad",
    "Vijayawada",
    "Telangana",
    "Andhra Pradesh",
    "South India"
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${BASE_URL}wardrobes`,
    availableLanguage: "English"
  }
});

// Product/Gallery Schema
export const getGallerySchema = () => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AVYRA Project Gallery",
  url: `${BASE_URL}gallery`,
  description: "Gallery of premium SS 304 stainless steel kitchens and aluminium wardrobes. View real projects from Hyderabad and South India.",
  publisher: getOrganizationSchema(),
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gallery",
        item: `${BASE_URL}gallery`
      }
    ]
  }
});

// About Page Schema
export const getAboutPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About AVYRA",
  url: `${BASE_URL}about`,
  description: "Learn about AVYRA's commitment to premium, durable, and rust-proof interior solutions. Expertise in SS 304 stainless steel kitchens and aluminium wardrobes.",
  publisher: getOrganizationSchema()
});

// Contact Page Schema
export const getContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact AVYRA",
  url: `${BASE_URL}contact`,
  description: "Get in touch with AVYRA for premium SS 304 stainless steel kitchens and aluminium wardrobes. Call +91-9689684222 or send us a message.",
  mainEntity: getOrganizationSchema()
});

// FAQ Page Schema
export const getFAQPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: "AVYRA FAQ",
  url: `${BASE_URL}faq`,
  description: "Find answers to common questions about AVYRA's SS 304 stainless steel kitchens and aluminium wardrobes, materials, warranty, and customization options.",
  mainEntity: [
    {
      "@type": "Question",
      name: "What materials are used for AVYRA kitchens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AVYRA kitchens are built using Stainless Steel 304 and Aluminium structures, ensuring superior strength, hygiene, durability, and long-term performance compared to conventional wooden kitchens."
      }
    },
    {
      "@type": "Question",
      name: "Are AVYRA wardrobes suitable for humid climates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AVYRA wardrobes made using Stainless Steel 304 and Aluminium are resistant to moisture, humidity, termites, and fungus, making them ideal for humid and coastal regions."
      }
    },
    {
      "@type": "Question",
      name: "What warranty does AVYRA provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AVYRA provides a lifetime warranty on Stainless Steel and Aluminium structures. Warranty for other materials and finishes is offered as per the respective manufacturing company's warranty terms."
      }
    },
    {
      "@type": "Question",
      name: "Does AVYRA provide after-sales support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AVYRA provides reliable after-sales support to ensure long-term performance, customer satisfaction, and peace of mind after project completion."
      }
    }
  ]
});

// Blog/Blog Post Schema
export const getBlogPostSchema = (config: StructuredDataConfig) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: config.title,
  description: config.description,
  image: config.image || `${BASE_URL}og-avyra.jpg`,
  datePublished: config.datePublished,
  dateModified: config.dateModified,
  author: {
    "@type": "Organization",
    name: "AVYRA",
    url: BASE_URL
  },
  publisher: getOrganizationSchema(),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": config.url
  }
});

// Blog List Page Schema
export const getBlogListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "AVYRA Blog",
  url: `${BASE_URL}blog`,
  description: "Fresh ideas and expert advice on modular kitchens, wardrobes, and home design. Tips, guides, and inspiration for your modern Indian home.",
  author: {
    "@type": "Organization",
    name: "AVYRA",
    url: BASE_URL
  }
});

export const getCompleteHomeSchema = () => {
  const organization = getOrganizationSchema();
  const website = getHomePageSchema();
  
  return [
    {
      "@context": "https://schema.org",
      "@graph": [
        organization,
        website,
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: BASE_URL
            }
          ]
        }
      ]
    }
  ][0];
};

export default {
  getOrganizationSchema,
  getHomePageSchema,
  getKitchenServiceSchema,
  getWardrobeServiceSchema,
  getGallerySchema,
  getAboutPageSchema,
  getContactPageSchema,
  getFAQPageSchema,
  getBlogPostSchema,
  getBlogListSchema,
  getCompleteHomeSchema
};
