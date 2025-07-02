"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imgImage = "/images/woman.png";
export default function Testimonial() {
  return (
    <section
      className="relative w-full py-8 px-2 flex flex-col items-center justify-center overflow-hidden z-10"
      style={{
        background:
          "linear-gradient(122.484deg, rgba(250, 202, 80, 0.8) 0%, rgba(255, 255, 255, 0) 49.519%, #FCE5A7 99.99%)",
      }}
    >
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        {/* Decorative background video: full height on left for desktop, as background for mobile */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Desktop: video on left side */}
          <video
            src="/videos/fruits-testimonial.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="
              hidden
              md:block
              absolute
              left-0
              top-0
              h-full
              w-[38vw]
              max-w-[420px]
              object-cover
              object-left
              opacity-50
              "
          />
          {/* Mobile: video as faint background */}
          <video
            src="/videos/fruits-testimonial.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="
              block
              md:hidden
              absolute
              inset-0
              w-full
              h-full
              object-cover
              opacity-30
            "
          />
          {/* Gradient overlay for mobile to keep text readable */}
          <div className="block md:hidden absolute inset-0 bg-gradient-to-r from-[#faca50cc] via-[#fff0] to-[#fce5a7] pointer-events-none" />
        </div>
        {/* Main content container */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center z-10">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-agbalumo text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8"
            style={{
              background:
                "linear-gradient(106.779deg, #DB3A43 14.347%, #5E0D10 99.019%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Testimonial
          </motion.h2>
          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-3xl mx-auto bg-white/60 border-2 border-[rgba(251,222,222,0.8)] rounded-3xl shadow-lg px-4 sm:px-8 py-8 flex flex-col items-center"
          >
            {/* Quotation */}
            <p className="font-outfit text-base sm:text-lg md:text-2xl text-black text-center mb-6 max-w-2xl mx-auto">
              "Milan juice is the best if you want to try Mulberries with cream, avocado shake, and mango shake. The dishes were carefully crafted and absolutely delicious."
            </p>
            {/* User info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Image
                src={imgImage}
                alt="Ritika profile"
                width={80}
                height={80}
                className="rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover border-4 border-white shadow-md"
              />
              <span className="font-outfit font-semibold text-lg sm:text-xl md:text-2xl text-black mt-2 sm:mt-0">
                Ritika
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
