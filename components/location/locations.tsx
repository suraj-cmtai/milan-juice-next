"use client";

import { motion } from "framer-motion";

const imgClock = "/images/clock.svg";
const imgDirections = "/images/directions.svg";
const imgPhoneAlt = "/images/phone-alt.svg";

const locations = [
  {
    name: "Milan juice center",
    address: "Mallepally Opp:- Badi Masjid",
    time: "08:00am -10:00pm",
    directions: "Get Directions",
    phone: ["+91 8008100687", "+91 6309918500"],
    bg: "bg-[rgba(237,251,222,0.31)]",
  },
  {
    name: "Milan juice center& Shawarma",
    address: "Mallepally Opp:- Badi Masjid",
    time: "08:00am -10:00pm",
    directions: "Get Directions",
    phone: ["+91 8008100687", "+91 6309918500"],
    bg: "bg-[rgba(251,222,222,0.48)]",
  },
  {
    name: "Milan juice center& Shawarma",
    address: "Madhapur   opp:- Gowra Fountain Head ,Mindspace",
    time: "08:00am -10:00pm",
    directions: "Get Directions",
    phone: ["+91 8008100687", "+91 6309918500"],
    bg: "bg-[rgba(228,222,251,0.48)]",
  },
  {
    name: "Milan juice center & Shawarma",
    address: "Gachibowli  Opp:- DLF Gate 2",
    time: "08:00am -10:00pm",
    directions: "Get Directions",
    phone: ["+91 8008100687", "+91 6309918500"],
    bg: "bg-[rgba(252,231,176,0.57)]",
  },
  {
    name: "Milan juice center &shawarma",
    address: "Gachibowli  Opp:-DLF Gate 3..",
    time: "08:00am -10:00pm",
    directions: "Get Directions",
    phone: ["+91 8008100687", "+91 6309918500"],
    bg: "bg-[rgba(232,133,202,0.31)]",
  },
];

export default function Locations() {
  return (
    <section className="w-full bg-gradient-to-b from-[#99d1eb57] to-[#ffffff] py-8 sm:py-12">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-agbalumo text-center mb-8 bg-clip-text text-transparent leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          style={{
            backgroundImage:
              "linear-gradient(156.285deg, #DB3A43 14.347%, #5E0D10 99.019%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            // Ensure no text is cut off
            paddingTop: "0.25em",
            paddingBottom: "0.25em",
            lineHeight: 1.15,
            wordBreak: "break-word",
          }}
        >
          <span className="block">
            Visit any of our 5 convenient locations
          </span>
          <span className="block">
            throughout the city for fresh juices &amp; Shakes
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.name + idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-2xl shadow-lg border border-black/10 p-6 flex flex-col gap-4 ${loc.bg}`}
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-outfit font-semibold text-xl sm:text-2xl mb-1 text-black">
                  {loc.name}
                </h3>
                <p className="font-outfit text-base text-black mb-1">{loc.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={imgClock} alt="Clock" className="w-5 h-5" />
                <span className="font-outfit text-sm text-black">time: {loc.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={imgDirections} alt="Directions" className="w-6 h-6" />
                <span className="font-outfit text-base text-black font-medium underline cursor-pointer">
                  {loc.directions}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src={imgPhoneAlt} alt="Phone" className="w-5 h-5" />
                <div className="flex flex-col">
                  {loc.phone.map((ph, i) => (
                    <span key={ph + i} className="font-outfit text-base text-black">
                      {ph}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
