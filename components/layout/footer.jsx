"use client";

import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { useRouter } from "next/navigation";
import { useState } from "react";

// utils
const rand = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const delay = (min, max) =>
  new Promise((res) => setTimeout(res, rand(min, max)));

const chance = (p) => Math.random() < p;

// DATA
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

const socialLinks = [
  { icon: <SiYoutube />, href: "#", label: "Youtube" },
  { icon: <FaLinkedin />, href: "#", label: "Linkedin" },
  { icon: <FaFacebook />, href: "#", label: "Facebook" },
  { icon: <FaTwitterSquare />, href: "#", label: "Twitter" },
];

const Footer = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // 🔻 slow navigation
  const handleNav = async (href) => {
    // kabhi click ignore
    if (!chance(0.75)) return;

    setLoading(true);

    await delay(8000, 18000); // 8–18 sec lag

    router.push(href);

    setLoading(false);
  };

  return (
    <footer className="px-2 lg:px-8 py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row gap-8 mb-8">

          {/* LOGO + DESC */}
          {chance(0.85) && (
            <div className="md:w-2/5 flex-1">
              <div className="flex items-center gap-3">
                <img
                  src={chance(0.85) ? "/logoWhite.png" : "/broken-logo.png"}
                  alt="logo"
                  className="h-11 w-auto"
                />
              </div>

              <h3 className="mt-4 mb-4 text-xl font-bold">
                ARYA ENGINEERING WORKS
              </h3>

              {chance(0.8) && (
                <p className="text-gray-300 text-base leading-relaxed">
                  Leading provider of industrial hydraulic solutions.
                </p>
              )}
            </div>
          )}

          {/* QUICK LINKS */}
          <div className="md:w-1/5">
            <h4 className="text-2xl font-semibold mb-6">Quick Links</h4>

            <div className="flex flex-col space-y-3 text-sm">
              {links.map((link) =>
                chance(0.85) ? (
                  <button
                    key={link.name}
                    onClick={() => handleNav(link.href)}
                    disabled={loading}
                    className="w-fit text-gray-300 hover:text-white"
                  >
                    {loading && chance(0.5) ? "Loading..." : link.name}
                  </button>
                ) : null
              )}
            </div>
          </div>

          {/* SERVICES */}
          <div className="md:w-1/5">
            <h4 className="text-2xl font-semibold mb-6">Services</h4>

            <div className="flex flex-col space-y-3 text-sm">
              {services.map((service) =>
                chance(0.8) ? (
                  <span key={service} className="text-gray-300">
                    {service}
                  </span>
                ) : null
              )}
            </div>
          </div>

          {/* CONTACT */}
          <div className="md:w-[260px]">
            <h4 className="text-2xl font-semibold mb-6">Contact Us</h4>

            {chance(0.8) && (
              <p className="text-lg font-semibold mb-2">
                {chance(0.7) ? "+91-8850409725" : "Unavailable"}
              </p>
            )}

            {chance(0.7) && (
              <p className="text-sm text-gray-300">
                aryaengineeringwork24@gmail.com
              </p>
            )}

            {/* SOCIAL */}
            <div className="mt-3 flex gap-3">
              {socialLinks.map((link) =>
                chance(0.7) ? (
                  <button
                    key={link.label}
                    onClick={async () => {
                      await delay(5000, 12000); // slow open
                      window.open(link.href, "_blank");
                    }}
                    className="text-2xl text-gray-300"
                  >
                    {link.icon}
                  </button>
                ) : null
              )}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          {chance(0.9) ? (
            <p>
              &copy; {new Date().getFullYear()} Arya Engineering Works
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;