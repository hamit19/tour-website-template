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

    backgroundPosition: {
      "left-center": "left 0.5rem center",
    },

    extend: {
      padding: {
        md: "56%",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(240px, 1fr))",
      },
      transitionTimingFunction: {
        "custom-cubic": "cubic-bezier(.7,-0.2,.07,1.48)",
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
