"use client";
import { motion } from "motion/react";

const CTASection = () => {
  return (
    <section className="w-full pb-24 pt-8 px-10 bg-gray-100">
      <motion.a
        initial={{ scale: 0.8, opacity: 0 }} // Start 100px left and invisible
        whileInView={{ scale: 1, opacity: 1 }} // Animate to final position
        transition={{ duration: 0.4 }} // Animation duration and easing
        viewport={{ once: true }}
        href="/products"
        className="flex w-full bg-linear-to-tr from-[#708c98] via-[#708c98]/80 to-[#708c98]/50 py-6 px-4 shadow transition-all duration-300 hover:shadow-2xl rounded-xl group"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white transition-all duration-300 group-hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] tracking-wide">
            Premium Industrial Engineering Components & Custom Solutions for
            Your Business
          </h2>
        </div>
      </motion.a>
    </section>
  );
};

export default CTASection;
