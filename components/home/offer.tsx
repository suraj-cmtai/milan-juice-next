"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imgImage15 = "/images/fruits-juices-bg.png";

export default function Offer() {
  return (
    <section
      className="relative w-full py-8 px-2 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(252.417deg, #fff 0%, #fbDEDE 98.962%)",
      }}
    >
      {/* Background image, full width */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div
          className="w-full h-full opacity-30 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${imgImage15}')` }}
          aria-hidden="true"
        />
      </div>
      {/* Main content inside max-w-7xl */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center z-10 py-8 px-2 sm:px-6">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-outfit font-bold text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 leading-tight"
          style={{
            background:
              "linear-gradient(106.779deg, #DB3A43 14.347%, #5E0D10 99.019%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get Extra 5% OFF
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-outfit text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl text-black mb-2"
        >
          on your first purchase
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-outfit text-center text-base sm:text-lg md:text-xl text-black mb-6"
        >
          your coupon code
        </motion.p>
        {/* Order Now Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gradient-to-r from-[#921D31] to-[#FE5D5C] text-[#f2f2f2] font-outfit font-bold text-base sm:text-lg px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition cursor-pointer mt-2"
        >
          Order Now
        </motion.button>
      </div>
    </section>
  );
}
