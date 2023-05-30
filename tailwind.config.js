/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': ['Lucida Console'],
      'serif': ['Georgia'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
    },
    extend: {
      colors: {
        'primary': '#FFD6A8',
        'secondary': '#0d0703',
        'tertiary': '#ad7248',
      },
    },
  },
  plugins: [],
}

