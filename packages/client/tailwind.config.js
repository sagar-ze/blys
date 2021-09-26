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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
