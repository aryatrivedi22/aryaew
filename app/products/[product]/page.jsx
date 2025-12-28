"use client";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProductById } from "@/data/products";
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const ProductDetail = () => {
  const productId = useParams().product;
  const product = getProductById(productId || "");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToImage = (index) => {
    setCurrentImageIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const imageWidth = container.scrollWidth / product.image.length;
      container.scrollTo({ left: imageWidth * index, behavior: "smooth" });
    }
  };

  const nextImage = () => {
    const nextIndex =
      currentImageIndex < product.image.length - 1 ? currentImageIndex + 1 : 0;
    scrollToImage(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : product.image.length - 1;
    scrollToImage(prevIndex);
  };

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="min-h-screen">
        <main className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The product you're looking for doesn't exist.
            </p>
            <Link href="/products">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="md:px-10 bg-gray-50 min-h-screen">
      <main>
        {/* Breadcrumb */}
        <section className="py-6 px-4">
          <div className="container mx-auto">
            <Link
              href="/products"
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Product Image */}
              <div className="space-y-4">
                {/* Main Image with Navigation */}
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-muted">
                  {product.image.length > 1 ? (
                    <>
                      <div
                        ref={scrollContainerRef}
                        className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                        style={{
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                        }}
                      >
                        {product.image.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${product.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover shrink-0 snap-center"
                          />
                        ))}
                      </div>
                      {/* Navigation Arrows */}
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-md"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-md"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {product.image.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => scrollToImage(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-primary scale-125"
                                : "bg-background/60 hover:bg-background"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <img
                      src={product.image[0]}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {product.overview}
                </p>

                {/* Quick Contact */}
                <div className="bg-accent p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-5 h-5 text-primary" />
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <a
                          href="tel:+918850409725"
                          className="hover:text-primary transition-colors"
                        >
                          +91 8850409725
                        </a>
                        <span className="hidden sm:inline">/</span>
                        <a
                          href="tel:+919892279517"
                          className="hover:text-primary transition-colors"
                        >
                          +91 9892279517
                        </a>
                      </div>
                    </div>
                    <a
                      href="mailto:aryaengineeringwork24@gmail.com"
                      className="flex items-center text-gray-700 hover:text-gray-800 transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-3" />
                      aryaengineeringwork24@gmail.com
                    </a>
                  </div>
                </div>

                <a href="/contact">
                  <Button size="lg" className="w-full">
                    Request a Quote
                  </Button>
                </a>
              </div>
            </div>

            {/* Specifications, Features, Applications */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                  <CardDescription>
                    Technical details and standards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span className="font-medium">
                          <span className="font-semibold">{spec.label}</span>:{" "}
                          {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Features</CardTitle>
                  <CardDescription>Key product advantages</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Applications */}
              <Card>
                <CardHeader>
                  <CardTitle>Applications</CardTitle>
                  <CardDescription>Common usage scenarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.applications.map((application, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA Banner */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 mb-16 text-center">
              <p className="text-lg text-gray-600">{product.cta}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
