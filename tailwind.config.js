import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["greycliff-cf", "DM Sans", "obvia", "sans-serif"],
    },
    extend: {
      colors: {
        merino: {
          50: "#f9f6f3",
          100: "#f3ede4",
          200: "#e4d6c4",
          300: "#d3bb9e",
          400: "#c09a77",
          500: "#b3825c",
          600: "#a67050",
          700: "#8a5a44",
          800: "#704a3c",
          900: "#5b3e33",
          950: "#311f19",
        },
      },
      animation: {
        "draw-line": "draw-line 1s ease-in-out",
        "fade-in-up": "fade-in-up 0.6s ease-in-out",
      },
      keyframes: {
        "draw-line": {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
            strokeDashoffset: 1000,
          },
          "60%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
            strokeDashoffset: 0,
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
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
