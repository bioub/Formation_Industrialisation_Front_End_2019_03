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
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage", // or "entry"
                    corejs: 3
                  }
                ]
              ]
            }
          }
        }
      ]
    }
  };

  return config;
}

module.exports = configFactory;
