"use client";

import { motion } from "framer-motion";

const imgImage5 = "/images/juice-floating.png";

const aboutPoints = [
  {
    emoji: "🍊",
    text: "Blending the freshest fruits",
  },
  {
    emoji: "🍇",
    text: "Crafting unforgettable flavors",
  },
  {
    emoji: "🍓",
    text: "Serving generations with care",
  },
];

export default function About() {
  return (
    <section className="relative w-full bg-white min-h-[80vh] py-2 px-4 flex justify-center items-center overflow-hidden z-10" id="about">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left: Video & Image */}
        <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 max-w-md min-w-[220px]">
          {/* Fruits falling video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden"
          >
            <video
              src="/videos/fruits-falling.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
            {/* Wave image at the very back */}
            <div
              className="absolute right-0 bottom-0 w-full h-24 md:h-40 opacity-70 z-15 pointer-events-none"
              style={{
                backgroundImage: `url('${imgImage5}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: "scaleX(-1)",
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-20 flex-1 max-w-2xl mx-auto flex flex-col items-start justify-center"
        >
          <h2
            className="font-agbalumo text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-left leading-tight"
            style={{
              background:
                "linear-gradient(103.62deg, #DB3A43 14.35%, #5E0D10 99.02%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            About Us
          </h2>
          <div className="space-y-4 w-full">
            <p className="font-outfit font-extrabold text-base sm:text-lg md:text-xl text-black">
              Since opening our doors in 1990, Milan Juice Centre has been on a mission to serve nature's freshness with love.
            </p>
            <p className="font-outfit text-sm sm:text-base md:text-lg text-black">
              For over 35 years, we've been more than just a juice stop. We've been a part of everyday stories — from quick refreshment breaks to cherished memories with loved ones. With every glass, we pour in not only juice but also our passion, purity, and trust.
            </p>
            <ul className="font-outfit text-sm sm:text-base md:text-lg text-black list-none space-y-1">
              {aboutPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">{point.emoji}</span>
                  <b>{point.text}</b>
                </li>
              ))}
            </ul>
            <p className="font-outfit text-sm sm:text-base md:text-lg text-black">
              Join us in celebrating a legacy of freshness, flavor, and community — one sip at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
