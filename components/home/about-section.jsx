import { Check, Handshake } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const products = [
  "High Pressure Ball Valves",
  "Electrical Components",
  "Needle Valves",
  "Industrial Hardware",
  "T Elbows",
  "Custom Fittings & Assemblies",
  "Wiper Motors",
  "OEM Supply & B2B Bulk Orders",
];

// ABOUT SECTION COMPONENT FOR HOME PAGE
const AboutSection = () => {
  return (
    <section id="about" className="px-1 py-12 md:px-8 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT side */}
        <div>
          <p className="text-yellow-600 font-semibold mb-3 text-sm tracking-wider">
            WHO WE ARE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-7">
            Ultimate Quality Engineering Solutions
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            ARYA Engineering Works, under the proprietorship of Ajay Kumar
            Trivedi, stands as a reliable and experienced supplier of
            specialized engineering components and industrial hardware. Based in
            the major industrial hub of Mumbai, Maharashtra, we have built our
            reputation on a foundation of Quality Products and unwavering
            commitment to client satisfaction.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We leverage our expertise to ensure On-time Delivery and offer a
            comprehensive range of products including High-Pressure Ball Valves,
            Needle Valves, Wiper Motors, and essential Electrical Components.
            Our ability to handle OEM Supply & B2B Bulk Orders along with Custom
            Fittings & Assemblies makes us a versatile and dependable source,
            dedicated to providing high-quality solutions for industry leaders.
          </p>
          <Link href="/about">
            <Button
              size="lg"
              className="mt-2 md:mt-4 font-semibold text-md bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
            >
              Know More
            </Button>
          </Link>
        </div>

        {/* RIGHT side */}
        <div className="bg-gray-300 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            We deal in a wide range of products including:
          </h3>
          <ul className="space-y-4 list-none m-0 p-0">
            {products.map((product) => (
              <li key={product} className="flex items-center gap-3">
                <Check className="text-yellow-700" aria-hidden="true" />
                <span className="text-gray-700 text-lg">{product}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
