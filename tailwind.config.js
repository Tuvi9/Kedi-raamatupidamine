/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': {'max': '450px'},
    },

    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/Hero-background.png')",
      }
    },
  },
  plugins: [],
}

