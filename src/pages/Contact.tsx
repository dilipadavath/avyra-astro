import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Instagram } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroKitchen from "@/assets/hero-kitchen-1.jpg";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const inputClasses =
    "bg-[hsl(0_0%_12%)] border border-border text-foreground placeholder:text-muted-foreground rounded-md focus:border-border focus:ring-0 focus:outline-none";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>
          Contact AVYRA | SS 304 Kitchen & Wardrobe Consultation in Hyderabad
        </title>
        <meta
          name="description"
          content="Contact AVYRA to book a consultation for premium SS 304 stainless steel honeycomb kitchens and aluminium wardrobes in Hyderabad, Telangana, Andhra Pradesh & South India. Call +91 968 968 4222."
        />
        <link rel="canonical" href="https://www.avyra.co.in/contact" />
      </Helmet>

      <Header />

      <main className="flex-1 relative flex items-center justify-center py-20 md:py-24">
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

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className={`${inputClasses} h-12`}
                />

                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  required
                  className={`${inputClasses} h-12`}
                />

                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className={`${inputClasses} h-12`}
                />

                <Select
                  value={formData.subject}
                  onValueChange={(value) =>
                    setFormData({ ...formData, subject: value })
                  }
                >
                  <SelectTrigger
                    className={`${inputClasses} h-12 data-[placeholder]:text-muted-foreground`}
                  >
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>

                  <SelectContent className="bg-[hsl(0_0%_12%)] border-border">
                    <SelectItem value="general">General Enquiry</SelectItem>
                    <SelectItem value="design">
                      Design Consultation
                    </SelectItem>
                    <SelectItem value="service">Service Request</SelectItem>
                    <SelectItem value="business">
                      Business Collaboration
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-gold px-8 py-3 h-auto font-medium"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>

            {/* Right: Info */}
            <div className="p-8 md:p-10 bg-charcoal-light/50 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-gradient mb-4">
                Stay Connected
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Ready to transform your space with premium SS 304 stainless steel
                kitchens or aluminium wardrobes? Book a consultation and let's
                create something extraordinary together.
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

              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:text-primary hover:border-primary transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
