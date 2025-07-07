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
    <section className="relative w-full h-auto  bg-[#fbdede] overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto h-auto ">
        
        {/* Decorative Images */}
        <img
          src={watermelon}
          alt=""
          className="absolute left-0 top-0 w-20 sm:w-28 md:w-40 lg:w-56 xl:w-80 h-auto z-10"
          aria-hidden="true"
        />
        <img
          src={juiceDripping}
          alt=""
          className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 lg:w-48 xl:w-64 h-auto z-10"
          aria-hidden="true"
        />
        <img
          src={strawberries}
          alt=""
          className="absolute right-2 bottom-2 sm:right-4 sm:bottom-4 w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36 h-auto z-30"
          aria-hidden="true"
        />

        {/* Mobile Background Shake Image */}
        <div className="lg:hidden absolute inset-0 flex items-center justify-center z-0">
          <img
            src={strawberryShake}
            alt="Strawberry shake background"
            className="w-90 h-90 object-contain opacity-30"
            aria-hidden="true"
          />
        </div>

        {/* Main Content Layout */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between py-8 lg:py-0 px-4 sm:px-6 lg:px-8 lg:min-h-[90vh]">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-start lg:justify-center text-left lg:pr-8 md:ml-16 xl:pr-12 order-2 lg:order-1 mt-16 lg:mt-0 xl:ml-16"
          >
            <h1
              className="font-agbalumo text-6xl 2xl:text-7xl leading-tight mb-6 sm:mb-8"
              style={{
                background:
                  "linear-gradient(100.6deg, #DB3A43 14.35%, #5E0D10 99.02%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Freshness in Every
              <br />
              Sip with Milan
              <br />
              Juice
            </h1>
            
            <div className="mt-2 xl:ml-16">
              <GradientButton icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}>
                Explore Our Flavours
              </GradientButton>
            </div>
          </motion.div>
          
          {/* Right Column - Shake Image (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="hidden lg:flex flex-1 items-center justify-center lg:justify-end order-1 lg:order-2"
          >
            <img
              src={strawberryShake}
              alt="Strawberry shake"
              className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 h-auto relative"
              style={{ 
                marginTop: '3rem',
                marginRight: '0.5rem'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}