const HtmlWebpackPlugin = require("html-webpack-plugin");

function configFactory(_, { mode }) {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: mode === "development" ? "source-map" : false,
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

  return config;
}

module.exports = configFactory;
