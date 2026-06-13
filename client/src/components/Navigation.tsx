import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobilePlansOpen, setIsMobilePlansOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when location changes
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsMobilePlansOpen(false);
  }, [location]);

  const plans = [
    { name: "Medicare Advantage (Part C)", href: "/medicare-advantage-plans" },
    { name: "Medicare Supplement (Medigap)", href: "/medicare-supplement-plans" },
    { name: "Dental Insurance", href: "/dental-insurance" },
    { name: "Accident Insurance", href: "/accident-insurance" },
    { name: "Travel Insurance", href: "/travel-insurance" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg">
              TG
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight ${scrolled ? 'text-slate-800' : 'text-slate-900'}`}>
              Todd Greenbaum
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
            </Link>
            <a href="/#about" className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
            </a>
            <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
            </Link>

            {/* Plans Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-secondary transition-colors py-2 focus:outline-none"
              >
                Plans & Insurance
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-1 w-64 rounded-xl bg-white shadow-xl border border-slate-100 py-2 z-50 overflow-hidden"
                  >
                    {plans.map((plan) => (
                      <Link 
                        key={plan.name}
                        href={plan.href}
                        className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-secondary font-medium transition-colors border-l-2 border-transparent hover:border-secondary"
                      >
                        {plan.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
            </Link>

            <Button 
              size="sm" 
              className="bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 rounded-full px-6"
              onClick={() => window.location.href = "tel:+15617635073"}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 md:hidden overflow-y-auto pt-16"
          >
            <Link 
              href="/" 
              className="text-2xl font-heading font-bold text-slate-800 hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a 
              href="/#about" 
              className="text-2xl font-heading font-bold text-slate-800 hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <Link 
              href="/services" 
              className="text-2xl font-heading font-bold text-slate-800 hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>

            {/* Mobile Plans Submenu */}
            <div className="w-full max-w-xs text-center">
              <button 
                className="w-full flex items-center justify-center gap-2 text-2xl font-heading font-bold text-slate-800 hover:text-secondary focus:outline-none"
                onClick={() => setIsMobilePlansOpen(!isMobilePlansOpen)}
              >
                Plans & Insurance
                <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${isMobilePlansOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isMobilePlansOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-3 bg-slate-50 rounded-xl py-2 flex flex-col gap-3"
                  >
                    {plans.map((plan) => (
                      <Link 
                        key={plan.name}
                        href={plan.href}
                        className="text-base text-slate-600 hover:text-secondary py-1.5 px-4 block font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {plan.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/contact" 
              className="text-2xl font-heading font-bold text-slate-800 hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Button 
              size="lg" 
              className="mt-4 bg-secondary text-white rounded-full w-48 shadow-lg shadow-secondary/20"
              onClick={() => {
                window.location.href = "tel:+15617635073";
                setIsOpen(false);
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
