module.exports = {
    entry: {
        index: './src/js/index.js',
        search: './src/js/search.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        library: 'myLib'
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
        ]
    },
    mode: 'development',
    devtool: 'source-map'
};