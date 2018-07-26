// var webpack = require('webpack');

// module.exports = {
//   context: __dirname,
//   devtool: debug ? "inline-sourcemap" : null,
//   entry: "./js/scripts.js",
//   output: {
//     path: __dirname + "/js",
//     filename: "scripts.min.js"
//   },
//   plugins: []
// };
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  })]
};