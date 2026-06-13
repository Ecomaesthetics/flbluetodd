import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todd Greenbaum | Licensed Florida Blue Insurance Agent",
  description: "Find the right insurance coverage with Todd Greenbaum, licensed Florida Blue sales agent. Get expert assistance with Medicare, health, life, and dental insurance.",
  verification: {
    google: "mVTdhfiP145pfKPRJlymqnVkoL5_p3eGjMDZI0dFuXk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-slate-50 font-body text-slate-800">
        <Navigation />
        <main className="min-h-screen flex flex-col pt-20 lg:pt-24">
          <div className="flex-grow">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
