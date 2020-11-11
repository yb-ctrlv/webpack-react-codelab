const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const config = require('../config');
const env = require('../config/dev.env');

module.exports = merge(commonConfig, {
  mode: 'development',
  module: {
    rules: []
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
    }),
  ],
  devServer: {
    host: 'localhost',
    port: config.dev.port,
    historyApiFallback: true,
    open: true
  }
});


