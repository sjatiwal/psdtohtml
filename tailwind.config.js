/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-Image": "url('/src/images/background.jpg')",
        "yellow-background": "url('/src/images/yellow.jpg')",
      },
    },
  },
  plugins: [],
};
