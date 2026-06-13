import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  ShieldAlert, 
  CheckCircle2, 
  DollarSign, 
  Activity, 
  HeartPulse, 
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

export default function AccidentInsurance() {
  useSEO({
    title: "Accident Insurance Coverage | Todd Greenbaum, Florida Blue Agent",
    description: "Protect your wallet from unexpected medical expenses. Learn about Accident Insurance plans in Florida, what they cover, benefits, and how to get a quote.",
  });

  const benefits = [
    {
      title: "Direct Cash Payouts",
      description: "Benefits are paid directly to you, not the hospital. Use the cash for medical bills, rent, groceries, or whatever you need.",
    },
    {
      title: "No Network Restraints",
      description: "You are covered at any hospital, clinic, or doctor. No network requirements or doctor referrals required.",
    },
    {
      title: "Complements Primary Health",
      description: "Fills the financial gaps left by your health insurance, such as high deductibles, copays, and out-of-pocket costs.",
    },
    {
      title: "Guaranteed Acceptance",
      description: "Most plans require no medical exams or health questionnaires. You are guaranteed coverage regardless of pre-existing items.",
    },
  ];

  const coverageDetails = [
    {
      icon: Activity,
      title: "Emergency Care",
      desc: "Covers ambulance rides, emergency room visits, urgent care clinics, and initial diagnostic testing like X-rays or MRIs.",
    },
    {
      icon: HeartPulse,
      title: "Treatment & Recovery",
      desc: "Benefits for surgeries, hospital confinement, physical therapy, follow-up physician visits, and medical devices.",
    },
    {
      icon: DollarSign,
      title: "Daily Expenses",
      desc: "Cash can offset lost wages from missing work, childcare, transportation to appointments, or daily living costs.",
    },
  ];

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Banner Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-secondary text-white hover:bg-secondary border-none px-3 py-1 text-xs uppercase tracking-wider font-semibold">
                Supplemental Coverage
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white mb-6 leading-tight">
                Accident Insurance
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                Accidents happen when you least expect them. Safeguard your family and finances from high deductibles and unexpected out-of-pocket medical bills with direct cash benefits.
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

        {/* What is Accident Insurance */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
                  What is Accident Insurance?
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Accident insurance is a supplemental policy designed to support your main health insurance plan. If you suffer a covered accidental injury—ranging from a minor sprain to a major bone fracture—the policy pays a lump-sum cash benefit directly to you.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Unlike traditional health insurance, which pays the doctor or hospital directly for medical costs, accident insurance is paid directly to you. This gives you the flexibility to spend the funds on whatever you need most while recovering, from medical deductibles to everyday household bills.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-8 -mt-8" />
                  <ShieldAlert className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Did you know?</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Medical expenses are the leading cause of personal bankruptcy in the United States. Even with good health insurance, out-of-pocket deductibles and coinsurance can quickly add up to thousands of dollars. Accident insurance bridges that gap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                What Does it Cover?
              </h2>
              <p className="text-slate-600 text-base">
                Accident plans provide payout amounts based on the type of injury and the medical services received.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coverageDetails.map((item, idx) => (
                <Card key={idx} className="p-8 border-none shadow-md bg-white rounded-2xl flex flex-col hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6 shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits list */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12 text-center">
              Key Benefits of Accident Insurance
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

        {/* Who is it for */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
              Who is Accident Insurance For?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Accident insurance is highly recommended for families with active children participating in sports, individuals who are self-employed or have physically active lifestyles, and anyone with a high-deductible health plan (HDHP) who wants to reduce their financial exposure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full h-12 px-8 bg-secondary hover:bg-secondary/90 shadow-md text-base" asChild>
                <Link href="/contact">Get Started Today</Link>
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
