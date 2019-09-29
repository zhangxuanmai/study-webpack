const  path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development', // 模块打包的模式 { 开发模式：development , 生产模式：production }

  // 推荐开发环境使用 cheap-module-eval-source-map
  // 生产环境建议使用 cheap-module-source-map
  devtool: 'source-map', 

  devServer: {
    contentBase: './dist',
    open: true,
    // port: 8090,
    // proxy: {
    //   '/api': 'http://localhost:3000'
    // },
  },
  
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