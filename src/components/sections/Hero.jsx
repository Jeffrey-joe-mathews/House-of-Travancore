import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-black/60 to-black/40 overflow-hidden"
    >3
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20 sm:py-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
          Experience
          <span className="block text-amber-400">House of Travancore</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Inspired by backwaters, coconut groves, and timeless recipes, 
          we bring you a soulful, memorable dining experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <a
            href="https://www.swiggy.com/city/bangalore/house-of-travancore-restaurant-ramamurthy-nagar-rest1110861"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-base group"
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          <a
            href="/House of Travancore Menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white bg-white text-gray-900 px-8 py-6 text-base"
            >
              View Our Menu
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
