const path = require("path")

module.exports = {
  entry: "./App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "./")
  },
  mode: "development",
  watch: true
}
