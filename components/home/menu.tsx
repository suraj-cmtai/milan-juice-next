"use client";
import GradientButton from '@/components/gradientButton';
import { motion } from 'framer-motion';

const menuItems = [
  {
    label: "Juices",
    img: "/images/mango-juice.png",
    delay: 0.1,
    alt: "Juices",
  },
  {
    label: "Shakes",
    img: "/images/shake.png",
    delay: 0.2,
    alt: "Shakes",
  },
  {
    label: "Dry Fruits",
    img: "/images/dry-fruit.png",
    delay: 0.3,
    alt: "Dry Fruits",
  },
];

const imgBgMenu = "/images/fruit-leaf-bg.png";

export default function Menu() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] pb-10 sm:pb-14 md:pb-16 z-10 flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Inverted background image at the top, full width */}
      <div className="absolute top-0 left-0 w-full h-32 sm:h-40 md:h-52 lg:h-60 pointer-events-none select-none -z-10">
        <img
          src={imgBgMenu}
          alt="Menu background"
          className="w-full object-cover scale-y-[-1] scale-x-[-1] opacity-40"
          aria-hidden="true"
        />
      </div>
      {/* Main content in max-w-7xl */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center px-2 sm:px-4">
        {/* Section Title */}
        <h2
          className="font-agbalumo text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-2"
          style={{
            background:
              'linear-gradient(99.55deg, #DB3A43 14.35%, #5E0D10 99.02%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Menu
        </h2>
        {/* Subtitle */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span
            className="font-agbalumo text-lg sm:text-xl md:text-2xl lg:text-3xl"
            style={{
              background: "linear-gradient(90deg, #000 0%, #FE5D5C 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Best <span>Juices</span> for <span>you</span>
          </span>
        </div>
        {/* Menu Items */}
        <div className="w-full flex flex-col gap-8 md:gap-12 lg:gap-16 mb-6 md:mb-8 lg:mb-10 md:flex-row items-stretch md:items-end justify-center">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center flex-1 min-w-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="shadow-2xl flex items-center justify-center w-32 h-44 sm:w-40 sm:h-60 md:w-48 md:h-72 lg:w-56 lg:h-80 aspect-[3/4] rounded-[50%/60%] overflow-hidden mb-3 sm:mb-4 bg-white"
                style={{
                  borderRadius: "60% / 60%",
                }}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mt-1 sm:mt-2">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
        {/* View Menu Button */}
        <div className="mt-2 sm:mt-4 flex justify-center">
          <GradientButton>View Menu</GradientButton>
        </div>
      </div>
    </section>
  );
}
