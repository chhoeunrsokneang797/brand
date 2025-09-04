/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: '640px',
        // => media (min-with: 640 px) { ...}
        md: '768px',
        // => media (min-with: 768 px) { ...}
        lg: '1024px',
        // => media (min-with: 1024 px) { ...}
        xl: '1280px',
        // => media (min-with: 1280 px) { ...}
        '2xl': '1536px',
        // => media (min-with: 1536 px) { ...}
      }
    },
  },
  plugins: [],
}