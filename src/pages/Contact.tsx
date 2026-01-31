import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
  {/* ===============================
      PRIMARY SEO
  =============================== */}
  <title>
    Contact AVYRA | SS 304 Kitchen & Wardrobe Consultation in Hyderabad
  </title>

  <meta
    name="description"
    content="Contact AVYRA to book a consultation for premium SS 304 stainless steel honeycomb kitchens and aluminium wardrobes in Hyderabad, Telangana, Andhra Pradesh & South India. Call +91 968 968 4222."
  />

  <meta
    name="keywords"
    content="Contact AVYRA, SS 304 kitchen consultation Hyderabad, stainless steel kitchen manufacturers Hyderabad, aluminium wardrobe consultation, modular kitchen experts Telangana"
  />

  <link rel="canonical" href="https://www.avyra.co.in/contact" />

  {/* ===============================
      OPEN GRAPH
  =============================== */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.avyra.co.in/contact" />
  <meta
    property="og:title"
    content="Contact AVYRA | SS 304 Kitchen & Wardrobe Consultation"
  />
  <meta
    property="og:description"
    content="Book a consultation with AVYRA for premium SS 304 stainless steel kitchens and aluminium wardrobes across Hyderabad & South India."
  />
  <meta property="og:site_name" content="AVYRA" />
  <meta
    property="og:image"
    content="https://www.avyra.co.in/images/og-avyra-contact.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* ===============================
      TWITTER
  =============================== */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Contact AVYRA | Premium Kitchen & Wardrobe Consultation"
  />
  <meta
    name="twitter:description"
    content="Book a consultation for SS 304 stainless steel kitchens and aluminium wardrobes in Hyderabad & South India."
  />
  <meta
    name="twitter:image"
    content="https://www.avyra.co.in/images/og-avyra-contact.jpg"
  />

  {/* ===============================
      STRUCTURED DATA – Contact Page
  =============================== */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact AVYRA",
      url: "https://www.avyra.co.in/contact",
      mainEntity: {
        "@type": "LocalBusiness",
        name: "AVYRA",
        url: "https://www.avyra.co.in",
        logo: "https://www.avyra.co.in/images/logo.png",
        telephone: "+91 968 968 4222",
        email: "support@avyra.co.in",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        areaServed: [
          "Hyderabad",
          "Telangana",
          "Andhra Pradesh",
          "South India",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 968 968 4222",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: ["English", "Telugu"],
        },
      },
    })}
  </script>
</Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="pt-40 md:pt-48 pb-16 bg-charcoal">
          <div className="container-premium text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="heading-display text-gold-gradient mb-4">
                Contact Us
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your space with premium SS 304 stainless steel kitchens or aluminium wardrobes? 
                Book a consultation and let's create something extraordinary together in Hyderabad, Vijayawada, Telangana & Andhra Pradesh.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-subsection text-gold-gradient mb-8">
                  Book Your Kitchen & Wardrobe Consultation
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-premium p-8 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-serif text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you within 24 hours regarding your SS 304 kitchen or aluminium wardrobe enquiry.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-card border-border focus:border-primary h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-card border-border focus:border-primary h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-card border-border focus:border-primary h-12"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell us about your SS 304 kitchen or aluminium wardrobe requirements"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-card border-border focus:border-primary resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-gold w-full group"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Contact Details */}
                <div className="space-y-6">
                  <a
                    href="tel:+919689684222"
                    className="flex items-center gap-4 group p-4 card-premium hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call us for SS 304 Kitchen Enquiries</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        +91 968 968 4222
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:support@avyra.co.in"
                    className="flex items-center gap-4 group p-4 card-premium hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email us</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        support@avyra.co.in
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 card-premium">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Serving</p>
                      <p className="text-foreground font-medium">Hyderabad, Vijayawada, Telangana, Andhra Pradesh & South India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    aria-label="AVYRA Instagram - SS 304 Kitchens & Wardrobes"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/919689684222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    aria-label="WhatsApp AVYRA for Stainless Steel Kitchen Enquiries"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                  <a
                    href="tel:+919689684222"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    aria-label="Call AVYRA for Premium Kitchen Consultation"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
