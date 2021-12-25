const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        search: './src/scripts/search.js',
        store: './src/scripts/store.js',
        cs: './src/scripts/cs.js',
        common: './src/scripts/common.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg)/,
                loader: 'file-loader',
                options: {
                    name: 'resources/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/templates/index.html',
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            filename: '404.html',
            template: './src/templates/404.html',
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            filename: 'cs.html',
            template: './src/templates/cs.html',
            chunks: ['cs']
        }),
        new HtmlWebpackPlugin({
            filename: 'search.html',
            template: './src/templates/search.html',
            chunks: ['search']
        }),
        new HtmlWebpackPlugin({
            filename: 'store.html',
            template: './src/templates/store.html',
            chunks: ['store']
        }),
        new HtmlWebpackPlugin({
            filename: 'legal/privacy.html',
            template: './src/templates/legal/privacy.html',
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            filename: 'legal/toc.html',
            template: './src/templates/legal/toc.html',
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            filename: 'naverf44252caf838732eb24f2da540c52331.html',
            template: './src/templates/naverf44252caf838732eb24f2da540c52331.html',
            chunks: []  
        }),
        new HtmlWebpackPlugin({
            filename: 'store-card.html',
            template: './src/templates/store-card.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'CNAME',
            template: './CNAME',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'sitemap.xml',
            template: './sitemap.xml',
            chunks: []
        })
    ],
    mode: 'development',
    devtool: 'source-map'
};
