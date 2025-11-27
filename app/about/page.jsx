import CTASection from "@/components/home/cta";
import Image from "next/image";

const About = () => {
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

      <div className="px-2 md:px-10">
        {/* Company History Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Company History & Excellence
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Established in 1996, Arya Engineering Works has carved a
                  respectable niche for itself as a manufacturer, supplier and
                  exporter of industrial hydraulic systems and valves. Our
                  commitment to excellence has made us a leader in providing
                  premium industrial engineering components.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With decades of experience, we have built a reputation for
                  delivering products known for their fine quality and finish,
                  accurate dimensions and designs, durability, reliability and
                  precision engineering. We are your reliable and experienced
                  hydraulic equipment partner around the world.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  width={800}
                  height={500}
                  src="/about/industrial-hardware.jpg"
                  alt="Industrial Components"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Excellence Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
                <Image
                  width={800}
                  height={500}
                  src="/about/ball-valve.jpg"
                  alt="Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Manufacturing Excellence
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Our manufacturing facility utilizes advanced technologies and
                  quality control processes to ensure every product meets the
                  highest industry standards. We maintain strict quality checks
                  at every stage of production.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  From high-pressure ball valves to custom fittings and
                  assemblies, each component is crafted with precision
                  engineering. Our ISO-certified processes ensure consistent
                  quality and reliability that our clients trust worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Solutions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Custom Solutions & Engineering
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  When standard products don't meet your specific requirements,
                  our experienced engineering team can design and manufacture
                  custom solutions tailored to your exact specifications. We
                  work closely with clients to understand their unique needs.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our expertise spans across various industrial applications
                  including hydraulic systems, electrical components, and
                  specialized fittings. We pride ourselves on delivering
                  innovative solutions that exceed expectations.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  width={800}
                  height={500}
                  src="/about/custom-fittings.jpg"
                  alt="Custom Solutions"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Global Reach Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
                <Image
                  width={800}
                  height={500}
                  src="/about/oem-supply.jpg"
                  alt="Global Operations"
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Quality Assurance & Global Reach
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Quality is at the heart of everything we do. Our comprehensive
                  quality assurance program ensures that every product leaving
                  our facility meets stringent international standards. We are
                  committed to maintaining the highest levels of precision and
                  reliability.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Serving clients worldwide, we have established ourselves as a
                  trusted partner for industrial hydraulic solutions. Our global
                  reach combined with local expertise enables us to provide
                  comprehensive support and service wherever you need it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTASection />
    </div>
  );
};

export default About;
