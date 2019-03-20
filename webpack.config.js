const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function configFactory(_, { mode }) {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: mode === 'development' ? 'source-map' : false,
    entry: {
      'validate-form': './src/index.js',
      'tooltip-modal': './src/js/tooltip-modal.js',
    },
    output: {
      filename: mode === 'development' ? '[name].js' : '[name].[chunkhash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: mode === 'development' ? '[name].css' : '[name].[chunkhash].css',
        chunkFilename: '[id].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-syntax-dynamic-import'],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage', // or "entry"
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        },
        // {
        //   test: /\.module\.scss$/,
        //   use: [
        //     "style-loader", // creates style nodes from JS strings
        //     { loader: "css-loader", options: { modules: true } }, // translates CSS into CommonJS
        //     "sass-loader" // compiles Sass to CSS, using Node Sass by default
        //   ]
        // },
        {
          test: /\.scss$/,
          use: [
            mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader', // translates CSS into CommonJS
            'sass-loader', // compiles Sass to CSS, using Node Sass by default
          ],
        },
      ],
    },
  };

  return config;
}

module.exports = configFactory;
