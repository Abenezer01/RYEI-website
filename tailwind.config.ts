import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F9A825', // Sun Gold
          hover: '#EF6C00',   // Sunset Orange
          light: '#FFCA28',   // Bright Yellow
        },
        secondary: {
          DEFAULT: '#2E7D32', // Primary Green
          light: '#66BB6A',   // Light Leaf Green
        },
        navy: {
          DEFAULT: '#0A2A4A', // Deep Navy
          light: '#153E6A',
        },
        body: '#333333',      // Soft Charcoal
        background: '#F6F6F6' // Light Gray
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
      backgroundImage: {
        'gradient-sunrise': 'linear-gradient(135deg, #FFCA28 0%, #F9A825 50%, #EF6C00 100%)',
        'gradient-navy': 'linear-gradient(to bottom, rgba(10, 42, 74, 0.9), rgba(10, 42, 74, 0.95))',
      }
    },
  },
  plugins: [],
};
export default config;