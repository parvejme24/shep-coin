const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        halodick: [
          "HaloDek-MAdae", // This is one of the styles
          "HaloDek-rvd7O", // Another style
          ...defaultTheme.fontFamily.sans,
        ],
        comicsans: [
          "COMIC",
          "comici",
          "ComicSansMS3",
          "comicz",
          "design.graffiti.comicsansms",
          "design.graffiti.comicsansmsgras",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
