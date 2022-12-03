const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.tsx",
    "./lib/**/*.tsx",
  ],
  darkMode: "class",
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        blue: "#3ba1fa",
        darkCornflower: "#14279B",
        cornflower: "#3B90FA",
      },
      letterSpacing: {
        tightest: "0.005em",
        normal: "0.055em",
        wider: "0.015em",
        widest: "0.205em",
      },
      boxShadow: {
        "3xl": "0px 5px 26px 5px rgba(0, 0, 0, 0.17)",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: {
          color: theme("colors.darkCornflower"),
          tracking: theme("letterSpacing.normal"),
        },
      });
    }),
  ],
};
