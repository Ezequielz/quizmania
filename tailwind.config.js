/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Montserrat': 'Montserrat'
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}