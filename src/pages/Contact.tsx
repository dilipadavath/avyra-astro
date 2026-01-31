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
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", mobile: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Contact AVYRA | SS 304 Kitchen & Wardrobe Consultation in Hyderabad</title>
        <meta
          name="description"
          content="Contact AVYRA to book a consultation for premium SS 304 stainless steel honeycomb kitchens and aluminium wardrobes in Hyderabad, Telangana, Andhra Pradesh & South India. Call +91 968 968 4222."
        />
        <link rel="canonical" href="https://www.avyra.co.in/contact" />
      </Helmet>

      <Header />

      <main className="flex-1 relative flex items-center justify-center py-20 md:py-24">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroKitchen})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Form */}
            <div className="p-8 md:p-10">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8">
                Get In Touch
              </h1>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 h-12 rounded-md focus:border-primary"
                />
                
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 h-12 rounded-md focus:border-primary"
                />
                
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 h-12 rounded-md focus:border-primary"
                />
                
                <Select 
                  value={formData.subject} 
                  onValueChange={(value) => setFormData({ ...formData, subject: value })}
                >
                  <SelectTrigger className="bg-white border-gray-300 text-gray-900 h-12 rounded-md focus:border-primary data-[placeholder]:text-gray-500">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-300">
                    <SelectItem value="general" className="text-gray-900 focus:bg-primary focus:text-white">General Enquiry</SelectItem>
                    <SelectItem value="design" className="text-gray-900 focus:bg-primary focus:text-white">Design Consultation</SelectItem>
                    <SelectItem value="service" className="text-gray-900 focus:bg-primary focus:text-white">Service Request</SelectItem>
                    <SelectItem value="business" className="text-gray-900 focus:bg-primary focus:text-white">Business Collaboration</SelectItem>
                    <SelectItem value="other" className="text-gray-900 focus:bg-primary focus:text-white">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-md resize-none focus:border-primary"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 h-auto font-medium"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="p-8 md:p-10 bg-gray-50 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                Stay Connected
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                Ready to transform your space with premium SS 304 stainless steel kitchens or aluminium wardrobes? 
                Book a consultation and let's create something extraordinary together in Hyderabad, Vijayawada, 
                Telangana & Andhra Pradesh.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="tel:+919689684222"
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 968 968 4222</span>
                </a>

                <a
                  href="mailto:support@avyra.co.in"
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>support@avyra.co.in</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919689684222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
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
