// /https://github.com/gshigeto/ionic-environment-variables
var chalk = require("chalk");
var fs = require('fs');
var path = require('path');
var {dev, prod } = require('@ionic/app-scripts/config/webpack.config.js');
const webpackMerge = require('webpack-merge');

var env = process.env.IONIC_ENV;

const customConfig = {
  resolve: {
    alias: {
      '@app/constants': path.resolve('src/constants/constants'),
      "@app/store": path.resolve('src/store/index'),
      "@app/env": path.resolve('src/environment/environment.' + env + '.ts')
    }
  }
};

module.exports = {
  dev: webpackMerge(dev, customConfig),
  prod: webpackMerge(prod, customConfig)
};