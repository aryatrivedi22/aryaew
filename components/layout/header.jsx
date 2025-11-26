"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
    { name: "RENTAL SERVICES", href: "/rental" },
    { name: "DISTRIBUTORS", href: "/distributors" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="md:px-6 h-20 flex flex-col justify-centers items-center bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container">
        {/* NAVIGATION HEADER */}
        <div className="px-4 md:px-0 flex items-center justify-between h-20">
          {/* LOGO and NAME */}
          <div className="flex flex-col md:flex-row lg:gap-5 gap-1 md:items-center">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Arya Engineering Works"
                className="h-9 md:h-11 w-auto"
                loading="lazy"
              />
            </Link>
            <span className="hidden md:flex text-3xl text-gray-300">|</span>
            <p className="text-sm md:text-md lg:text-xl text-gray-600 font-extrabold md:font-bold">
              ARYA ENGINEERING WORKS
            </p>
          </div>

          {/* DESKTOP LINKS LIST */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group text-sm font-bold text-gray-700 hover:text-yellow-600 transition-colors duration-300"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 rounded-md active:bg-blue-300 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE LINKS LIST */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col items-center p-4 space-y-2 bg-gray-800 transition-all duration-500">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-semibold text-gray-50 active:underline transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
