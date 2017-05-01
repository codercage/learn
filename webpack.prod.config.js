var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

module.exports = {
  plugins:[
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    //new webpack.BannerPlugin('Copyright Cage inc.')
  ],

  module:{
    rules:[
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]',
          publicPath: '/',
          limit: 1024
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use: [
            {
              loader: 'css-loader',
              options:{
                modules: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function(){
                  return [require('autoprefixer')];
                }
              }
            }
          ]
        })
        
        // loader: [
        //   'style-loader',
        //   {
        //     loader: 'css-loader',
        //     options:{
        //       modules: true
        //     }
        //   },
        //   //'resolve-url-loader',
        //   {
        //     loader: 'postcss-loader',
        //     options: {
        //       plugins: function(){
        //         return [require('autoprefixer')];
        //       }
        //     }
        //   }
        // ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // query: {
        //   presets: ['es2015','react']
        // },
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  //context: __dirname,
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + '/build',
    publicPath: 'https://test.html/',
    filename: '[name]-[hash].js'
  }
}

