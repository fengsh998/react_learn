const path = require('path');
const htmlplugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

let pathsToClean = [
    'dist/*.*',
    'build'
]

let cleanOptions = {
    root: __dirname,
    verbose: true,
    dry: false
}

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.js')
    },
    mode: 'development',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map', //开发阶段的
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new htmlplugin({
            title: 'Html 插件 Demo',
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,      //当碰到js或jsx文件时,即文件中用到import 或reqire导入js时
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["es2015", "react"]
                }
            },
            exclude: [
                path.resolve(__dirname, './node_modules')
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        overlay: true,
        hot: true,
        inline: true
    }
}