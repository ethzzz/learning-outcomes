/**
 * @date 2021/5/14
 * @author: ethz
 * @Description: webpack配置
 */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')  // 清除webpack插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production' // 判断环境是否为生产环境

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  // 入口 从哪里开始打包
  entry: {
    main: './src/main.ts'
  },
  // 出口 打包的文件输出在哪里
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash:8].js'
  },
  // loader 模块 将webpack不能识别的css,sass,scss,less,ts文件预编译为可以识别的js文件
  module: {
    // 配置规则
    rules: [
      {
        test: '/\.ts$/',
        use: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },
  /**
   * @date 2021/5/14
   * @author: ethz
   * @Description: webpack针对html文件的打包插件
   */
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],


  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: isProd ? 'cheap-module-source-map' : 'eval-cheap-source-map',

  devServer: {
    host: 'localhost', // 主机名
    stats: 'errors-only', // 打包日志错误输出信息
    port: 8081, // 端口
    open: true

  }
}
