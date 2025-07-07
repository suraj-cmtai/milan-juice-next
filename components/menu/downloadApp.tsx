"use client";
import { motion } from "framer-motion";

const imgAppStore = "/images/imgAppStore.png";
const imgPhone = "/images/imgPhone.png";
const imgPlayStore = "/images/imgPlayStore.png";

export default function DownloadApp() {
  return (
    <section className="relative w-full bg-gradient-to-r from-white to-[#fbdede] flex items-center justify-center overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-8 px-4 sm:px-10 lg:px-16 rounded-3xl border-4 border-[#fbdede] shadow-md bg-white/80 relative min-h-[28rem] md:min-h-[32rem] md:py-6 py-4">
        {/* Left: Text and Store Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center py-8
            items-center text-center
            md:items-start md:text-left"
        >
          <h2 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4">
            Download the app now!
          </h2>
          <p className="font-outfit font-medium text-base sm:text-lg md:text-xl text-black mb-6 max-w-md">
            Experience online ordering only on the Milan Juice app
          </p>
          <div className="flex flex-row items-center gap-4 justify-center md:justify-start w-full">
            <a href="#" tabIndex={0} aria-label="Download on the App Store">
              <img
                src={imgAppStore}
                alt="App Store"
                className="h-14 w-auto md:h-20 select-none pointer-events-auto"
                draggable={false}
              />
            </a>
            <a href="#" tabIndex={0} aria-label="Download on the Play Store">
              <img
                src={imgPlayStore}
                alt="Play Store"
                className="h-14 w-auto md:h-20 select-none pointer-events-auto"
                draggable={false}
              />
            </a>
          </div>
        </motion.div>
        {/* Right: Phone Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex items-end justify-center relative"
        >
          <img
            src={imgPhone}
            alt="Milan Juice App Preview"
            className="w-full max-w-[32rem] h-auto drop-shadow-xl select-none pointer-events-none mx-auto md:mx-0"
            style={{ objectFit: "contain" }}
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
