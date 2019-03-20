const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
const config = {
  entry: {
    "validate-form": "./src/index.js"
  },
  output: {
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

module.exports = config;
