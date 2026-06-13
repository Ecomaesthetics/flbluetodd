import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Sparkles, 
  Heart, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function DentalInsurance() {
  useSEO({
    title: "Dental Insurance Plans | Todd Greenbaum, Florida Blue Agent",
    description: "Keep your smile healthy and bright. Learn about Dental Insurance options in Florida for seniors and families, including coverage for preventive, basic, and major care.",
  });

  const categories = [
    {
      icon: Sparkles,
      title: "Preventive Care",
      coverage: "100% Covered",
      desc: "Routine cleanings (usually twice a year), oral evaluations, and diagnostic X-rays. Most plans cover these with no waiting periods.",
    },
    {
      icon: ShieldCheck,
      title: "Basic Services",
      coverage: "70% - 80% Covered",
      desc: "Fillings, simple extractions, and emergency treatment for dental pain. Subject to a minor deductible and short waiting period.",
    },
    {
      icon: TrendingUp,
      title: "Major Services",
      coverage: "50% Covered",
      desc: "Crowns, bridges, root canals, dentures, and implants. These services generally carry a waiting period before benefits begin.",
    },
  ];

  const benefits = [
    {
      title: "Protects Overall Health",
      description: "Preventative dental care helps detect early signs of systemic health conditions like diabetes, heart disease, and high blood pressure.",
    },
    {
      title: "Medicare Gap Coverage",
      description: "Since original Medicare doesn't cover routine dental work, a standalone dental policy is essential to avoid large out-of-pocket bills.",
    },
    {
      title: "Lowers Treatment Costs",
      description: "Insurance network rates are pre-negotiated and significantly lower than standard dental fees, saving you money on every visit.",
    },
    {
      title: "No-Hassle Enrollment",
      description: "Quick approval with flexible payment plans. Choose from extensive PPO or DHMO networks of qualified dentists in Florida.",
    },
  ];

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-secondary text-white hover:bg-secondary border-none px-3 py-1 text-xs uppercase tracking-wider font-semibold">
                Oral Health Protection
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-6 leading-tight">
                Dental Insurance
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                Protect your smile and your health. Find dental coverage that fits your budget and covers preventive care, fillings, crowns, and dentures.
              </p>
              <Button size="lg" className="rounded-full h-12 px-8 text-base bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/20" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Dental Matters */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
                  Why Dental Coverage Matters for Seniors
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Good oral health becomes increasingly important as we age. Untreated dental issues can lead to pain, difficulty eating, and serious health problems like heart disease or infections.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Unfortunately, **Original Medicare (Parts A & B) does not cover routine dental care** such as cleanings, fillings, extractions, or dentures. A dedicated dental insurance policy ensures you have affordable access to professional dental care, keeping your teeth healthy and your costs predictable.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-8 -mt-8" />
                  <Heart className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Overall Wellness Connection</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Studies show a direct link between oral bacteria and cardiovascular disease. Regular dental cleanings help reduce oral inflammation, contributing to overall physical well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Levels */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                Understanding Coverage Tiers
              </h2>
              <p className="text-slate-600 text-base">
                Most dental plans follow a standard "100-80-50" coverage structure for different types of procedures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((item, idx) => (
                <Card key={idx} className="p-8 border-none shadow-md bg-white rounded-2xl flex flex-col hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-50 text-secondary hover:bg-blue-100 border-none font-semibold px-3 py-1">
                      {item.coverage}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12 text-center">
              Key Benefits of a Dental Plan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
              Ready to Secure Your Smile?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              I can help you review dental plans from top-rated carriers in Florida to find a policy that matches your preferred dentist and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full h-12 px-8 bg-secondary hover:bg-secondary/90 shadow-md text-base" asChild>
                <Link href="/contact">Get a Dental Quote</Link>
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
