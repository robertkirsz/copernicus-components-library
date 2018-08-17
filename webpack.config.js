const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const demo = path.resolve(__dirname, 'demo');

module.exports = {
  entry: './src/index.tsx',
  output: { path: demo },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'awesome-typescript-loader' },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  // Enable sourcemaps for debugging Webpack's output
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new CleanWebpackPlugin('demo'),
    new HtmlWebPackPlugin({ template: './src/index.html', filename: './index.html' })
  ]
};
