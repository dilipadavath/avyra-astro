import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import heroKitchen from "@/assets/hero-kitchen-1.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  mobile: z.string().trim().min(1, "Mobile number is required").regex(/^[+]?[\d\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Thank you! We'll get back to you soon.");
    form.reset();
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

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className={`${inputClasses} h-12`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Mobile Number"
                            {...field}
                            className={`${inputClasses} h-12`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email Address"
                            {...field}
                            className={`${inputClasses} h-12`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger
                              className={`${inputClasses} h-12 data-[placeholder]:text-muted-foreground`}
                            >
                              <SelectValue placeholder="Select Subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[hsl(0_0%_12%)] border-border">
                            <SelectItem value="general">General Enquiry</SelectItem>
                            <SelectItem value="design">Design Consultation</SelectItem>
                            <SelectItem value="service">Service Request</SelectItem>
                            <SelectItem value="business">Business Collaboration</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Your Message (optional)"
                            {...field}
                            rows={4}
                            className={`${inputClasses} resize-none`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="btn-primary-gold px-8 py-3 h-auto font-medium"
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </Form>
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
