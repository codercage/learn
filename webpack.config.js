var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    //new webpack.BannerPlugin('Copyright Cage inc.')
  ],

  module:{
    rules:[
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          //limit: 10240
        }
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',
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


  devServer:{
    hot: true,
    contentBase: path.resolve(__dirname, '..'),
    port: '9090',
    inline: true,
    historyApiFallback: true
  },
  devtool: 'eval-source-map',

  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  }
}