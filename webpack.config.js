const webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HTMLWebpackPlugin = require('html-webpack-plugin'),
  StyleLintPlugin = require('stylelint-webpack-plugin'),
  SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const config = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.hbs', '.jsx', '.scss', '.json']
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: process.env.NODE_ENV === 'production' ? true : false,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer')({ browsers: 'last 2 versions' }),
                  require('css-mqpacker')({ sort: true })
                ],
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['node_modules/aurora-utilities/sass', 'node_modules/sanitize.scss'],
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.svg$/,
        use: ['svg-sprite-loader', 'svgo-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name].[ext]'
            }
          },
          'img-loader'
        ]
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join('./src', 'index.html'),
      filename: process.env.NODE_ENV === 'production' ? '../index.html' : 'index.html'
    }),
    new StyleLintPlugin(),
    new ExtractTextPlugin('main.css'),
    new SpriteLoaderPlugin()
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
