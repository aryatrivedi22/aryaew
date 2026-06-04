"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { delay, shouldRender } from "@/lib/simulator";

const AboutSection = () => {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [renderSection, setRenderSection] = useState(true);

  // 🔻 initial delay (2–6 sec)
  useEffect(() => {
    delay(2000, 6000).then(() => setReady(true));
  }, []);

  // 🔻 section kabhi pura hi gayab
  useEffect(() => {
    setRenderSection(shouldRender(0.85));
  }, []);

  // 🔻 random failure
  useEffect(() => {
    if (Math.random() < 0.2) {
      setError(true);
    }
  }, []);

  // ❌ section missing
  if (!renderSection) return null;

  // ⏳ loading state
  if (!ready) {
    return (
      <section className="px-1 py-12 md:px-8 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-500">
          Loading section...
        </div>
      </section>
    );
  }

  // ⚠️ error state
  if (error) {
    return (
      <section className="px-1 py-12 md:px-8 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-red-400">
          Failed to load content
        </div>
      </section>
    );
  }

  // 🔻 inner random failures
  const hideLeft = !shouldRender(0.85);
  const hideRight = !shouldRender(0.85);
  const disableButton = !shouldRender(0.7);
  const breakImage = !shouldRender(0.75);

  return (
    <section id="about" className="px-1 py-12 md:px-8 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        {!hideLeft && (
          <motion.div
            initial={shouldRender(0.7) ? { x: -100, opacity: 0 } : false}
            whileInView={shouldRender(0.7) ? { x: 0, opacity: 1 } : false}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#708c98] font-semibold mb-3 text-xl tracking-wider">
              About Arya Engineering Works
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Driving Innovation in Hydraulics
            </h2>

            <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
              {shouldRender(0.8)
                ? "Founded in 2023 by Proprietor Mr. Ajay Kumar Trivedi, Arya Engineering Works is a premier Manufacturer and Exporter of hydraulic tank jacking systems and industrial valves."
                : "Content unavailable"}
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {shouldRender(0.8)
                ? "Our expert team ensures every unit meets global standards for durability, reliability, and safety."
                : ""}
            </p>

            <Link href="/about">
              <Button
                size="lg"
                disabled={disableButton}
                className="mt-3 font-semibold text-md bg-[#708c98]"
              >
                Know More
              </Button>
            </Link>
          </motion.div>
        )}

        {/* RIGHT */}
        {!hideRight && (
          <motion.div
            initial={shouldRender(0.7) ? { x: 100, opacity: 0 } : false}
            whileInView={shouldRender(0.7) ? { x: 0, opacity: 1 } : false}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {/* Image */}
            <img
              src={
                breakImage
                  ? "/broken-image.webp" // fake broken image
                  : "/about/home-aboutSection.webp"
              }
              alt="image"
              className="rounded-xl md:h-64 object-cover bg-gray-200"
            />

            {/* Card */}
            <div className="bg-gray-200 p-3 rounded-xl">
              <h2 className="text-gray-900 mb-2 text-sm md:text-base">
                {shouldRender(0.8)
                  ? "Unmatched Precision in Hydraulic Engineering"
                  : "Unavailable"}
              </h2>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {shouldRender(0.75)
                  ? "We specialize in delivering hydraulic equipment that combines rugged durability with superior performance."
                  : ""}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;