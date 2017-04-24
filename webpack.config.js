const path = require('path');

const SRC_DIR = path.resolve(__dirname, './client/src');

module.exports = {
  entry: path.resolve(__dirname, './client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        loaders: ['babel-loader',
          {
            loader: 'svg-react-loader',
            query: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2
              }
            }
          }]
      }
    ]
  },
  plugins: [

  ]
}
