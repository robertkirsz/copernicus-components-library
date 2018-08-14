const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');
const library = path.resolve(__dirname, 'src/library');
const examples = path.resolve(__dirname, 'src/examples');

module.exports = {
  mode: 'production',
  entry: {
    Button: `${library}/components/Button`,
    Checkbox: `${library}/components/Checkbox`,
    Grid: `${library}/components/Grid`,
    Input: `${library}/components/Input`,
    Radio: `${library}/components/Radio`,
    ThemeProvider: `${library}/components/ThemeProvider`,
    Typography: `${library}/components/Typography`,
    Palette: `${library}/palette`
  },
  output: {
    path: dist,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: library,
        use: ['babel-loader']
      }
    ]
  },
  externals: {
    'prop-types': 'commonjs2 prop-types',
    react: 'commonjs2 react',
    'react-dom': 'commonjs2 react-dom',
    'styled-components': 'commonjs2 styled-components'
  },
  plugins: [new CleanWebpackPlugin('dist')],
  resolve: {
    alias: { library, examples }
  }
};
