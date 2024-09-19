'use client'

import { useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrainCircuit, LogIn, Menu } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-gray-900 text-white flex flex-col`}
      >
        <header className="bg-gray-800 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex flex-col items-center">
              <Link href="/" className="text-2xl font-bold flex items-center">
                <BrainCircuit className="mr-2 text-neon-green" />
                ScienceAI
              </Link>
              <span className="text-sm text-gray-400 mt-1 ">by DDoS Mitigators</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Link
                href="/how-it-works"
                className="hover:text-blue-400 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/dashboard"
                className="hover:text-blue-400 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/exhibits"
                className="hover:text-blue-400 transition-colors"
              >
                Exhibits
              </Link>
              <Link
                href="/reportspage"
                className="hover:text-blue-400 transition-colors"
              >
                Reports
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <Link href="/staff-login">
              <Button variant="outline" className="hidden md:flex">
                <LogIn className="mr-2" /> Staff Login
              </Button>
            </Link>
            <Button variant="ghost" className="md:hidden" onClick={toggleMobileMenu}>
              <Menu />
            </Button>
          </div>
        </header>

        <div className="md:hidden">
          <nav className={`flex flex-col space-y-2 px-4 py-2 bg-gray-800 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <Link
              href="/how-it-works"
              className="hover:text-blue-400 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-blue-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/exhibits"
              className="hover:text-blue-400 transition-colors"
            >
              Exhibits
            </Link>
            <Link
              href="/reportspage"
              className="hover:text-blue-400 transition-colors"
            >
              Reports
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
            <Link href="/staff-login">
              <Button variant="outline" className="w-full">
                <LogIn className="mr-2" /> Staff Login
              </Button>
            </Link>
          </nav>
        </div>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-800 py-4 text-center">
          <p>&copy; 2024 DDoS Mitigators. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}