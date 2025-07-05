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
          className="absolute right-0 top-0 w-24 md:w-3/4 max-w-xs sm:max-w-xs h-auto z-10 select-none pointer-events-none hidden md:block"
          aria-hidden="true"
        />
        {/* Mobile BG Shake */}
        <div className="absolute inset-0 flex md:hidden items-end justify-center z-0 pointer-events-none">
          <img
            src={strawberryShake}
            alt="Strawberry shake background"
            className="w-3/4 max-w-xs opacity-50 mb-8"
            aria-hidden="true"
          />
        </div>
        {/* Main Content */}
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 gap-4 md:gap-0 z-20 md:left-1/9">
          {/* Centered Text and Button on mobile, left-aligned on md+ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center md:items-start justify-center w-full max-w-2xl text-center md:text-left"
          >
            <h1
              className="font-agbalumo text-2xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 sm:mb-8"
              style={{
                background:
                  "linear-gradient(100.6deg, #DB3A43 14.35%, #5E0D10 99.02%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Freshness in Every{"\n"}Sip with Milan Juice
            </h1>
            <div className="mt-2 flex flex-col items-center md:items-start w-full">
              <GradientButton icon={<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />}>
                Explore Our Flavours
              </GradientButton>
            </div>
          </motion.div>
          {/* Right: Shake */}
          <div className="flex-1 flex items-end justify-end w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg min-w-[180px] relative right-1">
            {/* On mobile, hide shake in foreground; on md+, show as before */}
            <img
              src={strawberryShake}
              alt="Strawberry shake"
              className="hidden md:block w-full max-w-[220px] sm:max-w-xs md:max-w-md lg:max-w-lg h-auto z-20 relative"
            />
          </div>
        </div>
        {/* Strawberries in the bottom right corner, always visible */}
        <img
          src={strawberries}
          alt="Strawberries"
          className="absolute right-0 bottom-0 w-16 sm:w-24 md:w-28 lg:w-36 h-auto z-30 pointer-events-none select-none"
          style={{ marginRight: '1rem', marginBottom: '1rem' }}
        />
      </div>
    </section>
  );
}
