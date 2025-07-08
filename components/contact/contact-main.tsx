"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientButton from "@/components/gradientButton";

const imgCall = "/images/Call.svg";
const imgMessage = "/images/Message.svg";

export default function ContactUsMain() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setError(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-8 px-2 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#fbdede7a] to-[#edfbde7a]">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 z-10">
        {/* Left: Info */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10 items-start justify-start py-4 px-2 sm:px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-agbalumo text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 leading-tight"
            style={{
              background:
                "linear-gradient(121.345deg, #DB3A43 14.347%, #5E0D10 99.019%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Need more Information
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-outfit text-base sm:text-lg md:text-xl text-black mb-2"
          >
            Milan Juice Centre has been on a mission to serve nature's freshness with love.
          </motion.p>
          <div className="flex flex-col gap-6 mt-2">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <Image src={imgCall} alt="Call icon" width={32} height={32} className="w-7 h-7" />
              <div className="font-outfit font-semibold text-lg md:text-xl text-[#1a1a1a]">
                <p>+91 8008100687</p>
                <p>+91 6309918500</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center gap-3">
              <Image src={imgMessage} alt="Message icon" width={32} height={32} className="w-7 h-7" />
              <div className="font-outfit font-semibold text-lg md:text-xl text-[#1a1a1a]">
                <p>milanjuice91@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            flex-1 bg-white/80 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col gap-4 max-w-xl w-full
            md:mx-auto md:self-center
            lg:mx-0 lg:self-auto
          "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-outfit font-semibold text-base md:text-lg text-[#1a1a1a]">First Name*</label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="Enter your Name"
                value={form.firstName}
                onChange={handleChange}
                className="border border-black rounded-lg px-4 py-2 font-outfit text-sm md:text-base text-[#777] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-outfit font-semibold text-base md:text-lg text-[#1a1a1a]">Last Name*</label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Enter your Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="border border-black rounded-lg px-4 py-2 font-outfit text-sm md:text-base text-[#777] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-outfit font-semibold text-base md:text-lg text-[#1a1a1a]">Email*</label>
              <input
                type="email"
                name="email"
                required
                placeholder="email@domain.com"
                value={form.email}
                onChange={handleChange}
                className="border border-black rounded-lg px-4 py-2 font-outfit text-sm md:text-base text-[#777] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-outfit font-semibold text-base md:text-lg text-[#1a1a1a]">Contact*</label>
              <input
                type="tel"
                name="contact"
                required
                placeholder="+917854xxxxx"
                value={form.contact}
                onChange={handleChange}
                className="border border-black rounded-lg px-4 py-2 font-outfit text-sm md:text-base text-[#777] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-outfit font-semibold text-base md:text-lg text-[#1a1a1a]">
              Message <span className="text-sm font-normal">(optional)</span>
            </label>
            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="border border-black rounded-lg px-4 py-2 font-outfit text-sm md:text-base text-[#777] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
          {success && (
            <div className="text-green-600 font-outfit text-sm">{success}</div>
          )}
          {error && (
            <div className="text-red-600 font-outfit text-sm">{error}</div>
          )}
          <GradientButton>
            {loading ? "Sending..." : "Send Message"}
          </GradientButton>
        </motion.form>
      </div>
    </section>
  );
}
