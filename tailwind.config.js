/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#2967F0',
        lightblue: '#5faafd',
        'lightblue-bg': '#F2F6FF',
        'lightblue-team-bg': '#DBEBFF',
        'lightblue-service-icon': '#FBFBFF',
        'lightblue-contacts-bg': '#F9FBFF',
        'lightblue-contacts-line': '#A3ABF4',
        darkblue: '#0F38B4',
        'darkblue-team-bg': '#3060C9',
        'darkblue-service-line': '#4950ED',
        gray: '#757575',
        lightgray: '#B3B3B3'
      },
      opacity: {
        35: '0.35'
      },
      width: {
        '100vw': '100vw',
        logo: '177px'
      },
      height: {
        '100vh': '100vh',
        logo: '46px'
      },
      fontFamily: {
        gilroy: 'Gilroy',
        raleway: 'Raleway'
      },
      boxShadow: {
        feedback: '0px 3.70811px 10.1973px rgba(0, 0, 0, 0.1)',
        service: '0px 3px 28px rgba(203, 203, 203, 0.25)',
        'service-links': '0px -1px 28px rgba(203, 203, 203, 0.25)',
        subservice: '0px 14px 28px rgba(203, 203, 203, 0.25)'
      },
      transitionProperty: {
        height: 'height'
      },
      keyframes: {
        'to-bg-white': {
          '0%': { backgroundColor: 'transparent' },
          '100%': { backgroundColor: 'white' }
        },
        'to-bg-transparent': {
          '0%': { backgroundColor: 'white' },
          '100%': { backgroundColor: 'transparent' }
        },
        'fill-blue': {
          '100%': { fill: '#2967F0' }
        },
        'fill-white': {
          '100%': { fill: '#FFFFFF' }
        },
        'fill-black': {
          '100%': { fill: '#000000' }
        },
        visible: {
          '100%': { visibility: 'visible' }
        },
        invisible: {
          '100%': { visibility: 'invisible' }
        }
      },
      animation: {
        'change-bg-to-white': 'to-bg-white ease-in-out .35s forwards',
        'change-bg-to-transparent': 'to-bg-transparent ease-in-out .35s forwards',
        'fill-blue': 'fill-blue .35s ease-in-out forwards',
        'fill-white': 'fill-white .35s ease-in-out forwards',
        'fill-black': 'fill-black .35s ease-in-out forwards',
        'make-visible': 'visible .35s ease-in-out forwards',
        'make-invisible': 'invisible .35s ease-in-out forwards'
      }
    }
  },
  plugins: []
}
