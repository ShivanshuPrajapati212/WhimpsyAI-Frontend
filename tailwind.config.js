/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Poppins', sans-serif"] // Replace 'Open Sans' with your chosen font
    }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        whimpsyaitheme: {
          "base-100": "#FFF8F2",   // background
          "base-200": "#F4EFE8",   // panels/cards
          "base-300": "#EADFD5",   // inputs/lighter accents
          "base-content": "#2D1A47", // text color

          "primary": "#452785",    // core brand color (deep purple)
          "primary-content": "#FFFFFF",

          "secondary": "#3DDAD7",  // accent/tabs/buttons
          "secondary-content": "#FFFFFF",

          "accent": "#F4A300",     // call-to-actions, secondary highlights
          "accent-content": "#2D1A47",

          "neutral": "#2D1A47",    // dark background/neutral sections
          "neutral-content": "#FFF8F2",

          "info": "#3DDAD7",       // tips, tooltips
          "success": "#FDCB53",    // progress, achievements
          "warning": "#F4A300",    // soft warning
          "error": "#EF5B5B",      // alerts/errors

          "success-content": "#2D1A47",
          "warning-content": "#2D1A47",
          "error-content": "#FFFFFF",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "0.5rem",
        }
      }
    ],
  },
}