const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        halodick: [
          "HaloDek-MAdae",
          "HaloDek-rvd7O",
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
