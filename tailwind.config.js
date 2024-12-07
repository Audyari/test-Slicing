/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        yuji: ['Yuji Mai', 'sans-serif'], // Menambahkan font Yuji Mai
      },
      colors:{
        "pink-kb":"#FE9AA0",
        "background":"#F7F7F7"
      }
    },
  },
  plugins: [],
}