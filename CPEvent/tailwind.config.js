/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blueP-5": "#37628D",
        "blueP-7": "#213B55",
        "bluegrey-5": "#A6BBD7",
        "bluegrey-8.5": "#44546A",
      },
    },
  },
  plugins: [],
};
