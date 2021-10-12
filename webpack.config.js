const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: {
        app: './src/app.tsx',
    },
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new ReactRefreshWebpackPlugin(),
        new CheckerPlugin(),
    ],
    devServer: {
        hot: true,
        liveReload: false,
    },
};
