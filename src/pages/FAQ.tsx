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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQs | AVYRA - SS 304 Stainless Steel Kitchens & Aluminium Wardrobes</title>
        <meta
          name="description"
          content="Find answers to common questions about AVYRA's premium SS 304 stainless steel kitchens and aluminium wardrobes. Learn about materials, installation, pricing, and warranty."
        />
        <link rel="canonical" href="https://www.avyra.co.in/faq" />
      </Helmet>

      <Header />

      <main>
        <section className="section-padding pt-32 md:pt-40 bg-secondary/30">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="heading-section mb-4">
                <span className="text-gold-gradient">Frequently Asked Questions</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our services, materials, and process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="card-premium px-6 border-border/50 rounded-lg"
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
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
