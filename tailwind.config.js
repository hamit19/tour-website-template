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
      colors: {
        dark: {
          800: "#232326",
          600: "#3b3b41",
          500: "#45454A",
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
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
