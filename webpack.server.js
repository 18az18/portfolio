const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base");

const config = {
  entry: "./src/index.js",
  target: "node",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "server"),
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
  ],
  externals: [webpackNodeExternals()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = merge(baseConfig, config);
