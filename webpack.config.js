'use strict';

var webpack = require('webpack'),
path = require('path');

var APP = __dirname + '/app';

module.exports = {
  context: APP,
  entry: {
    app: ['webpack/hot/dev-server', './core/bootstrap.js']
  },
  output: {
    path: APP,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // STYLE LOADER
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
        loader : 'file-loader?name=res/[name].[ext]?[hash]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=5000&name=img/img-[hash:6].[ext]"
      },
      {
        // HTML LOADER
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    root: APP
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
