const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.tsx",
    "./lib/**/*.tsx"
  ],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        blue: "#4581F6",
        navy: "#002265",
        black: "#07253C",
        darkBlue: "#14279B",
        darkGray: "#082032",
        midGray: '#212121'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.darkGray"),
            "h1": {
              color: theme("colors.navy")
            },
            "h2": {
              color: theme("colors.midGray")
            }
          }
        },
        dark: {
          css: {

          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
