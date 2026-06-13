import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Plane, 
  Heart, 
  Luggage, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function TravelInsurance() {
  useSEO({
    title: "Travel Insurance Plans | Todd Greenbaum, Licensed Agent",
    description: "Travel with confidence. Explore comprehensive travel insurance coverage for trip cancellation, medical emergencies abroad, lost luggage, and more.",
  });

  const benefits = [
    {
      title: "Protects Prepaid Expenses",
      description: "Recover non-refundable trip costs (flights, hotels, tours) if you must cancel or cut your trip short due to a covered reason.",
    },
    {
      title: "Global Medical Coverage",
      description: "Receive high-quality medical treatment anywhere in the world, including emergency medical evacuation if needed.",
    },
    {
      title: "24/7 Travel Assistance",
      description: "Gain access to a 24-hour hotline for emergency support, translation services, lost document replacement, and medical coordination.",
    },
    {
      title: "Luggage & Delayed Care",
      description: "Get reimbursed for lost or damaged baggage, and receive funds to purchase essentials during long baggage or travel delays.",
    },
  ];

  const coverageDetails = [
    {
      icon: AlertTriangle,
      title: "Trip Cancellation & Interruption",
      desc: "Protects your investment if your trip is cancelled or interrupted due to illness, injury, severe weather, or airline strike.",
    },
    {
      icon: Heart,
      title: "Emergency Medical & Evacuation",
      desc: "Covers hospital stays, physician visits, and emergency evacuation to a proper medical facility if you get sick or injured overseas.",
    },
    {
      icon: Luggage,
      title: "Baggage & Personal Effects",
      desc: "Reimburses you if your luggage is lost, stolen, or damaged during transit, as well as essential items during delay.",
    },
  ];

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-secondary text-white hover:bg-secondary border-none px-3 py-1 text-xs uppercase tracking-wider font-semibold">
                Global Protection
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight mb-6 leading-tight">
                Travel Insurance
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                Don't let unexpected cancellations, medical emergencies, or lost baggage ruin your next adventure. Secure comprehensive travel protection before you depart.
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

        {/* Why Travel Insurance */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
                  Why Travel Insurance is Essential
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Many travelers assume their domestic health insurance covers them when they travel abroad. However, most U.S. health plans—including **Medicare**—provide little to no coverage outside of the United States.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Travel insurance fills this vital gap by providing international medical coverage and emergency transport services. Additionally, it safeguards your financial investment against flight cancellations, hotel booking losses, and carrier delays, giving you absolute peace of mind during your journeys.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-8 -mt-8" />
                  <Plane className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Medicare Advisory</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Under original Medicare (Parts A & B), medical services received outside the U.S. are generally not covered. If you are planning an international trip, obtaining a dedicated travel medical policy is highly recommended to protect against foreign hospital expenses.
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
                Core Coverage Types
              </h2>
              <p className="text-slate-600 text-base">
                Travel insurance plans can be tailored to match your specific itinerary, trip duration, and medical requirements.
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

        {/* Key Benefits */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12 text-center">
              Key Benefits at a Glance
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

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
              Plan Your Next Journey with Peace of Mind
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Whether you are taking a single international cruise or travel frequently throughout the year, I can help you find a plan that protects your travel investment and health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full h-12 px-8 bg-secondary hover:bg-secondary/90 shadow-md text-base" asChild>
                <Link href="/contact">Get a Free Quote</Link>
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
