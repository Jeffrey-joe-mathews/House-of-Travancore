"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home">
              <img
                src="/image.png"
                alt="House of Travancore Logo"
                className={cn(
                  "h-12 w-auto transition-all duration-300",
                  isScrolled 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-75 pointer-events-none"
                )}
              />
            </Link>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    " font-medium transition-colors duration-300 hover:text-amber-400",
                    isScrolled
                      ? "text-gray-700 hover:text-amber-600"
                      : "text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <a href="https://www.swiggy.com/city/bangalore/house-of-travancore-restaurant-ramamurthy-nagar-rest1110861"
                target="_blank"
                rel="noopener norefferer">
            <Button className="bg-amber-600 text-base hover:bg-amber-700 text-white px-6 py-5">
              Order Now
            </Button>
            </a>
          </div> */}
          <div
            className={cn(
              "hidden md:block transition-all duration-300",
              isScrolled ? "visible opacity-100" : "invisible opacity-0"
            )}
          >
            <a
              href="https://www.swiggy.com/city/bangalore/house-of-travancore-restaurant-ramamurthy-nagar-rest1110861"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-600 text-base hover:bg-amber-700 text-white px-6 py-5">
                Order Now
              </Button>
            </a>
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-md transition-colors duration-300",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a href="https://www.swiggy.com/city/bangalore/house-of-travancore-restaurant-ramamurthy-nagar-rest1110861"
                target="_blank"
                rel="noopener norefferer">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-5 text-base">
                  Order Now
                </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
