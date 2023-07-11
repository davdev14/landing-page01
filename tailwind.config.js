/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}"
  ],
  theme: {
    extend: {
      screens: {
        "ls": "600px",
        "xs": "1440",
        "3xl": "1655px"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

