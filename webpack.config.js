var webpack = require('webpack');
// ExtractTextPlugin will bundle all of our css files into one file
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// HtmlWebpackPlugin will generate an index.html file in our output dir
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      // run JS files through babel
      { test: /\.js$/, include: __dirname + '/app', loader: "babel-loader" },
      // load images
      { test: /\.(png|jpg)$/, include: __dirname + '/app/images', loader: 'url-loader?limit=8192' },
      // load css files and create css modules with unique class names
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('styles.css'),
    // set NODE_ENV to production
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // silence UglifyJs warnings about dead code removal
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
