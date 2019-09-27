const path = require('path');

module.exports = {
  mode: 'development', // 模块打包的模式 { 开发模式：development , 生产模式：production }

  entry: './src/index.js', //文件的入口

  output: {
    filename: 'bundle.js', //输出的文件别名
    path: path.resolve(__dirname, 'dist') // 输出的文件存放路径
  },

  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: { 
        loader: 'file-loader',
        options: {
          name: '[name].[ext]', // 保留原始的文件名称 
          outputPath: 'images/' // 文件的输出路径
        }
      }
    }]
  },
};