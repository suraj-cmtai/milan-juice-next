"use client";
import { motion } from "framer-motion";

const imgAppStore = "http://localhost:3845/assets/0a4c3d71318a114805a3e9672da118630b627355.png";
const imgPhone = "http://localhost:3845/assets/9aa064c5c73921a581fcbf20f40f356e4da0000d.png";
const imgPlayStore = "http://localhost:3845/assets/10660d104a0860bb4c951013e86777913d74ac2c.png";

export default function DownloadApp() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-white to-[#fbdede] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 rounded-3xl border-4 border-[#fbdede] shadow-md bg-white/80 relative">
        {/* Left: Text and Store Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 flex flex-col items-start justify-center py-8"
        >
          <h2 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4">
            Download the app now!
          </h2>
          <p className="font-outfit font-medium text-base sm:text-lg md:text-xl text-black mb-6 max-w-md">
            Experience online ordering only on the Milan Juice app
          </p>
          <div className="flex flex-row items-center gap-4">
            <a href="#" tabIndex={0} aria-label="Download on the App Store">
              <img
                src={imgAppStore}
                alt="App Store"
                className="h-12 w-auto md:h-16 select-none pointer-events-auto"
                draggable={false}
              />
            </a>
            <a href="#" tabIndex={0} aria-label="Download on the Play Store">
              <img
                src={imgPlayStore}
                alt="Play Store"
                className="h-12 w-auto md:h-16 select-none pointer-events-auto"
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
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 flex items-center justify-center py-8"
        >
          <img
            src={imgPhone}
            alt="Milan Juice App Preview"
            className="w-40 sm:w-56 md:w-72 lg:w-96 h-auto drop-shadow-xl select-none pointer-events-none"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
