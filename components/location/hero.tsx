"use client";

import { motion } from "framer-motion";

const imgJuiceBanner = "/images/fruits-juices-location.png";

export default function LocationHero() {
  return (
    <section
      className="w-full bg-gradient-to-r from-[#fff] to-[#fe5d5c] border min-h-[220px] sm:min-h-[320px] md:min-h-[400px] flex items-center py-2 sm:py-4 overflow-hidden"
      aria-label="Location Hero Section"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-row items-stretch justify-between px-2 sm:px-6 gap-0">
        {/* Juice Image - Left (50%) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-start w-1/2 h-full"
        >
          <img
            src={imgJuiceBanner}
            alt="Assorted fresh juices and fruits"
            className="w-full h-full object-contain select-none"
            draggable={false}
            aria-hidden="true"
          />
        </motion.div>
        {/* Heading - Right (50%) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center w-1/2"
        >
          <h1
            className="font-agbalumo font-bold italic w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
            style={{
              letterSpacing: "0.01em",
              background: "linear-gradient(94deg, #DB3A43 14.35%, #5E0D10 99.02%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            Our Locations
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
