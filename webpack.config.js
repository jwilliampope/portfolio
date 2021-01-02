const path = require("path")

module.exports = {
  entry: "./App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "./")
  },
  devServer: {
    contentBase: path.join(__dirname, "./"),
    hot: true,
    port: 3000
  },
  mode: "development"
}
