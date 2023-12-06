module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          50: "#f1f1f1",
          100: "#d9d9d9",
          400: "#79789c",
          900: "#13174b",
          "900_19": "#2e303519",
          "100_01": "#d5d5d5",
        },
        blue: {
          50: "#e1edff",
          700: "#357ad9",
          A700: "#296ce6",
          "50_01": "#d6e7ff",
        },
        red: { 300: "#c2765b", A700: "#e30607" },
        gray: {
          50: "#f9f9f9",
          100: "#f3f3f3",
          200: "#e9e9e9",
          300: "#dadada",
          400: "#c1c1c1",
          500: "#a1a0a0",
          600: "#787777",
          800: "#524f4f",
          900: "#1c1a1a",
          "800_01": "#534f4f",
          "200_01": "#efefef",
          "800_99": "#524f4f99",
          "400_01": "#b9b9b9",
          "100_01": "#f4f5f9",
        },
        black: { 900: "#000000" },
        yellow: { 900: "#ff7526" },
        deep_orange: { A700: "#ed2518" },
        orange: { 50: "#fff4e5" },
        indigo: { 900: "#010e80" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        opensans: "Open Sans",
        harabaramaisdemo: "Harabara Mais Demo",
        oxygen: "Oxygen",
      },
      boxShadow: {
        bs1: "0px 0px  1px 0px #2e303519",
        bs: "inset 0px 4px  4px 0px #524f4f99",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#e9e9e9,#787777)",
        gradient1:
          "linear-gradient(90deg ,#010e80,#357ad9,#79789c,#c2765b,#ff7526,#ed2518)",
        gradient2: "linear-gradient(135deg ,#787777,#b9b9b9,#e9e9e9)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
