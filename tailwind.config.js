/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
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
    },
  },
  plugins: [],
};
