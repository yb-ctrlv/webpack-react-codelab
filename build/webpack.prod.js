const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const env = require('../config/prod.env');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
          use: [
            {
              // We configure 'MiniCssExtractPlugin'              
              loader: MiniCssExtractPlugin.loader,
            }, 
            {
              loader: 'css-loader',
              options: {
                modules: {
                  compileType: 'module',
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  exportLocalsConvention: 'camelCase',
                },
                sourceMap: true
              }
            },
            {
              // PostCSS will run before css-loader and will 
              // minify and autoprefix our CSS rules.
              loader: 'postcss-loader',
            }
          ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash].css'
    }),
  ]
})