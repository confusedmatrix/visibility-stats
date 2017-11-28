const path = require('path');
const webpack = require('webpack');

module.exports = function(env) {

    let plugins = [];

    (env === 'prod') ? [
        plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
        }))
    ] : '';

    return {
        entry: path.resolve(__dirname, 'src/main.js'),
        devtool: 'source-map',
        output: {
            library: 'VisibilityStats',
            libraryExport: 'default',
            libraryTarget: 'umd',
            path: __dirname,
            filename: (env === 'prod') ? 'dist/visibility-stats.min.js' : 'dist/visibility-stats.js',
            umdNamedDefine: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [ 'babel-loader' ],
                    exclude: path.resolve(__dirname, 'node_modules'),
                },
            ],
        },
        plugins: plugins
    };
}