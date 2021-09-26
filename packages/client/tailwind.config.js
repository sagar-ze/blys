// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#191970",
        },
        green: {
          DEFAULT: "#1fb141",
        },
        navy: {
          DEFAULT: "#000080",
        },
        info: {
          DEFAULT: "#17a2b8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
