/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#3a63df',
      'gray': '#f8f9fa',
      'gray-light': '#d3dce6',
      'pink': '#fabada',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      boxShadow: {
        'pink': '0 0 0.5rem 0.5rem pink',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    }
  },
  plugins: [],
}

