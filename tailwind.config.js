import("tailwindcss").Config;

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    screens: {
      sm: "500px",
      md: "900px",
      lg: "1200px",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Noto: ["Noto Sans JP", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('./assets/hero.webp')",
      },
      colors: {
        primary: "#2962ff",
        black: "#000",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
