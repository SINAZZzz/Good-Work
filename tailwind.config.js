/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        main: [
          "YekanBakhF",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        primary: "YekanBakhF",
        YekanBakhF: "YekanBakhF",
        Montserrat: "YekanBakhF",
      },
    },
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    boxShadow: {
      "3xl": " 0px 4px 15px 0px #00000040",
      "contracts-shadow": "0px 4px 17px 0px #00000040",
      Requests:
        "3.109090805053711px 3.109090805053711px 31.090909957885742px 0px #0000001A",
    },
  },
  plugins: [],
};
