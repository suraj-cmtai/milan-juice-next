"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imgVector = "/images/woman-with-apple.png";

export default function ContactUs() {
  return (
    <section
      className="relative w-full min-h-[220px] sm:min-h-[320px] md:min-h-[400px] py-8 px-2 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(103.586deg, #fbDEDE 37.972%, rgba(254, 93, 92, 0.78) 100%)",
      }}
    >
      {/* Everything inside max-w-7xl */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-start justify-center z-10 py-8 px-2 sm:px-6">
        {/* Decorative vector image, right side */}
        <div className="absolute right-0 top-0 w-1/2 max-w-xl h-[40vw] max-h-[365px] z-0 pointer-events-none select-none">
          <Image
            src={imgVector}
            alt="Contact vector deco"
            width={497}
            height={365}
            className="w-full h-full object-contain"
            aria-hidden="true"
          />
        </div>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-agbalumo text-left text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 leading-tight"
          style={{
            background:
              "linear-gradient(107.159deg, #DB3A43 14.347%, #5E0D10 99.019%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </motion.h2>
        {/* You can add a contact form or contact details here as needed */}
      </div>
    </section>
  );
}
