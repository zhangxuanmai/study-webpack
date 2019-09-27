const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 模块打包的模式 { 开发模式：development , 生产模式：production }
  mode: 'development', 
  
  //文件的入口
  entry: {
    main: './src/index.js',
    other: './src/index.js',
  }, 

  output: {
    // publicPath: 'http://cdn.com.cn', // 加入JS相关文件放到另外的cdn服务上，可以使用该配置
    filename: '[name].js', //输出的文件别名
    path: path.resolve(__dirname, 'dist') // 输出的文件存放路径
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CleanWebpackPlugin()
  ]
};