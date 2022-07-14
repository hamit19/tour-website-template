/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
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
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(240px, 1fr))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant }) {
      addVariant("radio-checked", "&:checked ~ label");
      addVariant("input-focused", "&:focus ~ svg");
    }),
  ],
};
