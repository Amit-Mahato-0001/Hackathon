// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vibes: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
