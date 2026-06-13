import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Contact from "@/pages/contact";
import AccidentInsurance from "@/pages/accident-insurance";
import TravelInsurance from "@/pages/travel-insurance";
import DentalInsurance from "@/pages/dental-insurance";
import MedicareAdvantagePlans from "@/pages/medicare-advantage-plans";
import MedicareSupplementPlans from "@/pages/medicare-supplement-plans";
import Services from "@/pages/services";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/accident-insurance" component={AccidentInsurance} />
      <Route path="/travel-insurance" component={TravelInsurance} />
      <Route path="/dental-insurance" component={DentalInsurance} />
      <Route path="/medicare-advantage-plans" component={MedicareAdvantagePlans} />
      <Route path="/medicare-supplement-plans" component={MedicareSupplementPlans} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

