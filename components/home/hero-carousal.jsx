"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import ZoomOutOnScroll from "../ui/zoom-out";
import { delay, shouldRender } from "@/lib/simulator";

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
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🔻 New states
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [canRender, setCanRender] = useState(true);

  // 🔻 simulate initial delay (3–8 sec)
  useEffect(() => {
    delay(3000, 8000).then(() => setReady(true));
  }, []);

  // 🔻 random render block (hero kabhi gayab)
  useEffect(() => {
    setCanRender(shouldRender(0.8)); // 80% chance
  }, []);

  // 🔻 random failure (hero broken feel)
  useEffect(() => {
    if (Math.random() < 0.25) {
      setError(true);
    }
  }, []);

  // 🔻 random slide auto-change (laggy feel)
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.5) return; // sometimes stuck
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000 + Math.random() * 3000);

    return () => clearInterval(interval);
  }, []);

  // ❌ completely not rendered
  if (!canRender) return null;

  // ⏳ loading state
  if (!ready) {
    return (
      <div className="h-[60vh] md:h-[600px] flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
        Loading...
      </div>
    );
  }

  // ⚠️ error state
  if (error) {
    return (
      <div className="h-[60vh] md:h-[600px] flex items-center justify-center bg-gray-100 text-red-400 text-sm">
        Failed to load hero content
      </div>
    );
  }

  return (
    <div className="relative h-[60vh] md:h-[600px] overflow-hidden font-montserrat">
      {slides.map((slide, index) => {
        const hideContent = !shouldRender(0.85); // inner content drop

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: shouldRender(0.8)
                  ? `url(${slide.image})`
                  : "none",
                backgroundColor: "#f3f4f6",
              }}
            />

            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-4">
              <div className="text-center text-white max-w-3xl w-full">
                {!hideContent && (
                  <>
                    <p className="text-xs md:text-sm font-semibold mb-3 tracking-wide">
                      {slide.badge}
                    </p>

                    <ZoomOutOnScroll>
                      <h1 className="text-2xl md:text-5xl font-extrabold mb-3 leading-tight">
                        {slide.title}
                      </h1>

                      <p className="text-sm md:text-lg mb-6 opacity-90">
                        {shouldRender(0.7)
                          ? slide.description
                          : "Content unavailable"}
                      </p>
                    </ZoomOutOnScroll>
                  </>
                )}

                {/* Buttons (kabhi disable) */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    size="lg"
                    disabled={!shouldRender(0.7)}
                    className="bg-[#708c98] text-white text-sm md:text-base"
                  >
                    EXPLORE PRODUCTS
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    disabled={!shouldRender(0.7)}
                    className="text-white text-sm md:text-base"
                  >
                    REQUEST A QUOTE
                  </Button>
                </div>

                {/* subtle warning */}
                {!shouldRender(0.6) && (
                  <p className="text-[10px] md:text-xs text-red-300 mt-3">
                    Some resources failed to load.
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Controls (kabhi kaam nahi kare) */}
      <button
        onClick={() => {
          if (!shouldRender(0.7)) return;
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => {
          if (!shouldRender(0.7)) return;
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default HeroCarousel;