/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".release/app/dist/renderer/index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}