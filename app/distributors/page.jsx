import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Download } from "lucide-react";
import CTASection from "@/components/home/cta";

const Distributor = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-primary/95 to-gray-700/90 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069')",
            }}
          />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              DISTRIBUTORS
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 md:px-12">
          <div className="container mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Appointing Distributors Across India
              </h2>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  We are excited to welcome new partners who can help grow our
                  mutual businesses. Our goal is to ensure that our high-quality
                  industrial components reach our clients on schedule. We also
                  guarantee that end users have access to local support whenever
                  they need assistance with our products.
                </p>

                <p className="text-lg leading-relaxed">
                  As a distributor in your region, we provide comprehensive
                  training for you and your staff about our product range,
                  including valves, fittings, electrical components, and custom
                  assemblies. Beyond this, we offer attractive benefits
                  including competitive price discounts on bulk orders, priority
                  shipping, technical support, and assistance with local
                  marketing events.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Interested Partners from Geographical Areas:
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">1.</span>
                    <span className="text-gray-700">
                      Maharashtra & Mumbai Region
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">2.</span>
                    <span className="text-gray-700">
                      Gujarat & Western India
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">3.</span>
                    <span className="text-gray-700">
                      Delhi NCR & Northern India
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">4.</span>
                    <span className="text-gray-700">
                      Karnataka & Southern India
                    </span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">5.</span>
                    <span className="text-gray-700">
                      West Bengal & Eastern India
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">6.</span>
                    <span className="text-gray-700">
                      Rajasthan & Central India
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">7.</span>
                    <span className="text-gray-700">
                      Tamil Nadu & Chennai Region
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">8.</span>
                    <span className="text-gray-700">
                      Other Indian States & Territories
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Questionare section */}
            <div className="mt-12 bg-gray-200 p-8 rounded-lg">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Interested companies are welcome to download our distributor
                questionnaire form from the link below and send it to us via
                email. Our team will review your application and get back to you
                within 3-5 business days.
              </p>

              {/* Download BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="https://docs.google.com/document/d/1gOskHaRVaRfQynK4cdGRIOMd3TYs0SzR/edit?usp=drive_link&ouid=114103550146510230680&rtpof=true&sd=true"
                  target="_blank"
                >
                  <Button
                    className="gap-2 bg-[#708c98] hover:bg-[#708c98] cursor-pointer"
                    size="lg"
                  >
                    <Download className="w-5 h-5" />
                    Download Questionnaire
                  </Button>
                </Link>
              </div>

              <div className="space-y-4 border-t border-border pt-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Contact Information
                </h4>

                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-primary" />
                  <a
                    href="mailto:aryaengineeringwork24@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    aryaengineeringwork24@gmail.com
                  </a>
                </div>

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
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  );
};

export default Distributor;
