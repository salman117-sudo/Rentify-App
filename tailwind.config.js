/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#137fec",
        secondary: "#10b981",
        "background-light": "#f6f7f8",
        "background-dark": "#101922"
      },
      fontFamily: {
        display: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
}
