/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}',
  './**/*.{html,js}',],
  theme: {
    extend: {
      fontFamily: {
        neueRegular: ['NeueRegular'],
        neueBold: ['NeueBold']
      }
    },
  },
  plugins: [],
}
