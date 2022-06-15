/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        blue: '##E4EBFA'
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}