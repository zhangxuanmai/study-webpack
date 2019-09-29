const  path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 模块打包的模式 { 开发模式：development , 生产模式：production }

  devServer: {
    contentBase: './dist',
    open: true,
    // port: 9000,
    hot: true,
    hotOnly: true,
  },
  
  entry: './src/index.js', //文件的入口

  output: {
    filename: 'bundle.js', //输出的文件别名
    path: path.resolve(__dirname, 'dist') // 输出的文件存放路径
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader', // 将 JS 字符串生成为 style 节点
        'css-loader', // 将 CSS 转化成 CommonJS 模块
      ]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};