/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "*src/pages/**/*.html"
  ],
  theme: {
    extend: {
      screens: {
        "ls": "600px"
      }
    },
  },
  plugins: [],
}

