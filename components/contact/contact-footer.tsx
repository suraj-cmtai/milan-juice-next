"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/blush-bloom.png",
  "/images/mango-mastani.png",
  "/images/blueberry-juice.png",
  "/images/mulberry-malai.png",
  "/images/emerald-delight.png",
  "/images/jamun-juice.png",
  "/images/melon-desire.png",
  "/images/jackfruit-milkshake.png",
  "/images/citrus-splash.png",
];

export default function ContactFooter() {
  return (
    <section className="relative w-full py-8 px-2 flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Main content inside max-w-7xl */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center z-10 py-8 px-2 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-outfit font-bold text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 text-[#5e0d10]"
        >
          #Milan Juice
        </motion.h2>
        {/* Images grid/collage */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {images.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
              className="flex items-center justify-center bg-transparent p-0 m-0"
              style={{ aspectRatio: "auto" }}
            >
              <Image
                src={src}
                alt={`Milan Juice gallery ${idx + 1}`}
                width={600}
                height={600}
                className="w-full h-auto object-contain block"
                style={{
                  background: "transparent",
                  borderRadius: 0,
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              />
            </motion.div>
          ))}
        </div>
        {/* View Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-r from-[#fe5d5c] to-[#921d31] text-[#f2f2f2] font-outfit font-bold text-base sm:text-lg px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition cursor-pointer"
        >
          View Menu
        </motion.button>
      </div>
    </section>
  );
}
