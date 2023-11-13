/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font1: [ 'Roboto', 'sans-serif'],
        font2: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        white: ' #FFFFFF',
        yellow: '#F6BD11',
        black: '#110F0F',
      },
    },
  },
  plugins: [],
}

