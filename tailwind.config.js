/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'blue': '#3a63df',
      'gray': '#f8f9fa',
      'gray-light': '#d3dce6',
      'gray-dark': '#6c757d',
      'pink': '#fabada',
    },
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ],
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
      boxShadow: {
        'pink': '0 0 0.5rem 0.5rem pink',
      },
      width: {
        '4/5': '80%',
      },
      maxWidth: {
        '7.5xl': '85rem',
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem',
      },
      keyframes: {
        'roll-in-top': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-250px) rotate(-200deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) rotate(0)'
          },
        },
        'wave': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(-10px)',
          },
          '50%': {
            transform: 'translateY(5px)',
          },
          '75%': {
            transform: 'translateY(-5px)',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    }
  },
  plugins: [],
}

