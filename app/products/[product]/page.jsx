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
import { getProductById } from "@/app/data/products";
import { ArrowLeft, CheckCircle2, Phone, Mail } from "lucide-react";
import Link from "next/link";

const ProductDetail = () => {
  const productId = useParams().product;
  console.log(productId);

  const product = getProductById(productId || "");

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
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {product.description}
                </p>

                {/* Quick Contact */}
                <div className="bg-accent p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:8850409725"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-5 w-5 mr-3" />
                      8850409725 / 9892279517
                    </a>
                    <a
                      href="mailto:aryaengineeringwork24@gmail.com"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-3" />
                      aryaengineeringwork24@gmail.com
                    </a>
                  </div>
                </div>

                <a href="#inquiry-form">
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
                        <span>{spec}</span>
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
