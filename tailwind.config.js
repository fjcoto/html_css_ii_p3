/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#3a63df',
      'gray': '#f8f9fa',
      'gray-light': '#d3dce6',
      'pink': '#fabada',
      'green': '',
    },
    extend: {
      boxShadow: {
        'pink': '0 0 0.5rem 0.5rem pink',
      },
    }
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    }
  },
  plugins: [],
}

