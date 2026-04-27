/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07071A",
          900: "#0C0C21",
          800: "#111130",
          700: "#1a1a45",
          600: "#222260",
        },
        gold: {
          300: "#F4D578",
          400: "#E8C547",
          500: "#D4A017",
          600: "#B8860B",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
