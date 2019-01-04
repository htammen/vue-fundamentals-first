// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var path = require('path');

const SRC = path.resolve(__dirname, './src');
const DIST = path.resolve(__dirname, './dist');

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        path: DIST,
        publicPath: '/dist/',
        filename: 'build.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                //include: SRC,
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
        //hot: true, // Enable Hot Module Replacement feature.
        open: true, // When open is enabled, the dev server will open the browser.
        overlay: true, // Show a full-screen overlay in the browser when there are compiler errors or warnings.
        port: 9000, // Specify a port number to listen for requests on.
        disableHostCheck: true,
        inline: true,
        //host: '0.0.0.0',
        //public: '9000-df1b279c-f0fd-474a-9024-a9a3d3f1d1d4.ws-eu.gitpod.io:443'
    },
    //performance: {
    //    hints: false
    //},
    devtool: '#eval-source-map'

};

/*
if (process.env.NODE_ENV === 'production') {
  webpackConfig.devtool = '#source-map';
  webpackConfig.plugins = (webpackConfig.plugins || []).concat([
    // Short-circuit all warning code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // Minify with dead-code elimination.
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      },
      parallel: true
    })
  ]);
}
*/