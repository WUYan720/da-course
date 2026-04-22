/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rice-white': '#F7F5F0',
        'indigo-blue': '#4A6B8A',
        'ink-black': '#2C2C2C',
        'light-gray': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}