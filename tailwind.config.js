import colors from 'tailwindcss/colors';


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      background: "#F3EDE4",
      text: {
        primary: "#394041",
        secondary: "#8D866E",
      },
    },
  },
  plugins: [],
};
