/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'accent' : '#d99649',
        'light_accent' : '#f9ead9',
        'gray' : '#656565'
      },
  
      fontFamily: {
        'playfair' : 'Playfair Display',
        'mulish' : 'Mulish, sans-serif', 
      },
    },
  },
  plugins: [],
}

