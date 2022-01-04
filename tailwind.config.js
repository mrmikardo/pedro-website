const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: { ...colors.cyan, 250: "#a8ecff" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
