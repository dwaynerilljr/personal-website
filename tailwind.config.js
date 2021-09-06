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
        'jura': ["'Jura', 'sans'"],
        'audiowide': ["'Audiowide', 'sans'"]
      },
      height: {
        'screen-75': "50vh",
      },
      backgroundImage: {
        'split-bg': "linear-gradient(110deg, #ff2a6d 45%, #fff 45%)"
      },
      fontSize: {
        'text-2-1/5xl': '1.725rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
