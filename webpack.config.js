module.exports = {
    entry: {
        index: './src/js/index.js',
        search: './src/js/search.js',
        cs: './src/js/cs.js',
        common: './src/js/common.js'
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
        ]
    },
    mode: 'development',
    devtool: 'source-map'
};