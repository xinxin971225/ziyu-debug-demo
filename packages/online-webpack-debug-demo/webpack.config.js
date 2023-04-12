const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devtool: "hidden-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
};
