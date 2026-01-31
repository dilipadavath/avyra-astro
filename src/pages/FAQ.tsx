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
    question: "What materials are used for AVYRA kitchens?",
    answer:
      "AVYRA kitchens are built using Stainless Steel 304 and Aluminium structures, ensuring superior strength, hygiene, durability, and long-term performance compared to conventional wooden kitchens.",
  },
  {
    question: "What countertop options are available for AVYRA kitchens?",
    answer:
      "AVYRA offers premium kitchen countertop options including natural stone, granite, quartz, sintered stone, and other advanced engineered stone surfaces, allowing customers to choose based on usage, aesthetics, and budget.",
  },
  {
    question: "What door options are available for AVYRA wardrobes?",
    answer:
      "AVYRA wardrobes can be customized with lacquered glass, sintered stone, leather-finished doors, fabric-finished doors, and aluminium profile sliding or hinged door systems.",
  },
  {
    question: "Are AVYRA wardrobes suitable for humid climates?",
    answer:
      "Yes. AVYRA wardrobes made using Stainless Steel 304 and Aluminium are resistant to moisture, humidity, termites, and fungus, making them ideal for humid and coastal regions.",
  },
  {
    question: "What is sintered stone and why does AVYRA use it?",
    answer:
      "Sintered stone is an advanced engineered surface known for its heat resistance, scratch resistance, stain resistance, and durability. AVYRA uses it for its premium appearance and long-lasting performance.",
  },
  {
    question: "Does AVYRA provide complete interior solutions?",
    answer:
      "Yes. AVYRA provides complete interior solutions including kitchens, wardrobes, false ceilings, lighting, storage units, TV units, wall paneling, and other customized interior works.",
  },
  {
    question: "Can AVYRA customize interiors as per my home and budget?",
    answer:
      "Absolutely. AVYRA offers fully customized interior solutions tailored to your home layout, lifestyle requirements, design preferences, and budget, without compromising on quality.",
  },
  {
    question: "What warranty does AVYRA provide?",
    answer:
      "AVYRA provides a lifetime warranty on Stainless Steel and Aluminium structures. Warranty for other materials and finishes is offered as per the respective manufacturing company's warranty terms.",
  },
  {
    question: "Does AVYRA provide after-sales support?",
    answer:
      "Yes. AVYRA provides reliable after-sales support to ensure long-term performance, customer satisfaction, and peace of mind after project completion.",
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
