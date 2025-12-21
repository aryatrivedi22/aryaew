import CTASection from "@/components/home/cta";
import {
  Award,
  Cog,
  Factory,
  Globe,
  Settings,
  Shield,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";

const About = () => {
  // CAPABILITIES
  const capabilities = [
    {
      icon: Settings,
      title: "Design and Engineering",
      description:
        "At Arya Engineering Works, innovation begins at the drawing board. Our dedicated engineering team utilizes advanced design software to create custom hydraulic circuits and lifting solutions. Whether it is complex tank jacking systems or specialized industrial valves, we focus on precision engineering to ensure maximum efficiency and safety for heavy-duty applications.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Our manufacturing facility is equipped to handle high-volume production without compromising on quality. As a leading exporter, we adhere to strict international standards. We utilize high-grade materials and modern machining technologies to fabricate hydraulic systems that are robust, corrosion-resistant, and built for harsh industrial environments",
    },
    {
      icon: Cog,
      title: "Assembly & Integration",
      description:
        "Precision is key in hydraulic systems. Our skilled technicians meticulously assemble every component, ensuring seamless integration between hydraulic jacks, power packs, and control valves. This attention to detail guarantees that our Special Purpose Machines (SPMs) and lifting systems operate smoothly under heavy loads.",
    },
    {
      icon: Shield,
      title: "Quality, Health, Safety & Environment (QHSE)",
      description:
        "Safety is paramount in heavy construction and marine industries. We implement rigorous Quality Assurance (QA) protocols at every stage of production. Every hydraulic tank jacking system and valve undergoes pressure testing and load analysis to ensure they meet the highest safety standards before leaving our factory.",
    },
  ];

  //  WHY CHOOSE US DATA
  const whyChooseUs = [
    {
      icon: Users,
      title: "Visionary Leadership",
      description:
        "Guided by Mr. Ajay Kumar Trivedi's extensive industry expertise.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Trusted Exporter serving international markets.",
    },
    {
      icon: Target,
      title: "Sector Expertise",
      description:
        "Specialized solutions for Tank Erection, Marine Engineering, and SPMs.",
    },
    {
      icon: Award,
      title: "Reliability",
      description:
        "Equipment designed for zero-failure performance in critical operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          fill
          loading="eager"
          src="/about/services-hero.jpg"
          alt="Arya Engineering Works"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-center text-5xl md:text-6xl font-bold text-white">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold mb-3 text-sm tracking-widest uppercase">
                About Arya Engineering Works
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Engineering Excellence in Hydraulic Solutions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded under the visionary leadership of Proprietor Mr. Ajay
                Kumar Trivedi, Arya Engineering Works has established itself as
                a premier Manufacturer and Exporter of high-performance
                hydraulic tank jacking systems and industrial valves.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We specialize in delivering robust, precision-engineered
                solutions tailored to meet the rigorous demands of the Heavy
                Construction, Marine, and Special Purpose Machine (SPM) sectors.
                With a commitment to innovation and durability, we ensure our
                clients receive equipment that stands the test of time and
                terrain.
              </p>
            </div>
            <img
              src="/about/oem-supply.jpg"
              alt="Arya Engineering Works Manufacturing"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-3 text-sm tracking-widest uppercase">
              Our Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do Best
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we deliver excellence at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-4 rounded-lg shrink-0">
                    <capability.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold mb-3 text-sm tracking-widest uppercase">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Why Partner with Arya Engineering Works?
              </h2>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/about/industrial-hardware.jpg"
                alt="Industrial Hardware"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proprietor Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/about/ajayTriwedi.webp"
                  alt="Mr. Ajay Kumar Trivedi - Proprietor"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold mb-3 text-sm tracking-widest uppercase">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Proprietor's Message
              </h2>
              <blockquote className="border-l-4 border-primary pl-6 mb-6">
                <p className="text-xl text-foreground italic leading-relaxed">
                  "At Arya Engineering Works, our mission is simple: to provide
                  the heavy engineering industry with hydraulic solutions that
                  define reliability. We don't just manufacture equipment; we
                  engineer confidence."
                </p>
              </blockquote>
              <p className="text-muted-foreground font-semibold text-lg">
                — Mr. Ajay Kumar Trivedi
              </p>
              <p className="text-muted-foreground">
                Proprietor, Arya Engineering Works
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
