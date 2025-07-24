"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// const PDF_URL = "/pdf/dlf-menu.pdf";
const PDF_URL = "/pdf/MILAN_JUICE_CENTER_MENU.pdf"


export default function MenuPDFViewer() {
  return (
    <section className="w-full py-8 px-2 flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-outfit font-bold text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
          style={{
            background:
              "linear-gradient(106.779deg, #DB3A43 14.347%, #5E0D10 99.019%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          View Our Menu
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-outfit text-center text-base sm:text-lg md:text-xl text-black mb-6 max-w-2xl"
        >
          Explore our delicious offerings in the menu below. You can scroll, zoom, or download the full PDF for your convenience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full flex flex-col items-center"
        >
          <div
            className="w-full flex justify-center mb-6"
          >
            <div
              className="relative bg-gray-100 rounded-xl shadow-lg overflow-hidden border border-gray-200"
              style={{
                width: "100%",
                maxWidth: "816px", // 8.5in * 96dpi
                aspectRatio: "8.5/11",
              }}
            >
              <iframe
                src={PDF_URL}
                title="Milan Juice Menu PDF"
                className="w-full h-full min-h-[400px] sm:min-h-[600px] md:min-h-[704px] border-0"
                style={{ background: "#f9fafb", minHeight: "400px" }}
                loading="lazy"
              />
            </div>
          </div>
          <a
            href={PDF_URL}
            download
            className="w-full flex justify-center"
            tabIndex={0}
            aria-label="Download Menu PDF"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 font-outfit text-base sm:text-lg px-6 py-3 rounded-lg shadow transition hover:bg-[#fe5d5c] hover:text-white"
            >
              <Download className="w-5 h-5" />
              Download Menu PDF
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
