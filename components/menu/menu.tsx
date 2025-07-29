"use client";

import React from "react";

/**
 * MilanJuiceMenu - Menu page for Milan Juice Center
 * 
 * - Responsive, accessible, and styled with Tailwind CSS utility classes.
 * - Uses design tokens and avoids hardcoded pixel values.
 * - All sections are wrapped in max-w-7xl mx-auto except for the background.
 * - Colors and gradients match the provided palette.
 * - Menu items and branches are mapped from arrays for maintainability.
 * - No external icon packages or placeholder images are used.
 */
const menuSections = [
  {
    title: "DOSAS",
    items: [
      ["Plain Dosa", "Rs.40"],
      ["Masala Dosa", "Rs.50"],
      ["Rava Dosa", "Rs.70"],
      ["Rava Masala Dosa", "Rs.80"],
      ["Set Dosa", "Rs.80"],
      ["Egg Dosa", "Rs.60"],
      ["Double Egg Dosa", "Rs.70"],
      ["Ghee Karam Dosa", "Rs.90"],
      ["Ghee Karam Masala Dosa", "Rs.100"],
      ["Butter Dosa", "Rs.80"],
      ["Butter Masala Dosa", "Rs.100"],
      ["Paneer Dosa", "Rs.160"],
      ["Paneer Masala Dosa", "Rs.80"],
      ["Cheese Dosa", "Rs.100"],
      ["Cheese Masala Dosa", "Rs.100"],
      ["Onion Dosa", "Rs.90"],
      ["Plain Pesarattu Dosa", "Rs.60"],
      ["Upma Pesarattu Dosa", "Rs.80"],
      ["Pizza Dosa", "Rs.80"],
      ["Ragi Dosa", "Rs.60"],
      ["Uthappa Dosa", "Rs.50"],
      ["Upma Dosa", "Rs.60"],
    ],
  },
  {
    title: "IDLIS, VADA & MYSORE BAJJI",
    items: [
      ["Idli (3 PCS)", "Rs.40"],
      ["Ghee Karam Idli (3 PCS)", "Rs.70"],
      ["Butter Idli (3 PCS)", "Rs.70"],
      ["Sambar Idli (3 PCS)", "Rs.60"],
      ["Tawa Idli (3 PCS)", "Rs.70"],
      ["Vada (2 pcs)", "Rs.50"],
      ["Sambar Vada (2 PCS)", "Rs.70"],
      ["Mysore Bajji (4 PCS)", "Rs.50"],
      ["Tava Bonda (4 PCS)", "Rs.70"],
    ],
  },
  {
    title: "FRESH JUICES",
    items: [
      ["Sweet lime (Mosambi) Juice", "Rs.100"],
      ["Orange Juice", "Rs.100"],
      ["Pomegranate(Anar) Juice", "Rs.100"],
      ["Watermelon Juice", "Rs.100"],
      ["Grapes Juice", "Rs.100"],
      ["Mix Fruit Juice", "Rs.100"],
      ["Pineapple Juice", "Rs.100"],
      ["Ganga Jamuna", "Rs.100"],
      ["3 shots", "Rs.100"],
      ["Go berry", "Rs.120"],
      ["Go Green", "Rs.120"],
      ["Lime & Mint", "Rs.120"],
      ["Carrot", "Rs.120"],
      ["Beetroot", "Rs.120"],
      ["ABC (Apple,Beetroot,Carrot)", "Rs.140"],
      ["Kiwi", "Rs.100"],
      ["Kala Jamun", "Rs.100"],
      ["Malta(Orange)", "Rs.100"],
    ],
  },
  {
    title: "MILKSHAKES",
    items: [
      ["Apple Milkshake", "Rs.100"],
      ["Banana Milkshake", "Rs.100"],
      ["Musk melon Milkshake", "Rs.100"],
      ["Papaya Milkshake", "Rs.100"],
      ["Chikoo Milkshake", "Rs.120"],
      ["Chikoo Banana Milkshake", "Rs.120"],
      ["Mango Banana Milkshake", "Rs.120"],
      ["Avacado Shake", "Rs.120"],
      ["Banana Dates Milkshake", "Rs.120"],
      ["Black Currant", "Rs.120"],
      ["Butterscotch", "Rs.120"],
      ["Dates Shake", "Rs.120"],
      ["Mango Shake", "Rs.120"],
      ["Strawberry Shake", "Rs.120"],
      ["Custard Apple(Sitaphal) Shake", "Rs.140"],
      ["Vanilla Shake", "Rs.140"],
      ["Dragon Shake", "Rs.120"],
      ["Lychee Shake", "Rs.160"],
      ["Oreo Shake", "Rs.140"],
      ["Kiwi Shake", "Rs.120"],
      ["Rose Milk", "Rs.100"],
      ["Chocolate Shake", "Rs.120"],
    ],
  },
  {
    title: "MILAN SPECIALS",
    items: [
      ["Mango Malai Shake", "Rs.140"],
      ["Sharjah Shake", "Rs.150"],
      ["Shahdood Malai (Mulberry)", "Rs.150"],
      ["Apricot Delight", "Rs.180"],
      ["Sitaphal Malai Shake", "Rs.150"],
      ["Dry Fruit Shake", "Rs.140"],
      ["Avacado Dry Fruits", "Rs.160"],
      ["Tender Coconut Shake", "Rs.140"],
      ["Anjeer Malai (Fig)", "Rs.160"],
      ["Strawberry Cream Malai", "Rs.160"],
      ["Berry Fruit Punch", "Rs.160"],
      ["Lychee Malai Cream", "Rs.160"],
      ["Dates Sahan", "Rs.150"],
      ["Mango Cream Malai", "Rs.160"],
      ["Sitaphal Cream Malai", "Rs.160"],
      ["Mango Delight", "Rs.160"],
      ["Rabdi Malai", "Rs.160"],
      ["Qubani ka Meetha", "Rs.140"],
      ["Phirni", "Rs.160"],
      ["Quwwat-e-jinn", "Rs.400"],
      ["London Strawberry Chocolate", "Rs.170"],
    ],
  },
  {
    title: "PREMIUM THICK SHAKES & SMOOTHIES",
    items: [
      ["Berry Oreo", "Rs.150"],
      ["Banana Oreo", "Rs.150"],
      ["Choco Oreo", "Rs.150"],
      ["Kit-Kat Thick Shake", "Rs.150"],
      ["Cold Coffee", "Rs.150"],
      ["Strawberry Smoothie", "Rs.150"],
      ["Chocolate Smoothie", "Rs.150"],
      ["Mango Smoothie", "Rs.150"],
      ["Peanut Smoothie", "Rs.150"],
      ["Kiwi Banana Smoothie", "Rs.150"],
    ],
  },
  {
    title: "FRUIT SALADS & SPECIAL TREATS",
    items: [
      ["Fruit Salad with Ice-Cream", "Rs.150"],
      ["Caramel Fruit Mandil Oreo", "Rs.150"],
      ["Cream Fruit Salad", "Rs.160"],
      ["Malai Fruit Salad", "Rs.140"],
      ["Blood Punch", "Rs.200"],
      ["Zaiqa Fruit Punch", "Rs.160"],
      ["Cake Fruit Salad", "Rs.160"],
      ["Fruit Bucket", "Rs.160"],
      ["Malai Matka Dry Fruit Salad", "Rs.160"],
      ["3D Punch", "Rs.180"],
      ["Purple Blossom", "Rs.170"],
      ["Tall Beauty", "Rs.170"],
      ["Honeymoon Delight", "Rs.170"],
      ["Kaju Blossom", "Rs.170"],
      ["Very Berry", "Rs.170"],
      ["Yemani Salad (Dry Fruits)", "Rs.200"],
      ["Peach Blossom", "Rs.240"],
      ["Water Melon", "Rs.160"],
    ],
  },
  {
    title: "MOCKTAILS & DRY FRUIT BLENDS",
    items: [
      ["Virgin Mojito", "Rs.80"],
      ["Blue Curacao", "Rs.140"],
      ["Ocean Mojito", "Rs.140"],
      ["Passion Fruit", "Rs.140"],
      ["Green Apple", "Rs.140"],
      ["Cranberry", "Rs.140"],
      ["Mango Peach Blossom", "Rs.140"],
      ["Peach Fizz", "Rs.140"],
      ["Raspberry", "Rs.140"],
      ["Mixed Dry Fruit Blend", "Rs.200"],
      ["Dates Badam Gold", "Rs.200"],
      ["Warm Up Gold", "Rs.200"],
      ["Badam Shake(Almonds)", "Rs.240"],
      ["Kaju Shake (Cashewnuts)", "Rs.220"],
      ["Anjeer Shake (Figs)", "Rs.180"],
      ["Pistachio Gold", "Rs.240"],
    ],
  },
  {
    title: "SLUSHES & LASSI & FALUDA",
    items: [
      ["Lime Mint", "Rs.100"],
      ["Mango Slush", "Rs.100"],
      ["Orange Slush", "Rs.100"],
      ["Kiwi Slush", "Rs.100"],
      ["Pineapple Slush", "Rs.100"],
      ["Green Apple Slush", "Rs.100"],
      ["Lime Soda", "Rs.100"],
      ["Lassi Strawberry", "Rs.120"],
      ["Mango Faluda", "Rs.140"],
      ["Faluda", "Rs.140"],
    ],
  },
  {
    title: "FRUIT BOWLS",
    items: [
      ["Mixed Fruit Bowl with Sauce", "Rs.160"],
      ["Mixed Fruit Bowl with Ice cream", "Rs.200"],
      ["Mixed Fruit Bowl with cream", "Rs.180"],
      ["Mixed Fruit Bowl with chocolate & Cream", "Rs.250"],
    ],
  },
];

