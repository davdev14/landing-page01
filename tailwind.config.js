/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}"
  ],
  theme: {
    screens: {
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
    },
    extend: {
      screens: {
        "ls": "320px",
        "sm": "375px",
        "2xl": "1440px",
        "3xl": "1655px",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

