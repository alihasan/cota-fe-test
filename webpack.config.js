'use strict';

var webpack = require('webpack'),
path = require('path');

var APP = __dirname + '/app';

module.exports = {
  context: APP,
  entry: {
    app: ['webpack/hot/dev-server', './core/bootstrap.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
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
        // ASSET LOADER
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=5000&name=img/img-[hash:6].[ext]"
      },
      {
        // HTML LOADER
        test: /\.html$/,
        loader: 'html-loader'
      },
    ]
  }
};
