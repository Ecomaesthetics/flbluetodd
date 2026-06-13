"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Send, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock 
} from "lucide-react";
import { useState } from "react";
import { useSEO } from "@/hooks/use-seo";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  useSEO({
    title: "Contact Todd Greenbaum | Licensed Insurance Agent in Florida",
    description: "Get in touch with Todd Greenbaum, licensed Florida Blue insurance agent, for personalized assistance with Medicare, dental, health, and life insurance.",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    
    // TODO: Connect this handler to your backend endpoint or external form service
    // Example:
    // try {
    //   const response = await fetch("https://formspree.io/f/your-id", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });
    //   if (response.ok) { ... }
    // } catch (err) { ... }

    // Fallback: Default to opening mailto prefilled as the fallback service option
    setTimeout(() => {
      const subject = encodeURIComponent(`Inquiry from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`
      );
      if (typeof window !== "undefined") {
        window.location.href = `mailto:Todd.Greenbaum@Trucordia.com?subject=${subject}&body=${body}`;
      }
      
      setIsSubmitting(false);
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600">
            Have questions about your insurance coverage or need a free quote? Fill out the form below or contact me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">Office Address</h4>
                    <p className="text-slate-600">
                      3010 N. Military Trail, Suite 310<br />
                      Boca Raton, FL 33431
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">Phone Numbers</h4>
                    <p className="text-slate-600">
                      Office: <a href="tel:+15617635073" className="hover:text-secondary font-medium transition-colors">+1 (561) 763-5073</a><br />
                      Cell: <a href="tel:+19176998227" className="hover:text-secondary font-medium transition-colors">+1 (917) 699-8227</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600">
                      <a href="mailto:Todd.Greenbaum@Trucordia.com" className="hover:text-secondary font-medium transition-colors break-all">
                        Todd.Greenbaum@Trucordia.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">Availability</h4>
                    <p className="text-slate-600">
                      Monday – Friday: 9:00 AM – 5:00 PM EST<br />
                      Available for weekends by appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Maps Embed */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 h-80">
              <iframe
                title="Todd Greenbaum Office Map"
                src="https://maps.google.com/maps?q=3010%20N%20Military%20Trail,%20Suite%20310,%20Boca%20Raton,%20FL%2033431&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 flex flex-col items-center justify-center min-h-[500px] text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Opening Your Email</h3>
                <p className="text-slate-600 max-w-md">Your email app should open with the message details pre-filled. Just hit send!</p>
                <p className="text-slate-500 text-sm mt-6">
                  If your email client didn't open, please send the inquiry manually to:<br />
                  <a href="mailto:Todd.Greenbaum@Trucordia.com" className="text-secondary font-semibold hover:underline">Todd.Greenbaum@Trucordia.com</a>
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                  Send a Message
                </h3>
                <p className="text-slate-600 text-sm mb-8">
                  Submit your details and I'll get back to you promptly to discuss your needs.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              className="h-12 rounded-xl border-slate-200 focus:border-secondary focus:ring-secondary/20 bg-slate-50/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-semibold">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="you@example.com"
                                className="h-12 rounded-xl border-slate-200 focus:border-secondary focus:ring-secondary/20 bg-slate-50/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-semibold">Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="(555) 123-4567"
                                className="h-12 rounded-xl border-slate-200 focus:border-secondary focus:ring-secondary/20 bg-slate-50/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can I help you today? Please include details about plans you are interested in."
                              className="min-h-[150px] rounded-xl border-slate-200 focus:border-secondary focus:ring-secondary/20 bg-slate-50/50 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg shadow-lg shadow-secondary/25 transition-all hover:-translate-y-0.5 disabled:opacity-55"
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
