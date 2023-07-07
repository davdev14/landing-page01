/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}"
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

