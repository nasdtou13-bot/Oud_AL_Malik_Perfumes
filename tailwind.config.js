/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        amber: {
          50: '#fdfbf7',
          100: '#faedd9',
          200: '#f5daa8',
          300: '#efbe70',
          400: '#e59d3b',
          500: '#c59a47',
          600: '#b27f2f',
          700: '#8c5d23',
          800: '#724921',
          900: '#5f3d1e',
        },
      },
    },
  },
  plugins: [],
}
