import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import products from "@/app/data/products";
import { ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-linear-to-r from-primary via-primary/90 to-primary/70 py-20 px-4 min-h-[350px] flex items-center">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
              OUR PRODUCTS
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Premium Industrial Engineering Components for Every Application
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 md:px-10 bg-gray-100">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={product.image[0]}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/products/${product.id}`}>
                      <Button className="w-full group">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-200 py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
              We specialize in custom solutions. Contact us to discuss your
              specific requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
