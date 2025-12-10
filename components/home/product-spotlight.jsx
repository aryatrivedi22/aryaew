import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuSquareCheckBig } from "react-icons/lu";

const ProductSpotlight = () => {
  const services = [
    "Heavy Lifting Jacks",
    "Storage Tank Jacking Systems",
    "12 MT Hydraulic Tank Jacks",
    "18 MT Hydraulic Tank Jacks",
    "25 MT Hydraulic Tank Jacks",
    "Jacks for Floating Roof Tanks",
    "Hydraulic Double Acting Jacks",
    ,
  ];

  return (
    <section className="px-6 py-12 md:px-10 md:py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE PART */}
          <div>
            <p className="text-[#708c98] font-semibold text-lg mb-4 tracking-wider">
              ARYA ENGINEERING WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Leading Manufacturer of Hydraulic Jacking Systems
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our hydraulic jacks are engineered for critical performance across
              high-demand sectors, including Hydro Power Plants, Thermal Power
              Plants, Defense, Aerospace, and Railways. At Arya Engineering
              Works, every jack can be custom-configured to your specifications
              and supplied with necessary certifications, ensuring safety and
              compliance for every project
            </p>

            {/* SERVICES LIST */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <LuSquareCheckBig className="w-6 h-6 text-[#708c98] shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="font-semibold text-md bg-[#708c98] hover:bg-[#708c98] cursor-pointer"
                >
                  Read More
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-500 text-gray-800 text-md bg-transparent font-semibold cursor-pointer"
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
                src="/hero/service-spotlight.webp"
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

export default ProductSpotlight;
