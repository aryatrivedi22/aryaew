"use client";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { quickNavigation, rentalProducts } from "../data/rental-data";
import { useState } from "react";

// IMAGE ELEMENT
const ImageGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 1) {
    return (
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-[400px] object-cover"
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-[400px] object-cover"
        />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-background/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// RENTAL COMPONENT
const Rental = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] overflow-hidden">
        <img
          src="/about/services-hero.jpg"
          alt="Rental Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-white text-center">
            RENTAL SERVICES
          </h1>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {quickNavigation.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className="flex items-start gap-3 p-4 rounded-lg transition-colors text-left"
            >
              <CheckCircle2 className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
              <span className="text-blue-800 font-medium underline hover:text-blue-900">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Rental Service Sections */}
      <div>
        {/* Rental Products Section */}
        <div className="container mx-auto px-4 pb-20 pt-8">
          {rentalProducts.map((product) => (
            <section
              key={product.id}
              id={product.id}
              className="grid md:grid-cols-2 gap-8 mb-28 scroll-mt-20"
            >
              <div>
                {/* TITLE */}
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h2>
                {/* SUBTITLE */}
                <p className="text-2xl font-semibold text-gray-700 mb-6">
                  {product.subtitle}
                </p>

                {/* DESCRIPTION */}
                {product.description.map((desc, i) => (
                  <p key={i} className="pb-4 text-lg text-gray-700">
                    {desc}
                  </p>
                ))}

                {/* FEATURES */}
                <div className="mt-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    Features:
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                        <span className="text-gray-600">
                          <span className="font-bold text-gray-800">
                            {feature.split(":")[0]}
                          </span>
                          : {feature.split(":")[1]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ImageGallery images={product.images} title={product.title} />
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <section className="bg-muted rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Rent Industrial Equipment?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your rental requirements. Our team will
            provide you with the best solutions tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              Call:{" "}
              <a href="tel:8850409725" className="hover:underline">
                8850409725
              </a>{" "}
              /{" "}
              <a href="tel:9892279517" className="hover:underline">
                9892279517
              </a>
            </Button>
            <a href="mailto:aryaengineeringwork24@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rental;
