'use strict';

const path = require('path');
const htmlplugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

let pathsToClean = [
    'dist/*.*',
    'build'
]

let cleanOptions = {
    root: __dirname,
    verbose: true,
    dry: false
}

module.exports = (env, args) => {
    console.log(env);
    console.log(args);
    return {
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
        optimization: {
            minimize: true,
            minimizer: [
                new UglifyJSPlugin()
            ]
        },
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
            },
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            overlay: true,
            hot: true,
            inline: true,
            // quiet: true
            stats: "none"
        }
    }
}