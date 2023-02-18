/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.jsx', './index.html'],
  },
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0FA9E6',
          light: '#3FBAEB',
          dark: '#0C87B8',
        }
      },
      fontFamily: {
        headline: 'Poppins, sans-serif',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  plugins: [],
}
