import { Mail, Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-white font-heading font-bold text-xl mb-6">Todd Greenbaum</h3>
            <p className="text-slate-400 mb-6">
              Licensed Sales Agent dedicated to helping you protect what matters most with comprehensive insurance solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575497467614"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors text-white"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:Todd.Greenbaum@Trucordia.com"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+15617635073" className="hover:text-white transition-colors">+1 (561) 763-5073</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+19176998227" className="hover:text-white transition-colors">+1 (917) 699-8227</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:Todd.Greenbaum@Trucordia.com" className="hover:text-white transition-colors break-words text-sm">Todd.Greenbaum@Trucordia.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">License</h4>
            <p className="text-sm text-slate-400">
              Licensed Sales Agent. <br />
              Authorized to offer Medicare and other insurance products.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Todd Greenbaum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
