"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ZoomOutOnScroll from "../ui/zoom-out";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap", // 'swap' ensures text is visible while the font loads
  variable: "--font-montserrat", // Optional: for using with CSS variables/Tailwind
});

// Hero Carousel Component
const slides = [
  {
    image: "/hero/hero-1.webp",
    badge: "— ENGINEERING TRUST & EXCELLENCE —",
    title: "Advanced Hydraulic Tank Jacking Solutions",
    description:
      "Since 2023, Arya Engineering Works has been a leader in delivering robust industrial fluid power solutions.",
  },
  {
    image: "/hero/hero-2.webp",
    badge: "",
    title: "Launch and Recovery Systems [LARS]",
    description: "",
  },
  {
    image: "/hero/hero-3.webp",
    badge: "",
    title: "POWER PACK",
    description: "",
  },
  {
    image: "/hero/hero-4.webp",
    badge: "",
    title: "HYDRAULIC CYLINDER",
    description: "",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className={`relative h-[600px] overflow-hidden ${montserrat.className}`}
    >
      {slides.map((slide, index) => (
        // Slide Item
        <div
          key={index}
          // make inactive slides non-interactive and keep active slide on top
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 pointer-events-auto z-20"
              : "opacity-0 pointer-events-none z-10"
          }`}
          aria-hidden={index !== currentSlide}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto text-center text-primary-foreground">
                <p className="text-sm font-semibold mb-4 tracking-wider">
                  {slide.badge}
                </p>
                <ZoomOutOnScroll>
                  <h1 className="text-5xl md:text-5xl font-extrabold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                    {slide.description}
                  </p>
                </ZoomOutOnScroll>
                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/about">
                    <Button
                      size="lg"
                      className="bg-[#708c98] hover:bg-[#708c98] text-white font-semibold cursor-pointer"
                    >
                      EXPLORE PRODUCTS
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent text-white font-semibold hover:bg-gray-200 cursor-pointer"
                    >
                      REQUEST A QUOTE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        // Put arrows above slides so they're always clickable/visible
        className="absolute left-0.5 md:left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground p-2 rounded-full transition-colors z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0.5 md:right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground p-2 rounded-full transition-colors z-30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30 pointer-events-auto">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-yellow-600"
                : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
