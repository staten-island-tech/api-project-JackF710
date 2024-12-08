/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  colors: {
        primary: '#fff6df',
        secondary: '#1a3150',
        tertiary: '#fb8d7e',
        text: '#000000'
      },
    },
  },
  plugins: [require("daisyui")],
};


