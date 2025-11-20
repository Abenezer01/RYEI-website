"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'navy';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className = "", 
  id,
  background = 'white' 
}) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-background',
    dark: 'bg-body text-white',
    navy: 'bg-navy text-white'
  };

  return (
    <section id={id} className={cn("py-20 md:py-32", bgColors[background], className)}>
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
};