"use client";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Dosa",
    image: "/images/dosa.png",
  },
  {
    title: "Lassi & Faluda",
    image: "/images/lassi.png",
  },
  {
    title: "Fruits Bowl",
    image: "/images/fruit-bowl.png",
  },
  {
    title: "Shawarmas",
    image: "/images/shawarmas.png",
  },
  {
    title: "Dry Fruits Blends",
    image: "/images/dry-fruit-circle.png",
  },
  {
    title: "Idli",
    image: "/images/idli.png",
  },
  {
    title: "Vada & Mysore Bajji",
    image: "/images/vada.png",
  },
  {
    title: "Fresh Juices",
    image: "/images/fresh-juices.png",
  },
  {
    title: "Milk Shakes",
    image: "/images/milk-shake.png",
  },
  {
    title: "Fruit Salads",
    image: "/images/fruit-salads.png",
  },
  {
    title: "Mocktails",
    image: "/images/mock-tails.png",
  },
  {
    title: "Slushes",
    image: "/images/slushes.png",
  },
];

export default function TasteTheBest() {
  return (
    <section className="relative w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-agbalumo text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent mb-10 select-none"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #000000de 20%, #fe5d5c 84%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Taste The Best
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {cardData.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: 'easeOut' }}
              className="bg-white border-2 border-[#921d31] rounded-xl flex flex-col items-center justify-start p-3 md:p-4 shadow-sm hover:shadow-lg transition-shadow min-h-[140px]"
              tabIndex={0}
              aria-label={card.title}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain select-none pointer-events-none"
                  draggable={false}
                />
              </div>
              <span className="font-agbalumo text-base md:text-lg text-center text-black mt-1">
                {card.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
