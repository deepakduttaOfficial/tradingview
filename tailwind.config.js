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
      boxShadow: {
        minShadow: "0 2px 6px #6a6d7899",
      },
      backgroundImage: {
        hero: "url('./assets/hero.webp')",
      },
      colors: {
        primary: "#2962ff",
        black: "#000",
        lightGray: "#f0f3fa",
        gray: "#E0E3EB",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
    // themes: [
    //   {
    //     light: {
    //       ...require("daisyui/src/colors/themes")["[data-theme=light]"],
    //       info: "#E0E3EB",
    //     },
    //   },
    // ],
  },
};
