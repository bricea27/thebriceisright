import colors from "tailwindcss/colors";

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
      animation: {
        "fade-in": "fade-in 0.6s ease-in-out",
        "fade-in-left": "fade-in-left 0.6s ease-in-out",
        "fade-in-right": "fade-in-right 0.6s ease-in-out",
        "fade-in-up": "fade-in-up 0.6s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
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
    },
  },
  plugins: [],
};
