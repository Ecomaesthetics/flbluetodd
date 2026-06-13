"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  HeartHandshake,
  FileText
} from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import headshot from "@assets/71e04f91-9873-44b7-b99b-76f26ab6a96d-300x300_(1)_1771607027862.webp";

export default function About() {
  useSEO({
    title: "About Todd Greenbaum | Licensed Florida Blue Insurance Agent",
    description: "Get to know Todd Greenbaum, a licensed Florida Blue insurance agent based in Boca Raton. Learn about his mission, values, and client-first insurance advice.",
  });

  const values = [
    {
      icon: HeartHandshake,
      title: "Client-First Care",
      desc: "Your needs dictate the plan, not commission rates. We search for the absolute best coverage matching your health profile and budget."
    },
    {
      icon: ShieldCheck,
      title: "Honesty & Transparency",
      desc: "Insurance can be confusing. We provide clear, plain-English explanations of deductibles, copays, and limits with zero hidden surprises."
    },
    {
      icon: Award,
      title: "Florida-Specific Expertise",
      desc: "Licensed in Florida with deep knowledge of local doctor networks, regional plan rules, and Florida Blue's specialized offerings."
    }
  ];

  return (
    <div className="py-12 bg-slate-50">
      {/* Header section */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-secondary/30 text-secondary bg-secondary/5 rounded-full text-sm font-semibold uppercase tracking-wide">
              Meet Your Agent
            </Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-6">
              About Todd Greenbaum
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Dedicated to helping Florida residents navigate the complexities of Medicare, health, life, and dental insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile Section */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Container */}
            <div className="w-full lg:w-2/5 bg-slate-50 p-8 flex justify-center items-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[6px] border-white shadow-lg overflow-hidden bg-slate-200">
                <img 
                  src={typeof headshot === "string" ? headshot : headshot.src} 
                  alt="Todd Greenbaum" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="w-full lg:w-3/5 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-6">
                Your Trusted Insurance Guide
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Hello, I'm <strong>Todd Greenbaum</strong>. As a licensed sales agent specializing in Florida Blue insurance products, my goal is simple: to make finding the right coverage as easy, stress-free, and transparent as possible.
                </p>
                <p>
                  I understand that insurance isn't one-size-fits-all. Every individual, senior, and family I consult with has different health priorities and financial considerations. That's why I prioritize a relationship-based approach—getting to know you first, so I can match you with the plan that fits you best.
                </p>
                <p>
                  Based in Boca Raton, I assist clients throughout the entire state of Florida. Whether you are transitioning to Medicare, selecting supplementary dental plans, or seeking short-term travel protection, I am here to guide you step-by-step.
                </p>
              </div>

              {/* License Badge */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm">
                  <FileText className="w-5 h-5 text-secondary" />
                  <span>Licensed Florida Sales Agent</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>Serving All of Florida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
              My Core Commitments to You
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto">
              How I do business is just as important as the insurance products I offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <Card key={val.title} className="border-slate-100 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-secondary mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full -z-10" />
          
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Let's Discuss Your Insurance Needs
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Contact me today for a friendly, no-obligation consultation. I will help you review your options and answer any questions you have.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto px-8" asChild>
              <Link href="/contact">
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/10 text-white hover:text-white w-full sm:w-auto px-8" asChild>
              <a href="tel:+15617635073">
                <Phone className="w-5 h-5 mr-2" />
                +1 (561) 763-5073
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
