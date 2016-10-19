var path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var ip = process.env.IP || '0.0.0.0'
var port = process.env.PORT || 3000
var DEBUG = process.env.NODE_ENV !== 'production'

var config = {
  devtool: DEBUG ? 'eval' : false,
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    modulesDirectories: ['src', 'node_modules']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass') }
    ]
  },
  postcss: [autoprefixer],
  sassLoader: {
    // data: `@import 'theme/_config.scss'; @import '${path.resolve(__dirname, 'theme/_theme.scss')}';`,
    includePaths: [path.resolve(__dirname, './src/scss')]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'" + process.env.NODE_ENV + "'" ////
    })
  ]
}

if (DEBUG) {
  config.entry.unshift(
    'webpack-dev-server/client?http://' + ip + ':' + port + '/',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
} else {
  config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ])
}

module.exports = config