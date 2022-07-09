/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      padding: {
        md: "56%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
