'use strict'

process.env.BABEL_ENV = 'main'

const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let mainConfig = {
  output: {
    path: path.join(__dirname, '../Tasks'),
    libraryTarget: 'commonjs',
    filename: '[name].js'
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  target: 'node',
  node: {
    __dirname: process.env.NODE_ENV !== 'production',
    __filename: process.env.NODE_ENV !== 'production'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../Src'),
        to: '[path][name].[ext]',
        ignore: ['**/node_modules/**', '**/*.js', '**/*.ts', '**/tsconfig.json', '**/tslint.json']
      }
    ])
  ],
  resolve: {
    alias: {
      'BaseModule': path.join(__dirname, '../BaseModule')
    },
    extensions: ['.tsx', '.ts', '.js', '.json']
  }
}

/**
 * Adjust mainConfig for development settings
 */
if (process.env.NODE_ENV !== 'production') {
  mainConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
}

/**
 * Adjust mainConfig for production settings
 */
if (process.env.NODE_ENV === 'production') {
  mainConfig.plugins.push(
    new UglifyJsPlugin(),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  )
}

module.exports = mainConfig
