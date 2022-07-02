/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    gridTemplateColumns: {
      "fill-40": "repeat(auto-fill, 10rem)",
    },
    backgroundImage: {
      stars: "url('./Assets/stars.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
