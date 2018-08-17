const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: { path: path.resolve(__dirname, 'dist') },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    // TODO: do this only when running `npm run build`, not `npm start`
    new CleanWebpackPlugin('dist'),
    new HtmlWebPackPlugin({ template: './src/index.html', filename: './index.html' })
  ]
};
