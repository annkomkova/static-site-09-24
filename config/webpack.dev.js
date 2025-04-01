const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// var syntax = require('postcss-scss')
// postcss(plugins)
//   .process(scss, { syntax: syntax })
//   .then(function (result) {
//     result.content // SCSS with transformations
//   })

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
      watch: true
    },
    hot: true,
    open: true
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('.', 'docs'),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use:
          // [
          //   'style-loader',
          //   'css-loader',
          //   {
          //     loader: 'postcss-loader',
          //     options: {
          //       postcssOptions: {
          //         plugins: [
          //           require('autoprefixer'),
          //           require('postcss-preset-env')
          //         ]
          //       }
          //     }
          //   }
          // ],
          [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['postcss-preset-env']]
                }
              }
            }
          ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    })
  ]
})
