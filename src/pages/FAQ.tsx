import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroKitchen from "@/assets/hero-kitchen-1.jpg";

const faqs = [
  {
    question: "What materials do you use for kitchen and wardrobe interiors?",
    answer:
      "We specialize in Stainless Steel 304 and premium Aluminium for all our interior solutions. SS304 is food-safe, rust-proof, and highly durable, while Aluminium offers a lightweight, corrosion-resistant alternative with a modern finish.",
  },
  {
    question: "How long does the installation process take?",
    answer:
      "The timeline varies based on project scope. A standard modular kitchen typically takes 15-25 working days from design approval to installation. Wardrobe installations range from 7-15 days. We provide a detailed timeline during the design proposal phase.",
  },
  {
    question: "Do you offer customization for unique spaces?",
    answer:
      "Absolutely. Every project is tailored to your specific requirements. We conduct detailed site measurements and work closely with you to design solutions that maximize space efficiency while matching your aesthetic preferences.",
  },
  {
    question: "What is included in your pricing?",
    answer:
      "Our transparent pricing includes design consultation, materials, manufacturing, delivery, and professional installation. We provide itemized quotations so you understand exactly what you're paying for. There are no hidden costs.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "We offer a comprehensive 10-year warranty on our stainless steel and aluminium structures. This covers manufacturing defects, structural integrity, and surface finish. Hardware components carry their respective manufacturer warranties.",
  },
  {
    question: "How do I get started with a consultation?",
    answer:
      "Simply fill out our consultation form or contact us directly via phone or WhatsApp. We'll schedule a free initial consultation to understand your requirements, followed by a site visit for detailed measurements and technical evaluation.",
  },
  {
    question: "Do you work in areas outside your primary location?",
    answer:
      "Yes, we undertake projects across the region. For locations outside our primary service area, additional logistics charges may apply. Contact us with your project location for specific details.",
  },
  {
    question: "Can I see samples of materials before finalizing?",
    answer:
      "Of course. During the design phase, we provide physical samples of all materials, finishes, and hardware options. You can also visit our showroom to experience the quality firsthand before making any decisions.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>FAQs | AVYRA - SS 304 Stainless Steel Kitchens & Aluminium Wardrobes</title>
        <meta
          name="description"
          content="Find answers to common questions about AVYRA's premium SS 304 stainless steel kitchens and aluminium wardrobes. Learn about materials, installation, pricing, and warranty."
        />
        <link rel="canonical" href="https://www.avyra.co.in/faq" />
      </Helmet>

      <Header />

      <main className="flex-1 relative flex items-center justify-center pt-28 md:pt-32 pb-12 md:pb-16">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroKitchen})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-4xl mx-4 bg-charcoal/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-border/30"
        >
          <div className="p-8 md:p-10">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gold-gradient mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground mb-8">
              Find answers to common questions about our services, materials, and process.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[hsl(0_0%_12%)] px-6 border border-border/50 rounded-lg"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                    <span className="font-serif text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="text-muted-foreground mt-8 text-center">
  Everything you need to know about our materials, services, and process.
</p>

          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
