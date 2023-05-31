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
        /*'secondary': '#0d0703',*/
        'secondary': '#0E2039',
        'tertiary': '#1E457F',
        /*'tertiary':  '#6495ED',*/
      },
      boxShadow: {
        '1': '0px 0px 15px -2px white'
      },
    },
  },
  plugins: [],
}

