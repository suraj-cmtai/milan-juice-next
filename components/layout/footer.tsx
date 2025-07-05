"use client";
import React from "react";
import { Phone, Mail, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const logo = "/images/logo.png";
const imgUnion = "/images/Union.png";
const grapes = "/images/grapes-vector.png";

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "contact Us", href: "/contact" },
  { label: "Menu", href: "#" },
];
const support = [
  { icon: <Phone className="w-5 h-5" />, text: "+91 8008100687" },
  { icon: <Phone className="w-5 h-5" />, text: "+91 6309918500" },
  { icon: <Mail className="w-5 h-5" />, text: "milanjuice91@gmail.com" },
];
const locations = [
  "Milan juice center   Mallepally   Opp:- Badi Masjid",
  "Milan juice center & Shawarma Mallepally   Opp:- Badi masjid",
  "Milan juice center &Shawarma Madhapur    Opp:- Gowra Fountain Head, Mindspace",
  "Milan juice center & Shawarma Gachibowli  Opp:- DLF Gate 2 .",
  "Milan juice center &shawarma Gachibowli   Opp:- DLF Gate 3..",
];
const socials = [
  { alt: "Instagram", icon: <Instagram className="w-6 h-6" />, href: "#" },
  { alt: "Facebook", icon: <Facebook className="w-6 h-6" />, href: "#" },
  { alt: "Youtube", icon: <Youtube className="w-6 h-6" />, href: "#" },
  { alt: "Twitter", icon: <Twitter className="w-6 h-6" />, href: "#" },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.12,
    },
  }),
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#FBDEDE] overflow-hidden pt-10 pb-4 font-outfit relative z-50">
      {/* Mirrored union images spanning the full width */}
      <div className="w-full flex flex-row items-start justify-between absolute top-0 left-0 z-0 pointer-events-none select-none">
        {/* Left: Normal */}
        <motion.img
          src={imgUnion}
          alt=""
          aria-hidden="true"
          className="w-1/2 h-40 object-cover"
          style={{ minWidth: 0, maxWidth: "50%" }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        />
        {/* Right: Mirrored */}
        <motion.img
          src={imgUnion}
          alt=""
          aria-hidden="true"
          className="w-1/2 h-40 object-cover"
          style={{ transform: "scaleX(-1)", minWidth: 0, maxWidth: "50%" }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        />
      </div>
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Decorative backgrounds */}
        <motion.div
          className="block absolute left-0 top-0 z-0 w-16 h-20 sm:w-24 sm:h-28 md:w-40 md:h-48 pointer-events-none select-none"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={grapes}
            alt="Decorative grapes vector"
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 w-full flex flex-col items-center px-2 sm:px-4"
        >
          {/* Center logo image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center w-full"
          >
            <img
              src={logo}
              alt="Milan Juice logo"
              className="w-24 h-20 sm:w-32 sm:h-28 md:w-52 md:h-44 object-contain"
            />
          </motion.div>
          {/* Gradient Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-12 bg-gradient-to-r from-[#FE5D5C] to-[#921D31] rounded-2xl shadow-lg px-2 sm:px-4 md:px-12 py-4 sm:py-6 mt-4 mb-8 sm:mb-10"
          >
            <span className="text-[#F2F2F2] font-bold text-base sm:text-lg md:text-2xl lg:text-3xl text-center">
              Opening Hours
            </span>
            <span className="hidden sm:inline-block text-[#F2F2F2] font-bold text-base sm:text-lg md:text-2xl lg:text-3xl text-center">
              |
            </span>
            <span className="text-[#F2F2F2] font-bold text-base sm:text-lg md:text-2xl lg:text-3xl text-center">
              Monday - Saturday
            </span>
            <span className="hidden sm:inline-block text-[#F2F2F2] font-bold text-base sm:text-lg md:text-2xl lg:text-3xl text-center">
              |
            </span>
            <span className="text-[#F2F2F2] font-bold text-base sm:text-lg md:text-2xl lg:text-3xl text-center">
              08.00 am - 10.00 pm
            </span>
          </motion.div>
          {/* Main Content */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
            {/* Useful Links */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2 capitalize text-black">
                Useful Links
              </h3>
              <ul className="space-y-1 text-black font-medium text-sm sm:text-base md:text-lg">
                {usefulLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="hover:underline transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            {/* Support */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2 capitalize text-black">
                Support
              </h3>
              <ul className="space-y-2 text-black font-medium text-sm sm:text-base md:text-lg">
                {support.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {item.icon}
                    <span className="break-all">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            {/* Locations */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2 capitalize text-black">
                Locations
              </h3>
              <ul className="space-y-1 text-black font-medium text-sm sm:text-base md:text-lg">
                {locations.map((loc, i) => (
                  <motion.li
                    key={i}
                    className="break-words"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {`(${i + 1}) ${loc}`}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 border-t border-black/10 pt-4 sm:pt-6"
          >
            <span className="font-semibold text-sm sm:text-base md:text-lg text-black text-center">
              © 2025 Milan Juice || All Rights Reserved
            </span>
            <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
              {socials.map((s, i) => (
                <motion.a
                  key={s.alt}
                  href={s.href}
                  aria-label={s.alt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.12, rotate: -5 + i * 3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                >
                  {React.cloneElement(s.icon, {
                    className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-gray-900",
                  })}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;