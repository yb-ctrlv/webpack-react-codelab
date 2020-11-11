'use strict'
const { merge } = require('webpack-merge')
const prodEnv = require('./prod.env')


// DEV CONSTANTS
module.exports = merge(prodEnv, {
  CONSTANT: {
    ENV: '"DEV"',
  }
})
