// 引入一个包
const path = require('path')
// 自动生成html文件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// clean-webpack-plugin 打包时每次都是清空旧文件之后再生成新的文件，而不是新文件替换旧文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 入口文件
    entry: './src/index.ts',
    // 指定打包文件所在目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名
        filename: 'bundle.js'
    },
    // 指定webpack打包时要用的模块
    /*
    * 配置babel，babel，是将新版js转换为低版js以兼容低版本的浏览器，
    * babel插件也相当于一个新的加载器loader，所以在webpack中配置的时候
    * 只需要改module即可，因为是ts，js的转换，所以直接在rules中的ts加载
    * 规则中改就行了，不需要写一个新的rules对象，loader是写在use中的，
    *
    * */
    module: {
        // 指定要加载的规则
        rules: [
            {
                // 指定规则生效的文件--用ts-loader来编译以ts结尾的文件,排除哪些文件exclude
                test: /\.ts$/,
                // use: 'ts-loader',
                use: [
                    { // 配置babel
                        loader: "babel-lader", // 指定加载器
                        options: { // 设置预定义环境
                            presets: [ // 指定环境的插件
                                [
                                    "@babel/preset-env",
                                    { // 配置信息
                                        target: { // 兼容的目标浏览器版本
                                            chrome: "88",
                                        },
                                        corejs: "3", // 指定core的版本，
                                        useBuiltIns: "usage" // 使用corejs的方式，usage，表示按需加载
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node-modules/
            }
        ]
    },
    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            // title: '自定义的title'
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    // 当出现模块引入时，打包会报错
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}