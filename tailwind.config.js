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
    themes: ["cmyk"],
  },
}