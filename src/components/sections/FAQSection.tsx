import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section text-gold-gradient mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, materials, and process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
  );
};

export default FAQSection;
