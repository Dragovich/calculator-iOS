const path = require("path");
var webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  target: "node",
  devServer: {
    port: "4332",
    contentBase: ["./public"],
    open: true
  },
  resolve: {
    extensions: [".js",".jsx",".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
