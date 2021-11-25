module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '24': '5rem'
    },
    maxWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '24': '6rem',
      '34': '8rem',
      '44': '10rem',
      '45': '12rem',
      '48': '14rem',
      '50': '16rem'
    },
    extend: {
      opacity: ['disabled']
    },
    screen: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '2': '2 2 0%',
      '3': '3 3 0%',
      '4': '4 4 0%',
      '5': '5 5 0%',
      '6': '6 6 0%',
      '7': '7 7 0%',
      '8': '8 8 0%',
      '9': '9 9 0%',
    }
  },
  variants: {
    extend: {
      variants: {
      extend: {
        textOpacity: ['dark']
        }
      }
    },
  },
  plugins: [],
}