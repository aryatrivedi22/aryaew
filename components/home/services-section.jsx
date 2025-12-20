import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LuSquareCheckBig } from "react-icons/lu";

const ServicesSection = () => {
  const services = [
    "Hydraulic Jacking Systems (Specialized schemes for EPC Contractors)",
    "Automated SAW Girth Welding Machines (For circular shell plate welding)",
    "Dependent Car Parking Systems",
    "Diver Launch & Recovery Systems (L.A.R.S.) (For air diving operations)",
    "Hydromatic Suspended Rope Access Platforms",
  ];

  return (
    <section className="px-6 py-12 md:px-10 md:py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE IMAGE */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                width={1200}
                height={1200}
                src="/hero/services-hero.webp"
                alt="Industrial engineering components and valves"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* RIGHT SIDE PART */}
          <div>
            <p className="text-[#708c98] font-semibold text-lg mb-4 tracking-wider">
              FLEXIBLE RENTAL SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Smart & Affordable Access to Hydraulic Equipment Rentals
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Maximize your project’s cost-efficiency by renting top-tier
              machinery only when you need it. Arya Engineering Works offers a
              fleet of well-maintained, safety-certified hydraulic equipment
              ready for immediate deployment. We partner with you to ensure you
              have the right tools for the job, reducing capital expenditure
              while maintaining operational excellence.
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
                  View Rental Fleet
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-500 text-gray-800 text-md bg-transparent font-semibold cursor-pointer"
                >
                  Get Rental Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
