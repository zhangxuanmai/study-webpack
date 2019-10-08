const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const devConfig = {
  mode: 'development', // 模块打包的模式 { 开发模式：development , 生产模式：production }

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: './dist',
    open: true,
    port: 9000,

    hot: true,
    // hotOnly: true,
  },

  // 使用TREE-SHAKING在开发环境下需要配置下列
  // 生产环境下不需要
  // 注意：一些特殊情况需要在 package.json 配置 sideEffects
  optimization: {
    usedExports: true,
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(commonConfig, devConfig)