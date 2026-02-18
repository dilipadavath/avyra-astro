import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import heroKitchen from "@/assets/hero-kitchen-1.jpg?url";
import heroKitchen3 from "@/assets/hero-kitchen-3.jpg?url";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Understanding lifestyle, space, budget, and expectations.",
  },
  {
    number: "02",
    title: "Site Visit & Measurements",
    description: "Detailed site inspection and technical evaluation.",
  },
  {
    number: "03",
    title: "Design & Proposal",
    description: "Layouts, material selection, and transparent costing.",
  },
  {
    number: "04",
    title: "Manufacturing",
    description: "Precision manufacturing using stainless steel & aluminium systems.",
  },
  {
    number: "05",
    title: "Site Preparation & Installation",
    description: "Professional installation with high-quality finishing.",
  },
  {
    number: "06",
    title: "After-Sales Support",
    description: "Quality checks, handover, warranty & ongoing support.",
  },
];

const ProcessSection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(0); // Default to first step

  return (
    <section className="py-8 bg-[#0a0a0a] overflow-hidden relative w-full">
      <div className="container-premium w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 w-full"
        >
          <h2 className="font-serif heading-subsection text-gold-gradient mb-1 tracking-wide">
            Our Process
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            From concept to completion, every step is designed for excellence.
          </p>
        </motion.div>

        {/* Mobile Layout (< md) */}
        <div className="md:hidden space-y-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex gap-4">
                {/* Left: Diamond and Line */}
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rotate-45 bg-primary shadow-[0_0_12px_rgba(201,162,39,0.5)]" />
                  {index < processSteps.length - 1 && (
                    <div className="w-[1px] h-full bg-[#333] mt-2" />
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex-1 pb-6">
                  <span className="text-primary text-xs italic">{step.number}</span>
                  <h3 className="text-primary text-sm font-semibold uppercase tracking-widest mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-4 border border-[#333] rounded-sm"
                onClick={() => setHoveredStep(index)}
              >
                {/* Diamond */}
                <div className="absolute -top-3 left-4">
                  <div
                    className={`w-5 h-5 rotate-45 transition-all duration-300 ${hoveredStep === index
                        ? 'bg-primary shadow-[0_0_12px_rgba(201,162,39,0.5)]'
                        : 'bg-[#444]'
                      }`}
                  />
                </div>

                <div className="pt-4">
                  <span className={`text-xs italic transition-colors ${hoveredStep === index ? 'text-primary' : 'text-[#666]'}`}>
                    {step.number}
                  </span>
                  <h3 className={`text-sm font-semibold uppercase tracking-widest mt-2 mb-2 transition-colors ${hoveredStep === index ? 'text-primary' : 'text-foreground'
                    }`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (lg+) */}
        <div className="hidden lg:block">
          {/* Timeline with Diamonds */}
          <div className="relative mb-0">
            {/* Horizontal Line */}
            <div className="absolute top-[11px] left-0 right-0 h-[1px] bg-[#333]" />

            {/* Diamond Markers Row */}
            <div className="relative grid grid-cols-6">
              {processSteps.map((step, index) => {
                const isActive = hoveredStep === index;

                return (
                  <div
                    key={step.number}
                    className="flex flex-col items-center cursor-pointer group"
                    onMouseEnter={() => setHoveredStep(index)}
                  >
                    {/* Diamond */}
                    <div
                      className={`
                        w-[22px] h-[22px] rotate-45 transition-all duration-300 z-10
                        ${isActive
                          ? 'bg-primary shadow-[0_0_15px_rgba(201,162,39,0.6)]'
                          : 'bg-[#444] group-hover:bg-primary/50'
                        }
                      `}
                    />

                    {/* Step Number */}
                    <span
                      className={`
                        mt-3 text-sm transition-colors duration-300
                        ${isActive ? 'text-primary' : 'text-[#666]'}
                      `}
                    >
                      {step.number}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Grid - positioned below timeline */}
          <div className="relative grid grid-cols-6 gap-x-6 mt-4 min-h-[180px]">
            {processSteps.map((step, index) => {
              const isActive = hoveredStep === index;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="cursor-pointer relative z-10"
                  onMouseEnter={() => setHoveredStep(index)}
                >
                  {/* Active Step with Image Background */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 -inset-x-2 -top-2"
                        style={{
                          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), 50% 100%, 0 calc(100% - 20px))',
                          paddingBottom: '20px'
                        }}
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            src={index % 2 === 0 ? heroKitchen : heroKitchen3}
                            alt="Process step"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/70" />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
                        </div>

                        {/* Gold Corner Decorations */}
                        <div className="absolute top-0 left-0 w-6 h-6">
                          <div className="absolute top-0 left-0 w-full h-[2px] bg-primary" />
                          <div className="absolute top-0 left-0 w-[2px] h-full bg-primary" />
                        </div>
                        <div className="absolute top-0 right-0 w-6 h-6">
                          <div className="absolute top-0 right-0 w-full h-[2px] bg-primary" />
                          <div className="absolute top-0 right-0 w-[2px] h-full bg-primary" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-1/2 h-[2px] bg-primary origin-bottom-left"
                          style={{ transform: 'rotate(-14deg)', transformOrigin: 'bottom right', bottom: '10px' }} />
                        <div className="absolute bottom-0 right-0 left-1/2 h-[2px] bg-primary origin-bottom-right"
                          style={{ transform: 'rotate(14deg)', transformOrigin: 'bottom left', bottom: '10px' }} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Content */}
                  <div className={`relative z-10 p-2 ${isActive ? 'pt-3' : ''}`}>
                    <span className={`text-xs italic transition-colors duration-300 ${isActive ? 'text-primary' : 'text-[#666]'}`}>
                      {step.number}
                    </span>
                    <h3
                      className={`text-[0.8rem] font-semibold leading-tight mt-2 mb-3 uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-primary' : 'text-foreground'
                        }`}
                    >
                      {step.title}
                    </h3>

                    <p className={`text-xs xl:text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;