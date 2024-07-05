/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'popins': ["Poppins", "sans-serif"],
      'slab': ["Roboto Slab", 'serif'],
    },    
    container: {
      center: true,
      padding:'80px',
    extend: {},
  },
  plugins: [],
}
}
