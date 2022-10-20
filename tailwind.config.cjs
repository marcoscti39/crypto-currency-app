/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#172815",
        desaturatedGreen: "#3e5622",
        lightGreen: "#7EAC49",
      },
      margin: {
        sideBarWidth: "300px",
      },
      width: {
        sideBarWidth: "300px",
      },
    },
  },
  plugins: [],
};
