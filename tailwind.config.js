/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'darker-grotesque': ['Darker Grotesque', 'sans'],
      'dm-sans': ['DM Sans', 'sans'],
      'inter':['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}