/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', 'sans-serif'],
        arabic: ['"Aref Ruqaa"', 'serif'],
      },
      colors: {
        primary: {
          dark: '#1d1d1d',
          light: '#fff',
        },
        accent: '#22C55E',
      },
    },
  },
  plugins: [],
}
