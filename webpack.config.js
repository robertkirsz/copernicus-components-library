const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const demo = path.resolve(__dirname, 'demo');
const library = path.resolve(__dirname, 'src/library');
const examples = path.resolve(__dirname, 'src/examples');

module.exports = {
  entry: './src/index.js',
  output: { path: demo },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('demo'),
    new HtmlWebPackPlugin({ template: './src/index.html', filename: './index.html' })
  ],
  resolve: {
    alias: { library, examples }
  }
};
