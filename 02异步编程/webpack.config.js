const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // mode: 'development',
  mode: 'none',
  stats: 'none',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

// npm i --dev-save html-webpack-plugin
// npm i -g yarn
// yarn add webpack-dev-server -D
// yarn webpack-dev-server 5.Promise基本用法.js --open
