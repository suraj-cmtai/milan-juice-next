"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Card images from /public/images
const cardImages = [
  "/images/glass-with-icecubes.png", // Digestive Health
  "/images/tetrapack-vector.png",    // Immune Support
  "/images/juice-glass.png",         // Energy Boost
  "/images/juice-vector.png",        // Antioxidant Power
];

const cardData = [
  {
    title: "Digestive Health",
    desc: "Rich in bromelain enzyme that aids protein breakdown and reduces bloating",
    bg: "bg-[rgba(251,222,222,0.48)]",
    border: "border-[#fbdede]",
    image: cardImages[0],
  },
  {
    title: "Immune Support",
    desc: "Packed with vitamin C and flavonoids to boost immunity and fight infections",
    bg: "bg-[rgba(237,251,222,0.48)]",
    border: "border-[rgba(237,251,222,0.48)]",
    image: cardImages[1],
  },
  {
    title: "Energy Boost",
    desc: "Natural sugars and B-vitamins provide quick energy and hydration support",
    bg: "bg-[rgba(228,222,251,0.48)]",
    border: "border-[rgba(228,222,251,0.48)]",
    image: cardImages[2],
  },
  {
    title: "Antioxidant Power",
    desc: "Potent mix of antioxidants and vitamins that neutralize harmful stress",
    bg: "bg-[rgba(251,246,222,0.63)]",
    border: "border-[rgba(251,246,222,0.63)]",
    image: cardImages[3],
  },
];

const fruitBasket = "/images/fruit-basket.png";
const decoTopLeft = "/images/cocktails.png";
const decoTopRight = "/images/strawberry-shake-1.png";
const decoBottomRight = "/images/apple-cute.png";

export default function Benefits() {
  return (
    <section
      className="relative w-full min-h-[90vh] py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-4 flex flex-col items-center justify-center overflow-x-hidden"
      style={{
        background:
          "linear-gradient(122.563deg, #fff 44.062%, #fbDEDE 97.036%)",
      }}
    >
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        {/* Decorative Images - Made bigger */}
        <Image
          src={decoTopLeft}
          alt="Juice glasses deco left"
          width={200}
          height={130}
          className="absolute left-1 top-1 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto z-10 select-none pointer-events-none"
          aria-hidden="true"
        />
        <Image
          src={decoTopRight}
          alt="Strawberry glass deco right"
          width={160}
          height={160}
          className="absolute right-1 top-1 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 h-auto z-10 select-none pointer-events-none"
          aria-hidden="true"
        />
        <Image
          src={decoBottomRight}
          alt="Apple cartoon deco bottom right"
          width={120}
          height={120}
          className="absolute right-2 bottom-2 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-auto z-10 select-none pointer-events-none"
          aria-hidden="true"
        />
        
        {/* Heading */}
        <h2
          className="font-agbalumo text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 md:mb-8 leading-[1.3] px-2"
          style={{
            background:
              "linear-gradient(114.627deg, #DB3A43 14.347%, #5E0D10 99.019%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            paddingBottom: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          Benefits of Juices
        </h2>
        
        {/* Mobile Layout: Vertical Stack */}
        <div className="lg:hidden w-full flex flex-col items-center gap-4 sm:gap-6">
          {cardData.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <BenefitCard {...card} />
            </motion.div>
          ))}
          
          {/* Fruit basket at bottom for mobile - Made bigger */}
          <Image
            src={fruitBasket}
            alt="Fruit basket"
            width={180}
            height={180}
            className="mt-4 w-28 sm:w-32 md:w-36 h-auto z-20 pointer-events-none select-none"
            aria-hidden="true"
          />
        </div>

        {/* Desktop Layout: Cross Pattern */}
        <div className="hidden lg:block relative w-full max-w-5xl h-[600px] xl:h-[700px]">
          {/* Central Fruit Basket - Made bigger */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Image
              src={fruitBasket}
              alt="Fruit basket"
              width={280}
              height={280}
              className="w-48 xl:w-56 h-auto pointer-events-none select-none"
              aria-hidden="true"
            />
          </div>
          
          {/* Top Card - Immune Support */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="absolute left-1/2 top-0 -translate-x-1/2 z-30"
          >
            <BenefitCard {...cardData[1]} />
          </motion.div>
          
          {/* Left Card - Digestive Health */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30"
          >
            <BenefitCard {...cardData[0]} />
          </motion.div>
          
          {/* Right Card - Antioxidant Power */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30"
          >
            <BenefitCard {...cardData[3]} />
          </motion.div>
          
          {/* Bottom Card - Energy Boost */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute left-1/2 bottom-0 -translate-x-1/2 z-30"
          >
            <BenefitCard {...cardData[2]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  title,
  desc,
  bg,
  border,
  image,
}: {
  title: string;
  desc: string;
  bg: string;
  border: string;
  image: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center ${bg} border ${border} shadow-md rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 p-2 sm:p-3 md:p-4 lg:p-4 xl:p-5 z-30 transition-all duration-300 overflow-hidden`}
      style={{
        boxShadow: "0px 4px 24px 0px rgba(0,0,0,0.09)",
      }}
    >
      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex items-center justify-center mb-1 sm:mb-2 flex-shrink-0">
        <Image
          src={image}
          alt={title + " icon"}
          width={40}
          height={40}
          className="object-contain w-full h-full"
        />
      </div>
      <h3 className="font-outfit font-bold text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base text-[#1a1a1a] text-center mb-1 sm:mb-2 leading-tight break-words flex-shrink-0 max-w-full">
        {title}
      </h3>
      <div className="flex-1 flex items-center justify-center w-full max-w-[95%] overflow-hidden">
        <p className="font-outfit text-[6px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs text-black text-center leading-tight break-words hyphens-auto">
          {desc}
        </p>
      </div>
    </div>
  );
}