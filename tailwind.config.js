/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // all JS/TS files in src folder
    "./public/index.html"          // in case you use static HTML
  ],
  theme: {
    extend: {}, // you can add custom colors, fonts, spacing later
  },
  plugins: [],  // you can add Tailwind plugins here if needed
};
