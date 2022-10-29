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
        darkCornflower: "#14279B",
        cornflower: "#608AF5",
        darkGray: "#082032",
        midGray: '#212121'
      },
      letterSpacing: {
        tightest: '0.005em',
        normal: '0.055em',
        wider: '0.015em',
        widest: '0.205em'
      },
      boxShadow: {
        '3xl': '0px 5px 26px 5px rgba(0, 0, 0, 0.17)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.darkGray"),
            button: {
              background: theme("colors.cornflower")
            },
            letterSpacing: theme('letterSpacing.normal'),
          }
        },
        dark: {
          css: {

          }
        }
      })
    }
  },
};
