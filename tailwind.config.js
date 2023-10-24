/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        mon: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#0a1d37",
        heading: "#0a1d37",
        "sub-heading": "#999",
        hero: "#d6e5fb",
        "card-1": "#fdefe6",
        "card-2": "#d6e5fb",
        "card-3": "#ceebe9",
        "card-4": "#e2f2b2",
      },
      backgroundImage: {
        hero: "url('/src/assets/hero-bg.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
