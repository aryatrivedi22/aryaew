import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import Link from "next/link";

// QUICK LINKS AND SERVICES
const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];
const services = [
  "Hydraulic Engineering",
  "Custom Solutions",
  "Maintenance & Support",
  "Consultation Services",
];
// SOCIAL LINKS
const socialLinks = [
  {
    icon: <SiYoutube />,
    href: "https://www.youtube.com/AryaEngineeringWorks",
    label: "Youtube",
    hoverColor: "hover:text-red-600",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/",
    label: "Linkedin",
    hoverColor: "hover:text-blue-700",
  },
  {
    icon: <FaFacebook />,
    href: "https://facebook.com/",
    label: "Facebook",
    hoverColor: "hover:text-sky-500",
  },
  {
    icon: <FaTwitterSquare />,
    href: "https://x.com/",
    label: "Twitter",
    hoverColor: "hover:text-sky-500",
  },
];
const Footer = () => {
  return (
    <footer className="px-2 lg:px-8 py-8 bg-gray-800 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row gap-8 mb-8">
          {/* lOGO AND DESC */}
          <div className="md:w-2/5 flex-1">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Arya Engineering Works"
                className="h-11 w-auto"
                loading="lazy"
              />
            </Link>
            <h3 className="mt-4 mb-4 text-xl font-bold">
              ARYA ENGINEERING WORKS
            </h3>
            <p className="text-primary-foreground/80 text-base leading-relaxed">
              Leading provider of industrial hydraulic solutions. Quality,
              reliability, and precision engineering.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:w-1/5">
            <h4 className="relative text-2xl font-semibold mb-7">
              Quick Links
              <span className="absolute left-4 -bottom-2 w-8 h-0.5 bg-yellow-600 rounded-full -translate-x-1/2" />
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES LINKS */}
          <div className="md:w-1/5">
            <h4 className="relative text-2xl font-semibold mb-7">
              Services
              <span className="absolute left-4 -bottom-2 w-8 h-0.5 bg-yellow-600 rounded-full -translate-x-1/2" />
            </h4>
            <div className="space-y-3 text-sm">
              {services.map((service) => (
                <p
                  key={service}
                  className="w-fit text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all cursor-pointer"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className="md:w-1/5">
            <h4 className="relative text-2xl font-semibold mb-7">
              Contact Us
              <span className="absolute left-4 -bottom-2 w-8 h-0.5 bg-yellow-600 rounded-full -translate-x-1/2" />
            </h4>
            {/* NUMBERS */}
            <p className="text-xl font-semibold text-primary-foreground mb-2">
              +91-8850409725 <br /> +91-9892279517
            </p>
            <p className="text-md text-primary-foreground/80 leading-relaxed">
              <a
                href="mailto:aryaengineeringwork24@gmail.com"
                className="lg:ml-1 underline hover:text-primary-foreground inline-block max-w-full wrap-break-word whitespace-normal"
              >
                aryaengineeringwork24@gmail.com
              </a>
            </p>
            {/* Social Icons */}
            <div className="mt-2 flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className={`text-2xl mr-4 mt-4 inline-block text-primary-foreground/80 ${link.hoverColor} transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Arya Engineering Works. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
