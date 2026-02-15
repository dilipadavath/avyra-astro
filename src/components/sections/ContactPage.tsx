import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, Instagram, CheckCircle, ChevronDown } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen-1.jpg?url";

// Validation Schema
const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  mobile: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/mqelekbw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          mobile: data.mobile,
          email: data.email,
          _subject: `AVYRA Enquiry – ${data.subject || "General Enquiry"}`,
          enquiry_type: data.subject || "General Enquiry",
          message: data.message || "",
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setSubmitError("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("An error occurred. Please try again.");
    }
  };

  const inputClasses =
    "text-sm bg-[hsl(0_0%_12%)] border border-border text-foreground placeholder:text-muted-foreground rounded-md px-4 py-3 focus:border-primary focus:outline-none transition-colors";

  return (
    <div className="w-full">
      <section className="relative w-full min-h-[600px] pt-28 md:pt-32 pb-12 md:pb-16 flex items-center justify-center">
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
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Form */}
            <div className="p-8 md:p-10">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-gold-gradient mb-8">
                Get In Touch
              </h1>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name")}
                    className={`w-full ${inputClasses} ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-2">{errors.name.message}</p>
                  )}
                </div>

                {/* Mobile Field */}
                <div>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Mobile Number"
                    maxLength={10}
                    {...register("mobile")}
                    onInput={(e) => {
                      const input = e.currentTarget;
                      input.value = input.value.replace(/\D/g, "").slice(0, 10);
                    }}
                    className={`w-full ${inputClasses} ${errors.mobile ? "border-destructive" : ""}`}
                  />
                  {errors.mobile && (
                    <p className="text-destructive text-sm mt-2">{errors.mobile.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email")}
                    className={`w-full ${inputClasses} ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-2">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <select
                    {...register("subject")}
                    className={`w-full ${inputClasses} appearance-none pr-10`}
                    style={{ color: "rgb(140, 140, 140)" }}
                  >
                    <option
                      value=""
                      style={{ color: "rgb(140, 140, 140)" }}
                    >
                      Select Subject
                    </option>
                    <option value="General Enquiry" style={{ color: "rgb(229, 231, 235)" }}>
                      General Enquiry
                    </option>
                    <option value="Design Consultation" style={{ color: "rgb(229, 231, 235)" }}>
                      Design Consultation
                    </option>
                    <option value="Service Request" style={{ color: "rgb(229, 231, 235)" }}>
                      Service Request
                    </option>
                    <option value="Business Collaboration" style={{ color: "rgb(229, 231, 235)" }}>
                      Business Collaboration
                    </option>
                    <option value="Other" style={{ color: "rgb(229, 231, 235)" }}>
                      Other
                    </option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    placeholder="We'd love to hear your ideas"
                    rows={4}
                    {...register("message")}
                    className={`w-full ${inputClasses} resize-none`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-sm bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground px-8 py-3 font-medium rounded-md transition-colors"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                {/* Success Message */}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 text-primary mt-4 bg-primary/10 p-3 rounded-md"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">
                        Thank you! Your enquiry has been received. We'll be in touch soon.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-destructive text-sm mt-4 bg-destructive/10 p-3 rounded-md"
                  >
                    {submitError}
                  </motion.div>
                )}
              </form>
            </div>

            {/* Right: Info */}
            <div className="p-8 md:p-10 bg-charcoal-light/50">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-gradient mb-4">
                Stay Connected
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                AVYRA is a premium interior brand specialising in SS 304 stainless steel modular kitchens and wardrobes. We serve homeowners across Telangana and Andhra Pradesh, delivering durable, hygienic, and zero-wood kitchen solutions built for Indian homes.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Transform your home with precision-crafted SS 304 kitchens and aluminium wardrobes. Book a consultation and experience design without compromise.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="tel:+919689684222"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 968 968 4222</span>
                </a>

                <a
                  href="mailto:support@avyra.co.in"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>support@avyra.co.in</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="tel:+919689684222"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label="Call AVYRA for Premium Kitchen Consultation"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/avyra.living/"
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
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;

