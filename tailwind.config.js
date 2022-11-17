/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel Decorative', 'cursive'],
        berkshire: ['Berkshire Swash', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        custom_gray: '#EBEBEB',
        custom_yellow: '#FFF190',
        custom_orange: '#B9540C',
      },
    },
  },
  plugins: [],
}
