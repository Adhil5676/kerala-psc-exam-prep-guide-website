/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ["Monoton"],
        full: ["Righteous"],
        cursive: ["Tangerine"],
        mallu: ["Noto Serif Malayalam"]
      },
    },
  },
  plugins: [],
}