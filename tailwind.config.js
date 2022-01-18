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
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#343D48",
        secondary: "#EA3A60",
        tertiary: "#2563FF",
        heading: "#0F2137",
        tsecondary: "#02073E",
      },
      screens: {
        reg: "1220px",
        "3xl": "1620px",
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
        pulsePlay: {
          from: {
            transform:
              "translateX(-50%) translateY(-50%) translateZ(0) scale(1)",
            opacity: 1,
          },
          to: {
            transform:
              "translateX(-50%) translateY(-50%) translateZ(0) scale(1.5)",
            opacity: 0,
          },
        },
      },
      animation: {
        positionAnim: "positionAnim 0.4s ease-in",
        pulsePlay: "pulsePlay 1.5s ease-out infinite",
      },
    },
    plugins: [],
  },
};
