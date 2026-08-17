/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#121212',
          card: '#1F2937',
          accent: '#F59E0B',
          teal: '#FBBF24',
          rose: '#D97706',
        }
      }
    },
  },
  plugins: [],
}
