/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        baseblue: {
          100: "#A7BCD9",
          200: "#5D8FD8",
          300: "#37628D",
        },
        basegreen: {
          100: "#B2DB75",
          200: "#546B34",
        },
        basegray: {
          100: "#8E9186",
          200: "#333333",
          300: "#EEEEEE",
        },
        basebadge: {
          100: "#B0E8E4",
          150: "#9EC4FA",
          200: "#C3ADEB",
          250: "#F0A8DE",
          300: "#F5A3BC",
          350: "#FAB49E",
          400: "#F7C8A1",
          450: "#A1E5F7",
          500: "#B8EBAD",
          550: "#F8C3CC",
          600: "#FADB9E",
        },
      },
      fontFamily: {
        poppin: ["mitr", "sans-serif"],
      },
      spacing: {
        128: "34rem",
      },
      borderWidth: {
        0.5: "0.5px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
