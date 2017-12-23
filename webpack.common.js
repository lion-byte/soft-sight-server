import path from 'path'
import webpack from 'webpack'

const options = {
  entry: {
    index: path.join(__dirname, './src/index.js'),
    vendor: [
      'mini.css-react',
      'react',
      'react-dom'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor')
  ]
}

export default options