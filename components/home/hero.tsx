"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GradientButton from "@/components/gradientButton";

const watermelon = "/images/watermelon.png";
const juiceDripping = "/images/juice-dripping.png";
const strawberryShake = "/images/strawberry-shake.png";
const strawberries = "/images/strawberry.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] bg-[#fbdede] overflow-hidden flex flex-col justify-center">
      <div className="relative w-full max-w-7xl mx-auto flex items-stretch min-h-[60vh]">
        {/* Decorative Images - Watermelon and Drip */}
        <img
          src={watermelon}
          alt="Watermelon splash"
          className="absolute left-0 top-0 w-28 sm:w-40 md:w-56 lg:w-80 h-auto z-10 select-none pointer-events-none"
          aria-hidden="true"
        />
        <img
          src={juiceDripping}
          alt="Juice drip"
          className="absolute right-0 top-0 w-24 sm:w-36 md:w-48 lg:w-72 h-auto z-10 select-none pointer-events-none"
          aria-hidden="true"
        />
        {/* Main Content */}
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 gap-4 md:gap-0 z-20">
          {/* Left: Text and Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 flex flex-col items-start justify-center w-full max-w-2xl"
          >
            <h1
              className="font-agbalumo text-2xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 sm:mb-8 text-left"
              style={{
                background:
                  "linear-gradient(100.6deg, #DB3A43 14.35%, #5E0D10 99.02%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Freshness in Every{"\n"}Sip with Milan Juice
            </h1>
            <div className="mt-2">
              <GradientButton icon={<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />}>
                Explore Our Flavours
              </GradientButton>
            </div>
          </motion.div>
          {/* Right: Shake and Strawberries */}
          <div className="flex-1 flex items-end justify-end w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg min-w-[180px] relative">
            <img
              src={strawberryShake}
              alt="Strawberry shake"
              className="w-full max-w-[220px] sm:max-w-xs md:max-w-md lg:max-w-lg h-auto z-20 relative"
            />
            <img
              src={strawberries}
              alt="Strawberries"
              className="absolute right-[-32px] sm:right-[-40px] bottom-[-24px] w-16 sm:w-24 md:w-28 lg:w-36 h-auto z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
