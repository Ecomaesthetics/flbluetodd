import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Heart, 
  Layers, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function MedicareAdvantagePlans() {
  useSEO({
    title: "Medicare Advantage (Part C) | Todd Greenbaum, Florida Blue Agent",
    description: "Explore Medicare Advantage (Part C) plans in Florida. Learn how these all-in-one plans bundle medical, prescription, dental, and vision coverage.",
  });

  const comparison = [
    {
      feature: "Coverage Provider",
      original: "Federal Government",
      advantage: "Private Insurance Companies (e.g., Florida Blue)",
    },
    {
      feature: "Prescription Drugs (Part D)",
      original: "Must purchase separate standalone plan",
      advantage: "Usually included in the plan at no extra cost",
    },
    {
      feature: "Extra Benefits (Dental/Vision)",
      original: "Not covered (must buy separate policies)",
      advantage: "Frequently included (dental, vision, hearing, gym)",
    },
    {
      feature: "Out-of-Pocket Limits",
      original: "No annual limit on what you pay",
      advantage: "Legally capped maximum out-of-pocket limit",
    },
  ];

  const benefits = [
    {
      title: "All-in-One Simplicity",
      description: "Combines hospital care (Part A), doctor visits (Part B), and prescription drug coverage (Part D) into a single plan managed by one insurance card.",
    },
    {
      title: "Extra Wellness Benefits",
      description: "Plans often include routine dental cleanings, vision exams, glasses allowances, hearing aids, fitness programs (SilverSneakers), and OTC allowances.",
    },
    {
      title: "Capped Out-of-Pocket Costs",
      description: "Original Medicare has no spending limit. Medicare Advantage plans protect you by capping the maximum amount you pay for services each year.",
    },
    {
      title: "Low or $0 Monthly Premiums",
      description: "Many Medicare Advantage plans in Florida feature a $0 monthly premium (though you must continue paying your Medicare Part B premium).",
    },
  ];

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-secondary text-white hover:bg-secondary border-none px-3 py-1 text-xs uppercase tracking-wider font-semibold">
                Medicare Part C
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-6 leading-tight">
                Medicare Advantage
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                Looking for an all-in-one Medicare solution? Medicare Advantage plans combine medical, prescription, and additional wellness benefits like dental and vision into one affordable plan.
              </p>
              <Button size="lg" className="rounded-full h-12 px-8 text-base bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/20" asChild>
                <Link href="/contact">
                  Find a Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is Medicare Advantage */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
                  What is Medicare Advantage (Part C)?
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Medicare Advantage, also known as Medicare Part C, is a health plan option approved by Medicare and offered by private insurance companies. It serves as an alternative to Original Medicare, providing your Part A (hospital) and Part B (medical) coverage.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Private carriers receive funding from the federal government to administer your Medicare benefits. This allows them to package your coverage into HMO or PPO networks, coordinate your medical care, and offer extra benefits like prescription drugs, dental care, and fitness program memberships.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-8 -mt-8" />
                  <HelpCircle className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Eligibility Requirement</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    To enroll in a Medicare Advantage plan, you must be enrolled in both Medicare Part A and Part B and reside within the plan's service area. Enrollment is generally limited to specific times, such as the Annual Enrollment Period (AEP) from October 15 to December 7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                Medicare Advantage vs. Original Medicare
              </h2>
              <p className="text-slate-600">
                Understand the key structural differences between federal Original Medicare and private Medicare Advantage plans.
              </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-2xl shadow-md border border-slate-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-heading font-bold">
                      <th className="p-4 md:p-6 text-sm md:text-base">Feature</th>
                      <th className="p-4 md:p-6 text-sm md:text-base">Original Medicare</th>
                      <th className="p-4 md:p-6 text-sm md:text-base">Medicare Advantage (Part C)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {comparison.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 md:p-6 font-bold text-slate-800 text-sm md:text-base">{row.feature}</td>
                        <td className="p-4 md:p-6 text-slate-600 text-sm md:text-base">{row.original}</td>
                        <td className="p-4 md:p-6 text-slate-600 text-sm md:text-base font-medium text-secondary">{row.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12 text-center">
              Key Benefits of Part C
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
              Compare Florida Blue Medicare Advantage Plans
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Medicare Advantage options vary by county and network. I can help you review plans in your zip code, confirm your doctors are in network, and make sure your prescriptions are fully covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full h-12 px-8 bg-secondary hover:bg-secondary/90 shadow-md text-base" asChild>
                <Link href="/contact">Compare Plans Now</Link>
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
