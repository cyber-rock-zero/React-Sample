'use strict';
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/react/Index.tsx',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'main.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  }
};