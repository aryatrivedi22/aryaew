"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { productsHomePage } from "@/app/data/products-home";
import { motion } from "motion/react";

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = productsHomePage.length - itemsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = productsHomePage.length - itemsPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const maxIndex = productsHomePage.length - itemsPerView;

  return (
    <section id="products" className="py-12 bg-gray-200">
      <div className="container px-2 md:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {/* TITLE AND DESC */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }} // Start 100px left and invisible
            whileInView={{ scale: 1, opacity: 1 }} // Animate to final position
            transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration and easing
            className="text-left md:text-center mx-2 mb-4"
          >
            <p className="text-yellow-600 font-bold mb-4 text-sm tracking-wider uppercase">
              Explore our products
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Provide Best Hydraulic Solutions
            </h2>
            <p className="md:mx-3 text-gray-700 text-lg leading-relaxed">
              Our Products are known for their quality, design durability and
              precision engineering. Arya Engineering Works stands as a reliable
              and experienced supplier of specialized engineering components and
              industrial hardware.
            </p>
          </motion.div>

          {/* PRODUCTS SECTION */}
          <div className="relative md:mx-16">
            <div className="overflow-hidden">
              <div
                className="pr-2 md:pr-0 flex transition-transform duration-500 ease-out gap-3"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerView)
                  }%)`,
                }}
              >
                {productsHomePage.map((product, index) => (
                  <div
                    key={index}
                    className="shrink-0"
                    style={{
                      width: `calc(${100 / itemsPerView}% - ${
                        ((itemsPerView - 1) * 16) / itemsPerView
                      }px)`,
                    }}
                  >
                    {/* Single product card */}
                    <div className="bg-background rounded-lg overflow-hidden border-4 border-primary/20 hover:shadow-lg hover:scale-95 transition-all duration-200 cursor-pointer">
                      {/* Products Images */}
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Title Images */}
                      <div className="py-2 text-center">
                        <h3 className="text-lg font-bold text-gray-900">
                          {product.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*  */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-yellow-600 hover:bg-yellow-600/90 text-primary-foreground border-none disabled:opacity-50"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-yellow-600 hover:bg-yellow-600/90 text-primary-foreground border-none disabled:opacity-50"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
