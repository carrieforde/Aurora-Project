const path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HTMLWebpackPlugin = require('html-webpack-plugin'),
  StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json']
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
                includePaths: ['node_modules/sanitize.scss'],
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
      template: path.join('./src', 'index.html')
    }),
    new StyleLintPlugin(),
    new ExtractTextPlugin('main.css')
  ]
};
