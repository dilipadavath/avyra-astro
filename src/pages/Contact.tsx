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

/* ===============================
   VALIDATION SCHEMA
================================ */
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
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

  /* ===============================
     SUBMIT HANDLER
  ================================ */
  const onSubmit = async (data: ContactFormData) => {
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

          // Email subject line
          _subject: `AVYRA Enquiry – ${data.subject}`,

          // Visible in email body
          subject: data.subject,
          message: data.message || "",
        }),
      });

      if (response.ok) {
        toast.success("Thank you! We'll get back to you soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  const inputClasses =
    "bg-[hsl(0_0%_12%)] border border-border text-foreground placeholder:text-muted-foreground rounded-md focus:ring-0";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Contact AVYRA | SS 304 Kitchen & Wardrobe Consultation</title>
      </Helmet>

      <Header />

      <main className="flex-1 relative flex items-center justify-center pt-28 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroKitchen})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-4xl mx-4 bg-charcoal/95 rounded-2xl shadow-2xl border border-border/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* FORM */}
            <div className="p-8 md:p-10">
              <h1 className="text-3xl font-serif font-bold text-gold-gradient mb-8">
                Get In Touch
              </h1>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* NAME */}
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

                  {/* MOBILE */}
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Mobile Number"
                            maxLength={10}
                            {...field}
                            className={`${inputClasses} h-12`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* EMAIL */}
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

                  {/* SUBJECT – FIXED */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger
                              className={`${inputClasses} h-12`}
                            >
                              <SelectValue placeholder="Select Subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="General Enquiry">
                              General Enquiry
                            </SelectItem>
                            <SelectItem value="Design Consultation">
                              Design Consultation
                            </SelectItem>
                            <SelectItem value="Service Request">
                              Service Request
                            </SelectItem>
                            <SelectItem value="Business Collaboration">
                              Business Collaboration
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* MESSAGE */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="We'd love to hear your ideas"
                            rows={4}
                            {...field}
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
                    className="btn-primary-gold px-8 py-3"
                  >
                    {form.formState.isSubmitting
                      ? "Submitting..."
                      : "Submit"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* INFO */}
            <div className="p-8 md:p-10 bg-charcoal-light/50">
              <h2 className="text-3xl font-serif font-bold text-gold-gradient mb-4">
                Stay Connected
              </h2>

              <div className="space-y-4">
                <a
                  href="tel:+919689684222"
                  className="flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 968 968 4222</span>
                </a>

                <a
                  href="mailto:enquiry@avyra.co.in"
                  className="flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>enquiry@avyra.co.in</span>
                </a>
              </div>

              <div className="flex gap-4 mt-6">
                <a href="https://www.instagram.com/avyra.living/" target="_blank">
                  <Instagram />
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
