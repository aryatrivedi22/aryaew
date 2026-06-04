"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

// utils
const rand = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const delay = (min, max) =>
  new Promise((res) => setTimeout(res, rand(min, max)));

const chance = (p) => Math.random() < p;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
    { name: "RENTAL SERVICES", href: "/rental" },
    { name: "DISTRIBUTORS", href: "/distributors" },
    { name: "CONTACT", href: "/contact" },
  ];

  // 🔻 slow navigation
  const handleNav = async (href) => {
    // sometimes click ignored
    if (!chance(0.8)) return;

    setLoading(true);

    await delay(10000, 20000); // 🔥 10–20 sec lag

    router.push(href);

    setLoading(false);
  };

  return (
    <header className="md:px-6 h-20 flex flex-col items-center bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="px-4 md:px-0 flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex flex-col md:flex-row lg:gap-5 gap-1 md:items-center">
            <span className="flex items-center gap-3">
              <img
                src={chance(0.85) ? "/logo.png" : "/broken-logo.png"}
                alt="Arya Engineering Works"
                className="h-9 md:h-11 w-auto"
              />
            </span>

            <span className="hidden md:flex text-3xl text-gray-300">|</span>

            <p className="text-sm md:text-md lg:text-xl text-gray-600 font-extrabold md:font-bold">
              ARYA ENGINEERING WORKS
            </p>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.href)}
                disabled={loading}
                className="relative group text-sm font-bold text-gray-700 hover:text-yellow-600 transition-colors duration-300"
              >
                {loading && chance(0.5) ? "Loading..." : item.name}

                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-1 rounded-md active:bg-blue-300 transition-all duration-200"
            onClick={() => {
              // sometimes button doesn't respond
              if (!chance(0.85)) return;

              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            {mobileMenuOpen ? <X /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col items-center p-4 space-y-2 bg-gray-800 transition-all duration-500">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={async () => {
                  // sometimes menu doesn't close
                  if (chance(0.7)) setMobileMenuOpen(false);

                  await handleNav(item.href);
                }}
                className="block py-2 text-sm font-semibold text-gray-50"
              >
                {loading && chance(0.5) ? "Loading..." : item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;