/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'link': 'var(--color-link)'
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "black",
      "frog"
    ],
    darkTheme: "dark"
  },
}
