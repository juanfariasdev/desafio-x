/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        blue: {
          800: "#023E8A",
        },
      },
    },
  },
  plugins: [],
};
