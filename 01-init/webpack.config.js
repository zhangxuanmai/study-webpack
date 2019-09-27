const  path = require('path');

module.exports = {
  mode: 'development',
  
  entry: './src/index.js', //文件的入口
  
  output: {
    filename: 'bundle.js', //输出的文件别名
    path: path.resolve(__dirname, 'bundle') // 输出的文件存放路径
  }
};