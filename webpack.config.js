const path = require('path');
module.exports = {
    entry: './dist/index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, './'),
        library: "HtmlParser",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
};