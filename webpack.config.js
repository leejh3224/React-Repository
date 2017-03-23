var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:  [
    "babel-polyfill",

    'react-hot-loader/patch',

    'webpack-dev-server/client?http://localhost:8080',

    'webpack/hot/only-dev-server',

    './src/css/App.css',

    './src/index.js'
  ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    devServer: {
        inline: true,
        hot: true,
        contentBase: [ path.join(__dirname, 'public'),
        path.join(__dirname, 'static') ],
        historyApiFallback: true,
        watchContentBase: true,
        publicPath: '/'
    },

    resolve: {
      extensions: ['.js', '.css', '.json'],
    },

    devtool: 'inline-source-map',

    module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['react', 'es2015', 'stage-2']
                    }
                },
                {
                  test: /\.css$/,
                  loader: ['style-loader', 'css-loader']
                },
                {
                   test: /\.(jpe?g|png|gif|svg)$/i,
                   loaders: [
                       'file?hash=sha512&digest=hex&name=[hash].[ext]',
                       'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                       ]
                },
            ]
        },
    plugins: [
       new webpack.HotModuleReplacementPlugin(),
       // enable HMR globally

       new webpack.NamedModulesPlugin(),
       // prints more readable module names in the browser console on HMR updates

     ],
};
