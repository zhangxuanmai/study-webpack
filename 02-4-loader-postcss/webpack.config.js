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
      test: /\.scss$/,
      use: [
        'style-loader', // 将 JS 字符串生成为 style 节点
        {
          loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
          options: {
            modules: true, // 开启样式模块化
            importLoaders: 2, // 样式内引入其他样式，保证引入的样式也会先走一遍下面的两个 loader
          }
        }, 
        'sass-loader', // 将 Sass 编译成 CSS，默认使用 Node Sass
        'postcss-loader', // 添加样式前缀
      ]
    }]
  },
};