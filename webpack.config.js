module.exports = {
    entry: {
        search: './src/js/search.js',
        store: './src/js/store.js',
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