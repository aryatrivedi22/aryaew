"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "motion/react";

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
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Start 100px left and invisible
          whileInView={{ x: 0, opacity: 1 }} // Animate to final position
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <p className="text-[#708c98] font-semibold mb-3 text-xl tracking-wider">
            About Arya Engineering Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-7">
            Driving Innovation in Hydraulics
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Founded in 2023 by Proprietor Mr. Ajay Kumar Trivedi, Arya
            Engineering Works is a premier Manufacturer and Exporter of
            hydraulic tank jacking systems and industrial valves. We deliver
            robust, precision-engineered solutions tailored for sectors like
            Heavy Construction, Marine, and SPMs.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our expert team ensures every unit meets global standards for
            durability, reliability, and safety, making client satisfaction our
            top priority.
          </p>
          <Link href="/about">
            <Button
              size="lg"
              className="mt-2 md:mt-4 font-semibold text-md bg-[#708c98] hover:bg-[#708c98] cursor-pointer"
            >
              Know More
            </Button>
          </Link>
        </motion.div>

        {/* RIGHT side */}
        <motion.div
          initial={{ x: 100, opacity: 0 }} // Start 100px left and invisible
          whileInView={{ x: 0, opacity: 1 }} // Animate to final position
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          {/* ABOUT SECTION IMAGE */}
          <img
            src="/about/home-aboutSection.webp"
            alt="image"
            className="rounded-xl md:h-64"
          />
          <div className="bg-gray-200 p-3 rounded-xl">
            <h2 className="text-gray-900 mb-2">
              Unmatched Precision in Hydraulic Engineering
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As your global partner in industrial engineering, Arya Engineering
              Works is dedicated to powering your operations. We specialize in
              delivering hydraulic equipment that combines rugged durability
              with superior performance, ensuring your projects run smoothly
              anywhere in the world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
