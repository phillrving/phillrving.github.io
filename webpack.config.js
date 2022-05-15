const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true,
    },
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    plugins:[
        new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery'
		}),
        new HtmlPlugin({
            template: './src/index.html'
        }),
        new MiniCssPlugin({
            filename: 'css/bundle.css'
        })
    ],
    module: {
        rules: [
            {test:/\.css$/, use: [MiniCssPlugin.loader, 'css-loader']},
            {test:/\.less$/, use: [MiniCssPlugin.loader, 'css-loader', 'less-loader']},
            {test:/\.scss$/, use: [{
                loader: MiniCssPlugin.loader,
                options: {publicPath: '..'}
            }, 'css-loader', 'sass-loader']},
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'javascript/auto',
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            esModule: false,
                            name: '[hash:10].[ext]'
                        },
                    },
                ],
            },
            {test:/\.html$/, use: ['html-loader']},
        ]
    }
};