const plugins = [];
// 去除console
if (process.env.NODE_ENV !== "development") {
  plugins.push("transform-remove-console");
}
module.exports = {
  presets: ["@quasar/babel-preset-app"],
  plugins
};
