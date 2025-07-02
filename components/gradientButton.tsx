'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const GradientButton = ({ children, icon }: GradientButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="inline-block"
    >
      <Button
        className="bg-gradient-to-r from-[#921D31] to-[#FE5D5C] text-[#F2F2F2] font-outfit font-extrabold text-base md:text-lg leading-5 rounded-xl px-8 md:px-12 py-3 h-12 min-w-[120px] md:min-w-[183px] hover:opacity-90 transition cursor-pointer flex items-center gap-2"
      >
        {children}
        {icon && <span className="flex items-center pr-2">{icon}</span>}
      </Button>
    </motion.div>
  );
};

export default GradientButton;
