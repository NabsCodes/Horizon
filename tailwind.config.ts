const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(rgb(155, 114, 247) 0%, rgb(139, 92, 246) 100%)",
        "inverse-primary-gradient":
          "linear-gradient(rgb(139, 92, 246) 0%, rgb(111, 71, 205) 100%)",
        "secondary-gradient":
          "linear-gradient(rgb(253, 253, 253) 0%, rgb(246, 246, 247) 100%) rgba(0, 0, 0, 0)",
        "inverse-secondary-gradient":
          "linear-gradient(rgb(246, 246, 247) 0%, rgb(253, 253, 253) 100%) rgba(0, 0, 0, 0)",
      },
      boxShadow: {
        "primary-shadow": "rgba(30, 7, 81, 0.12) 0px 4px 6px 0px",
        "secondary-shadow":
          "rgba(17, 3, 48, 0.07) 0px 2px 6px 0px, rgba(0, 0, 0, 0.03) 0px 1px 1px 0px",
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(.44,0,.56,1)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        "custom-purple": "#8B5CF6",
      },
      maskImage: {
        "custom-gradient":
          "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".mask-custom-gradient": {
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
