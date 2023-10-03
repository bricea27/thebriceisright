import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      background: "#F3EDE4",
      "background-light": "#D9C3AA",
      text: {
        primary: "#394041",
        secondary: "#8D866E",
      },
    },
    fontFamily: {
      sans: ["circe-rounded", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
