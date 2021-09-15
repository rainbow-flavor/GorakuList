module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        library: 'GLBundle'
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
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    mode: 'development',
    devtool: 'source-map'
};