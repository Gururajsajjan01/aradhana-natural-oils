/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,json}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1B5E20",
        leaf: "#4CAF50",
        gold: "#D4AF37",
        cream: "#F8F5E9"
      },
      fontFamily: {
        heading: ["Poppins", "Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(27, 94, 32, 0.14)"
      }
    }
  },
  plugins: []
};
