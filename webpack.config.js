const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'json-loader',
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        use: [
          { loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]' },
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                bypassOnDebug: true,
                quality: 75
              },
              pngquant: {
                quality: '65-90',
                speed: 3
              }
            }
          },
        ]
      },
    ]
  },

  plugins: [
      new webpack.DefinePlugin({ // <-- key to reducing React's size
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin(), //minify everything
      new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
      new webpack.optimize.CommonsChunkPlugin({
        children: true, // necessary for splitting children chunks
        async: true // necessary for async loading chunks
      })
    ],
};
