const webpack = require('webpack');
const isProd = (process.env.NODE_ENV === 'production');
let config = {
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

// Compress image if production build
if(isProd) {
  config.module.rules.push({
          test: /\.(gif|png|jpe?g|svg)$/i,
          exclude: /node_modules/,
          use: [
            { loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]' },
            {
              loader: 'image-webpack-loader',
              query: {
                mozjpeg: {
                  quality: 65
                },
                pngquant: {
                  quality: '65-90',
                  speed: 3
                }
              }
            },
          ]
        });
} else {
  config.module.rules.push({
          test: /\.(gif|png|jpe?g|svg)$/i,
          exclude: /node_modules/,
          use: [
            { loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]' }
          ]
        });
}

module.exports = config;
