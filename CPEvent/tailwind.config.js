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
      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
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
