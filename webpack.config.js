/*!
 * @name        Webpack 2 React.js Boilerplate
 * @author      Oleg Bilyk <https://www.linkedin.com/in/oleg-bilyk-3a6817b5/>
 * @version     1.0.0
 */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const develop = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.resolve(__dirname, './src'),

  entry: {
    app: './app.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  devtool: develop ? 'cheap-module-source-map' : false,

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.pcss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
      disable: develop
    })
  ]
}
