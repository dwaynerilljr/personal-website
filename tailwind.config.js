module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#329ffe',
        'secondary': '#F0C808',
        'ternary': '#d65780',
        'light': '#fefae6',
        'primary-light': '#ebf5ff',
        'ternary-light': '#f7dde6'
      },
      fontFamily: {
        'primary': ['"Josefin Sans", "sans"'],
        'secondary': ["'Allan', 'sans'"]
      },
      height: {
        '75v': "75vh",
        '80v': "80vh",
        'screen-50': "50vh"
      },
      backgroundImage: {
        'split': "linear-gradient(110deg, #10a3a2 45%, #005377 45%)",
        'split-2': "linear-gradient(110deg, #05d9e8 45%, #ff2a6d 45%);"
      },
      fontSize: {
        'text-2-1/5xl': '1.725rem',
      },
      padding: {
        '64': '68px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
