/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero-background': "url('../assets/images/herobg.png')",
      'home-background': "url('../assets/images/headerhomebg.png')",
      'about-background':"url('../assets/images/sectionaboutmebg.png')",
      'hamza':"url('../assets/images/hamza.jpeg')"
    },
    extend: {},
  },
  plugins: [],
}
