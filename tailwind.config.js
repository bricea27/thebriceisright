import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      bg: "#131417",
      link: "#aaa",
      "link-hover": "#fff",
      label: "#adadad",
      text: "#fff",
      "text-alt": "#575757",
      caption: "#fff",
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-in-out",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
