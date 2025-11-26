import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuSquareCheckBig } from "react-icons/lu";

const ServicesSection = () => {
  const services = [
    "High Pressure Ball Valves",
    "Industrial Hardware Solutions",
    "Custom Fittings & Assemblies",
    "Electrical Components Supply",
    "Needle Valves & T Elbows",
    "Wiper Motors & OEM Parts",
  ];

  return (
    <section className="px-6 py-12 md:px-10 md:py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT PART */}
          <div>
            <p className="text-yellow-500 font-semibold text-lg mb-4 tracking-wider">
              Arya Engineering Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Leading Suppliers of Industrial Engineering Components
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our industrial components find usage in critical applications
              across manufacturing plants, construction sites, industrial
              facilities, and more. We supply high-quality valves, fittings, and
              electrical components that can be custom configured and supplied
              with certification as required by our customers.
            </p>

            {/* SERVICES LIST */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <LuSquareCheckBig className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="font-semibold text-md bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
                >
                  View Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-500 text-gray-800 text-md bg-transparent font-semibold hover:bg-gray-300 cursor-pointer"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/hero/services-hero.jpg"
                alt="Industrial engineering components and valves"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
