const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development', // 模块打包的模式 { 开发模式：development , 生产模式：production }
  
  entry: './src/index.js', //文件的入口

  output: {
    filename: 'bundle.js', //输出的文件别名
    path: path.resolve(__dirname, 'dist') // 输出的文件存放路径
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CleanWebpackPlugin()
  ]
};