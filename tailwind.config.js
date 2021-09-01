module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff2a6d',
        'neon-teal': '#05d9e8',
        'cyber-white': '#d1f7ff',
        'dark-teal': '#005678',
        'default-black': '#01012b',
      },
      fontFamily: {
        'jura': ["'Jura', 'sans'"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
