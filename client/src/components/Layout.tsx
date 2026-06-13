import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top on route change, unless there is a hash link
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-50 font-body text-slate-800 flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 lg:pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
