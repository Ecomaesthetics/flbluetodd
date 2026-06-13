import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ClipboardList
} from "lucide-react";

export default function MedicareSupplementPlans() {
  useSEO({
    title: "Medicare Supplement (Medigap) | Todd Greenbaum, Licensed Agent",
    description: "Learn how Medicare Supplement (Medigap) plans cover out-of-pocket gaps in Original Medicare. Explore popular plan types like Plan G and Plan N.",
  });

  const popularPlans = [
    {
      plan: "Plan G",
      highlight: "Most Comprehensive",
      desc: "Covers 100% of Medicare gaps (Part A deductible, copays, coinsurance, and foreign travel emergencies) once you pay the Part B annual deductible.",
    },
    {
      plan: "Plan N",
      highlight: "Lower Premium Option",
      desc: "Offers lower monthly premiums in exchange for small copays (up to $20 for office visits and up to $50 for emergency room visits). You also pay Part B excess charges.",
    },
  ];

  const benefits = [
    {
      title: "No Network Restrictions",
      description: "See any doctor, specialist, or hospital in the country who accepts Medicare patients. No referrals or prior approvals are required.",
    },
    {
      title: "Guaranteed Renewable",
      description: "As long as you pay your premiums on time, the insurance company cannot cancel your policy or change your coverage due to health conditions.",
    },
    {
      title: "Predictable Healthcare Costs",
      description: "With plans like Plan G, almost all your out-of-pocket Medicare expenses are covered, making your monthly healthcare budget completely predictable.",
    },
    {
      title: "Coverage Travels With You",
      description: "Covered anywhere in the United States. Many Medigap plans also include coverage for foreign travel emergency medical care.",
    },
  ];

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-secondary text-white hover:bg-secondary border-none px-3 py-1 text-xs uppercase tracking-wider font-semibold">
                Medigap Coverage
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-6 leading-tight">
                Medicare Supplement
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                Fill the gaps left by Original Medicare. Medigap plans help pay for your deductibles, copayments, and coinsurance, so you face no unexpected healthcare expenses.
              </p>
              <Button size="lg" className="rounded-full h-12 px-8 text-base bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/20" asChild>
                <Link href="/contact">
                  Compare Medigap Plans
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is Medigap */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
                  What is a Medicare Supplement (Medigap) Plan?
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Medicare Supplement insurance policies, commonly called **Medigap**, are sold by private insurance companies to fill the "gaps" in Original Medicare (Part A and Part B).
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Original Medicare generally covers about 80% of your outpatient medical costs, leaving you responsible for the remaining 20%, along with deductibles, copays, and coinsurance. A Medigap policy pays after Medicare pays its share, protecting you from potentially catastrophic medical bills.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-8 -mt-8" />
                  <ShieldCheck className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Standardization</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Medigap plans are standardized by the government and labeled with letters (Plans A through N). This means that a Plan G offered by one carrier provides the exact same medical benefits as a Plan G offered by another carrier. The main differences are monthly premiums and customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Plan Types */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                Popular Medigap Plan Choices
              </h2>
              <p className="text-slate-600 text-base">
                While there are 10 standardized plan options, Plan G and Plan N are the most popular choices for new Medicare beneficiaries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {popularPlans.map((item, idx) => (
                <Card key={idx} className="p-8 border-none shadow-md bg-white rounded-2xl flex flex-col hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-heading font-extrabold text-secondary">{item.plan}</span>
                    <Badge variant="outline" className="border-secondary/30 text-secondary bg-secondary/5 font-semibold px-3 py-1">
                      {item.highlight}
                    </Badge>
                  </div>
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
              Key Benefits of a Supplement Policy
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

        {/* Medigap Enrollment Advice */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <ClipboardList className="w-10 h-10 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                    Important: Medigap Open Enrollment Period
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    The best time to buy a Medigap policy is during your **6-month Medigap Open Enrollment Period**. This period begins automatically the month you turn 65 and are enrolled in Medicare Part B.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    During this window, you have a "guaranteed issue right" to buy any Medigap policy sold in Florida, regardless of pre-existing health issues. The carrier cannot deny you coverage or charge you a higher premium due to medical conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
              Compare Medigap Premium Rates
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Because Medigap benefits are identical across carriers, the main difference is the price. I can help you compare premium rates from top carriers in Florida, ensuring you pay the lowest price for the exact same Plan G or Plan N coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full h-12 px-8 bg-secondary hover:bg-secondary/90 shadow-md text-base" asChild>
                <Link href="/contact">Compare Rates Now</Link>
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
