const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const env = require('../config/prod.env');

module.exports = merge(commonConfig, {
  mode: 'production',
  module: {
    rules: []
  },
  // devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
    }),
  ]
})