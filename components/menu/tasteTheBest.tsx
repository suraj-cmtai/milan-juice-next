"use client";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Dosa",
    image: "http://localhost:3845/assets/1587b59546741de5320a731657f953cb12933707.png",
  },
  {
    title: "Lassi & Faluda",
    image: "http://localhost:3845/assets/829843b6bd0b859f25c8af903abad04cc8bf35ba.png",
  },
  {
    title: "Fruits Bowl",
    image: "http://localhost:3845/assets/3dbb07ef0f35a770cc2e4e5cf6489094c5431a70.png",
  },
  {
    title: "Shawarmas",
    image: "http://localhost:3845/assets/314fa66c1ffb4eb2e340aeddd74d7b3bdfa7d001.png",
  },
  {
    title: "Dry Fruits Blends",
    image: "http://localhost:3845/assets/f409bd46f19bdc03a055745b20b85260bbc97e62.png",
  },
  {
    title: "Idli",
    image: "http://localhost:3845/assets/600e36be24c10ef72363167c12572f6b6f5a1dcb.png",
  },
  {
    title: "Vada & Mysore Bajji",
    image: "http://localhost:3845/assets/16f0ca9129348bcddd5bc0bc992965287673c8a1.png",
  },
  {
    title: "Fresh Juices",
    image: "http://localhost:3845/assets/358dd4fa455c22c3ef04b9f6662cf93395263d30.png",
  },
  {
    title: "Milk Shakes",
    image: "http://localhost:3845/assets/ba55ccb08e6e6ff9ed2f8c37ac1949e6f779f515.png",
  },
  {
    title: "Fruit Salads",
    image: "http://localhost:3845/assets/845a7b93685dbd3211dbcde6ee71c440b02782aa.png",
  },
  {
    title: "Mocktails",
    image: "http://localhost:3845/assets/7a779859ba995edfc0c3c897ae7beddc434a48ec.png",
  },
  {
    title: "Slushes",
    image: "http://localhost:3845/assets/746be943fb0b6a5c2f0d2132bedafec5408b9773.png",
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
