import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Heart, 
  ShieldCheck, 
  Smile, 
  Plane, 
  Activity, 
  Layers, 
  ArrowRight,
  Shield,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  useSEO({
    title: "Insurance Services & Plans | Todd Greenbaum, Florida Blue Agent",
    description: "Explore the comprehensive insurance services offered by Todd Greenbaum in Florida, including Medicare Advantage, Medigap, dental, accident, and travel insurance.",
  });

  const mainServices = [
    {
      icon: Layers,
      title: "Medicare Advantage (Part C)",
      badge: "Medicare Option",
      desc: "All-in-one plans bundling Medicare Parts A, B, and usually D (prescription drugs), with extra wellness perks like dental and vision.",
      link: "/medicare-advantage-plans",
      color: "bg-blue-50 text-secondary"
    },
    {
      icon: ShieldCheck,
      title: "Medicare Supplement (Medigap)",
      badge: "Medicare Option",
      desc: "Fill the 20% out-of-pocket coinsurance, deductibles, and gaps left by Original Medicare. Keeps your choice of any Medicare doctor.",
      link: "/medicare-supplement-plans",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: Smile,
      title: "Dental Insurance Plans",
      badge: "Oral Health",
      desc: "Plans covering preventive cleanings, fillings, root canals, and major procedures like dentures and crowns, essential for seniors.",
      link: "/dental-insurance",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: Activity,
      title: "Accident Insurance",
      badge: "Supplemental",
      desc: "Provides a cash payout directly to you to cover high deductibles, emergency care, and daily living costs after an unexpected injury.",
      link: "/accident-insurance",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      badge: "Supplemental",
      desc: "Protects your travel investments and medical needs abroad. Highly recommended since domestic health plans and Medicare do not cover overseas care.",
      link: "/travel-insurance",
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: Heart,
      title: "Health & Life Insurance",
      badge: "General Coverage",
      desc: "Find individual, family, and group health policies, or secure your family's financial future with customizable term or whole life coverage.",
      link: "/contact",
      color: "bg-rose-50 text-rose-600"
    }
  ];

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Banner Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-secondary text-white hover:bg-secondary border-none px-3 py-1 text-xs uppercase tracking-wider font-semibold">
                Expert Insurance Guidance
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-6 leading-tight">
                Our Services & Plans
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                As a licensed sales agent in Florida, I offer personalized consultations to match you with comprehensive coverage options tailored to your lifestyle, health needs, and budget.
              </p>
              <Button size="lg" className="rounded-full h-12 px-8 text-base bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/20" asChild>
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Showcase Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                Insurance Solutions Tailored to You
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We represent top-rated insurance carriers to offer flexible, secure plans. Click on any specialized plan to learn more about the coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, idx) => (
                <Card key={idx} className="p-8 border border-slate-100 bg-white rounded-2xl flex flex-col hover:shadow-xl hover:border-secondary/10 transition-all group duration-300">
                  <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  
                  <div className="flex-grow">
                    <Badge variant="outline" className="mb-3 border-slate-200 text-slate-500 font-semibold px-2 py-0.5 text-[10px] uppercase tracking-wider">
                      {service.badge}
                    </Badge>
                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-50 mt-auto">
                    <Link href={service.link} className="text-secondary hover:underline font-bold text-sm inline-flex items-center gap-2 group/btn">
                      {service.link === "/contact" ? "Request Info" : "Learn More"}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Onboarding / Steps */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                How We Find the Perfect Plan
              </h2>
              <p className="text-slate-600 text-base">
                Our simple, stress-free process ensures you get the exact protection you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Discovery & Assessment",
                  desc: "We discuss your current coverage, medical history, budget, and specific doctors or prescriptions you need to keep."
                },
                {
                  step: "02",
                  title: "Market Comparison",
                  desc: "I analyze plan options from Florida Blue and other leading carriers, matching benefits and premium rates side-by-side."
                },
                {
                  step: "03",
                  title: "Enrollment & Support",
                  desc: "We guide you through the application paperwork for a smooth approval, remaining your trusted point of contact all year."
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 relative shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-5xl font-extrabold text-secondary/10 absolute top-6 right-8 font-heading">{step.step}</span>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 mt-4">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory / Trust Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <Shield className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
              Fiduciary Approach to Insurance
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Unlike insurance agents who push specific products to hit corporate quotas, my commitment is entirely to you, the client. I operate with full transparency, taking the time to explain the fine print, deductibles, and limitations of each plan so you can select the coverage that truly benefits your family.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              There is never any obligation or high-pressure sales tactic. Just clear, honest advice from a licensed Florida professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full h-12 px-8 bg-secondary hover:bg-secondary/90 shadow-md text-base" asChild>
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-slate-300 hover:bg-white text-slate-700 text-base" asChild>
                <a href="tel:+15617635073">Call (561) 763-5073</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
