module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-typescript"],
  packageOptions: {
    types: true,
  },
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
};
