const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode,
  devtool: false,
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    hot: true,
    port: 9000,
    open: true,
    compress: true,
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Application',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ],
};