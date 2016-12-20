// var webpack = require('webpack');
// var HtmlWabpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.(woff|eot|ttf|svg)\??.*$/,
        loader: 'url?limit=10000'
      }
    ]
  },

  plugins: [
    /*new HtmlWabpackPlugin({
     template: __dirname + './app/index.tmpl.html'
     })*/
  ],

  postcss: [
    require('autoprefixer')
  ],

  devServer: {
    contentBase: './public',
    color: true,
    historyApiFallback: true,
    inline: true
  }
}