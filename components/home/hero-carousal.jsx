"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Hero Carousel Component
const slides = [
  {
    image: "/hero/hero-2.jpg",
    badge: "PREMIUM QUALITY",
    title: "Industrial Tank Solutions",
    description:
      "Comprehensive tank jacking equipment and industrial fluid management systems since 1996.",
  },
  {
    image: "/hero/hero-1.jpg",
    badge: "YOU CAN TRUST US",
    title: "Hydraulic Systems Engineering",
    description:
      "Advanced industrial hydraulic solutions for modern manufacturing and engineering applications.",
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
    <div className="relative h-[600px] overflow-hidden">
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
            <div className="absolute inset-0 bg-accent/10" />
          </div>

          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center text-primary-foreground">
                <p className="text-sm font-semibold mb-4 tracking-wider">
                  {slide.badge}
                </p>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                  {slide.description}
                </p>
                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/about">
                    <Button
                      size="lg"
                      className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold cursor-pointer"
                    >
                      MORE DETAILS
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent text-white font-semibold hover:bg-gray-200 cursor-pointer"
                    >
                      GET A QUOTE
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground p-2 rounded-full transition-colors z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground p-2 rounded-full transition-colors z-30"
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
