/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xxs: { min: "241px", max: "360px" },
      xs: { min: "361px", max: "480px" },
      sm: { min: "481px", max: "640px" },
      md: { min: "641px", max: "768px" },
      lg: { min: "769px", max: "1024px" },
      xl: { min: "1025px", max: "1200px" },
      xxl: { min: "1201px", max: "1366px" },
      mhd: { min: "1367px", max: "1600px" },
      hd: { min: "1601px", max: "1920px" },
    },
  },
  plugins: [],
};
