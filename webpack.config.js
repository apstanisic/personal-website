const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
// const UglifyJSPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: ['babel-polyfill', './assets/app.js'],
  output: {
    filename: 'javascripts/script.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
	  rules: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      // {
      //   test: /\.sass$/,
      //   use: ExtractTextPlugin.extract({
      //     use: [
      //       // {loader: 'style-loader'},
      //       {loader: 'css-loader', options: { url: false, importLoaders: 1 }},
      //       // {loader: 'postcss-loader'},
      //       {loader: 'sass-loader'}
      //     ]
      //   })
      // },
	  ]
	},
  plugins: [
    // new ExtractTextPlugin('stylesheets/style.css'),
    new webpack.optimize.UglifyJsPlugin() // minify js
  ]
};