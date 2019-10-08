const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const prodConfig = {
  mode: 'production', // 模块打包的模式 { 开发模式：development , 生产模式：production }
  devtool: 'cheap-module-source-map',
};

module.exports = merge(commonConfig, prodConfig)