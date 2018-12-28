// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var path = require('path');
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [ {loader: 'vue-loader'}]
            },
            {
                test: /\.(png|jpg|eot|svg|ttf|woff)/,
                use: 'url?limit=40000'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
    devServer: {
        disableHostCheck: true,
        port: 9000
    }

}