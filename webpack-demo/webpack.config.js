/**
 * @date 2021/5/15
 * @author: ethz
 * @Description:  webpack打包配置
 */
const path = require('path') // 引入node处理路径的模块
const htmlWebpackPlugin = require('html-webpack-plugin')

// 封装方法
const resolve = function (value) {
    return path.resolve(__dirname, value)
}
// 当前当前环境
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    // 入口文件
    entry: 'src/main.ts',

    // 出口
    output: {
        path: 'build',
        filename: 'built.js',
    },

    // loader  use数组中处理是从右到左，从下到上的
    modules: {
        rule: [
            // 处理typescript
            {
                test: '/\.tsx$/',
                use: [
                    'ts-loader',
                ],
            },
            {
                test: '/\.css$/',
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: '/\.less$/',
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: '/\.(sass|scss)$/',
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                // 匹配以.jpg png gif结尾的图片文件
                test: '/\.(jpg|png|gif)$/',
                // 使用一个 loader // 下载 url-loader file-loader
                loader: 'url-loader', // 当只需要一个loader时可以这样写
                options: {
                    // 图片大小小于 8kb，就会被 base64 处理
                    // 优点: 减少请求数量（减轻服务器压力）
                    // 缺点：图片体积会更大（文件请求速度更慢）
                    limit: 8 * 1024,
                    // 问题：因为 url-loader 默认使用 es6 模块化解析，而 html-loader 引入图片是 commonjs
                    // 解析时会出问题：[object Module]
                    // 解决：关闭 url-loader 的 es6 模块化，使用 commonjs 解析
                    esModule: false,
                    // 给图片进行重命名
                    // [hash:10] 取图片的 hash 的前 10 位
                    // [ext] 取文件原来扩展名
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: '/\.html$/',
                loader: 'html-loader',
            },
            // 打包其他资源 除了html,js,css等以外的资源
            {
                exclude: '/\.(html|js|css|less|sass|scss|jpg|png|gif)$/',
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[txt]'
                }
            }
        ],
    },

    // resolve
    resolve: {
        // 封装绝对路径
        alias: {
            'src': resolve(__dirname, 'src'), // 相当于 /src
            'build': resolve(__dirname, 'build'), // 相当于 /build
            'public': resolve(__dirname, 'public') // 相当于/public
        }
    },

    // plugin 插件
    plugins: [
        // plugins 的配置 // html-webpack-plugin
        // 功能：默认会创建一个空的 HTML，自动引入打包输出的所有资源（JS/CSS）
        // 需求：需要有结构的 HTML 文件
        new htmlWebpackPlugin({
            // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS
            template: 'src/index.html'
        })
    ],

    // 打包方式 production会进行代码压缩
    mode: isProd ? 'production' : 'development',  // 根据当前环境采用打包方式

    // 开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器~~）
    // 特点：只会在内存中编译打包，不会有任何输出
    // 启动devServer指令为：npx webpack-dev-server
    devServer: {
        contentBase: 'build', // 项目构建后的路径
        compress: true, // 启动zip压缩
        port: 3000, // 端口号
        open: true // 自动打开浏览器
    }
}