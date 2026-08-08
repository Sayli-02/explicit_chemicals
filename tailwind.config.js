/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#022c22',
          hover: '#064e3b',
        },
        steelblue: '#57534e',
        teal: {
          heading: '#047857',
          accent: '#d97706',
        },
        block: {
          DEFAULT: '#064e3b',
          hover: '#047857',
        }
      }
    },
  },
  plugins: [],
}