const branches = [
  { name: "NEW MALLEPALLY" },
  { name: "MADHAPUR (MIND SPACE)" },
  { name: "GACHIBOWLI", note: "(DLF GATE NO:-2 & GATE NO.3)" },
  { name: "JAHANUMA", note: "(SHAMA PALACE)" },
];

const MilanJuiceMenu = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#921D31] to-[#FE5D5C] text-[#F2F2F2] p-4 font-outfit">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto text-center mb-8">
        <div className="text-base md:text-lg mb-2">Since 1990</div>
        <h1 className="text-3xl md:text-6xl font-bold tracking-widest mb-2">
          MILAN JUICE CENTER
        </h1>
        <p className="text-lg md:text-2xl italic mb-4 tracking-wide">
          Taste the purity in every sip
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-base md:text-lg">
          <span>+91-8008100687</span>
          <span>www.milanjuice.com</span>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuSections.map((section) => (
          <div
            key={section.title}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center border-b border-white/30 pb-2">
              {section.title}
            </h2>
            <div className="space-y-2 text-sm">
              {section.items.map(([item, price]) => (
                <div
                  key={item}
                  className="flex justify-between"
                  aria-label={`${item} ${price}`}
                >
                  <span>{item}</span>
                  <span>{price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer - Branches */}
      <div className="w-full max-w-7xl mx-auto mt-12 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Our Branches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            >
              <h4 className="font-bold">{branch.name}</h4>
              {branch.note && (
                <p className="text-xs">{branch.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MilanJuiceMenu;
