/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(rgb(155, 114, 247) 0%, rgb(139, 92, 246) 100%)",
        "inverse-gradient":
          "linear-gradient(rgb(139, 92, 246) 0%, rgb(111, 71, 205) 100%)",
      },
      boxShadow: {
        "custom-shadow": "rgba(30, 7, 81, 0.12) 0px 4px 6px 0px",
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(.44,0,.56,1)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    variants: {
      extend: {
        backdropBlur: ["responsive"],
      },
    },
  },
  plugins: [],
};
