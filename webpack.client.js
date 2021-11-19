const path = require("path");
const webpack = require("webpack");
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  entry: "./src/client/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = merge(baseConfig, config);