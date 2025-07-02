"use client";

import { motion } from "framer-motion";

const imgJuiceBanner =
  "/images/fruits-juices-location.png";

export default function LocationHero() {
  return (
    <section
      className="w-full bg-gradient-to-r from-[#fff] to-[#fe5d5c] min-h-[90px] sm:min-h-[120px] flex items-center py-2 sm:py-4 overflow-hidden"
      aria-label="Location Hero Section"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-2 sm:px-6 gap-2 sm:gap-6">
        {/* Juice Image - Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-start w-full sm:w-1/2 h-full"
        >
          <img
            src={imgJuiceBanner}
            alt="Assorted fresh juices and fruits"
            className="w-full h-auto  object-contain select-none"
            draggable={false}
            aria-hidden="true"
          />
        </motion.div>
        {/* Heading - Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-end w-full sm:w-1/2 h-full mt-2 sm:mt-0"
        >
          <h1
            className="font-agbalumo font-bold italic text-[#8a232b] text-right w-full text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
            style={{
              letterSpacing: "0.01em",
              textShadow: "0 1px 0 #fff, 0 2px 4px #d36a6a33",
            }}
          >
            Our Locations
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
