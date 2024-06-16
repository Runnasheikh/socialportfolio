const { Montserrat } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode:'jit',
  theme: {
    extend: {
      backgroundImage: {
        singerOverlay:'url(/assets/hero/singer-overlay.png)',
        newsketter:'url(/assets/hero/bg.png)'
      },
      fontFamily:{
        alexBrush:['var(--font-alexBrush)','san-sarif'],
        montserrat:['var(--font-montserrat)','san-sarif']
      },
      colors:{
        primary:"#06062a",
        secondary:"#1511538",
        tertiary:"#242445",
       accent:{
        DEFAULT:"#f7d2c4",
        hover:"#6519c6",
       }
      }
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1310px',
      
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
   
  ],
};
