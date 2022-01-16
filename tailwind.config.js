const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      reg: "1220px",
      "3xl": "1620px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#343D48",
        secondary: "#EA3A60",
        tertiary: "#2563FF",
        heading: "#0F2137",
      },
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        positionAnim: {
          from: {
            position: "fixed",
            opacity: 1,
          },
          to: {
            position: "absolute",
            opacity: 1,
            transition: "all 0.4s ease-in",
          },
        },
      },
      animation: {
        positionAnim: "positionAnim 0.4s ease-in",
      },
    },
    plugins: [],
  },
};
