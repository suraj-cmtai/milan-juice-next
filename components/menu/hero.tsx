"use client";

import { motion } from "framer-motion";

const fruitBorderBg = "/videos/fruit-border-bg.mp4";

export default function MenuHero() {
  return (
    <section
      className="relative w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh] flex items-center justify-center overflow-hidden"
      aria-label="Menu Hero Section"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source src={fruitBorderBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}}
          className="font-agbalumo text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-clip-text text-transparent select-none leading-tight"
          style={{
            backgroundImage:
              "linear-gradient(115deg, #000 32%, #DB3A43 89%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Menu
        </motion.h1>
      </div>
    </section>
  );
}
