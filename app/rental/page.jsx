"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Mail } from "lucide-react";

const Rental = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const quickNavigation = [
    {
      title: "High Pressure Valve Systems Rental for Industrial Projects",
      sectionId: "valves",
    },
    {
      title: "Wiper Motor and Electrical Components Rental Option",
      sectionId: "motors",
    },
    {
      title: "Industrial Hardware and Fittings Rental Package",
      sectionId: "hardware",
    },
    {
      title: "Custom Assemblies and T-Elbows Rental for Bulk Orders",
      sectionId: "assemblies",
    },
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold text-white">
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
      <div className="container mx-auto px-4 pb-20">
        {/* High Pressure Valve Systems */}
        <section id="valves" className="mb-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-2">
              High Pressure Valve Systems
            </h2>
            <p className="text-2xl font-semibold text-primary mb-6">
              Rental scheme for Industrial and EPC contractors
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you get orders, we will support you with an easy rental
                  package for your industrial projects.
                </p>

                <p className="text-muted-foreground">
                  Exclusive 2024 Rental scheme for Arya Engineering Works
                  customers.
                </p>

                <p className="text-muted-foreground">
                  Now you can avail easy rentals for your industrial projects
                  with premium quality valve systems. We support installations
                  as per industry standards and codes.
                </p>

                <p className="text-muted-foreground">
                  It will benefit you to reduce your capital investment and
                  optimize resources effectively.
                </p>

                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Rental Valve System Availability
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        High Pressure Ball Valves (Various Sizes)
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Needle Valves for Precision Control
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Complete Valve Assemblies with Accessories
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    (All valves with required system accessories and testing
                    certificates)
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Area of Working - Valve Rental Business
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">PAN INDIA</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Mumbai and Maharashtra Region
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Major Industrial Hubs
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground font-medium mt-6">
                  Procedure to Procurement: Contact us or call us
                </p>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/products/ball-valve.jpg"
                  alt="High Pressure Ball Valves"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wiper Motors and Electrical Components */}
        <section id="motors" className="mb-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Wiper Motors and Electrical Components
            </h2>
            <p className="text-2xl font-semibold text-primary mb-6">
              Rental Option for Industrial Applications
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Arya Engineering Works offers specially designed compact
                  electrical component rental packages for various industrial
                  applications. Our rental options are popular due to their
                  reliability and cost-effectiveness.
                </p>

                <p className="text-muted-foreground">
                  The configuration offered meets industry standards and is one
                  of the most practical designs for various industrial
                  automation needs.
                </p>

                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Features:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Compact and efficient motor designs
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Premium quality electrical components
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Complete wiring and control panels
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Safety certified and tested components
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Easy installation and maintenance support
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Area of Working - Motors Rental Business
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">PAN INDIA</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Mumbai and Maharashtra Region
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Major Industrial Areas
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground font-medium mt-6">
                  Procedure to Procurement: Contact us or call us
                </p>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/products/wiper-motors.jpg"
                  alt="Wiper Motors and Electrical Components"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Hardware and Fittings */}
        <section id="hardware" className="mb-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Industrial Hardware and Fittings
            </h2>
            <p className="text-2xl font-semibold text-primary mb-6">
              Rental Package for Bulk Requirements
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/products/industrial-hardware.jpg"
                  alt="Industrial Hardware"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  A comprehensive industrial hardware rental solution can
                  greatly benefit both contractors and project owners. Our
                  rental packages optimize resource utilization and reduce
                  capital investment.
                </p>

                <p className="text-muted-foreground">
                  Optimized inventory management – Get the exact hardware you
                  need, when you need it. Save time, resources, and effort while
                  ensuring project efficiency.
                </p>

                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Available Hardware:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        T-Elbows and Pipe Fittings
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Custom Fittings and Assemblies
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Industrial Grade Fasteners
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Specialized Connection Systems
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Assemblies */}
        <section id="assemblies" className="mb-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Custom Assemblies and Specialized Components
            </h2>
            <p className="text-2xl font-semibold text-primary mb-6">
              Rental Option for Project-Specific Requirements
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Infrastructure contractors, industrial maintenance teams, and
                  project managers - we offer the best custom assembly solutions
                  for your projects on a rental basis.
                </p>

                <p className="text-muted-foreground">
                  Customers can complete installations, maintenance, and
                  modifications with our specialized components and safe working
                  practices.
                </p>

                <p className="text-muted-foreground">
                  We are offering premium quality equipment and giving you
                  solutions with custom-designed assemblies on a rental basis.
                </p>

                <p className="text-muted-foreground">
                  We have extensive inventory for rental purposes, duly
                  maintained and quality tested with proper certifications.
                  Quality and reliability are our top priorities.
                </p>

                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Area of Working - Assembly Rental Business
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">PAN INDIA</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        Mumbai and Maharashtra Region
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">
                        All Major Industrial Zones
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground font-medium mt-6">
                  Procedure to Procurement: Contact us or call us
                </p>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="products/electrical-components.jpg"
                  alt="Custom Assemblies"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

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
              Call: 8850409725 / 9892279517
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Mail className="w-5 h-5" />
              Email Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rental;
