const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },

  resolve: {
    extensions:['.ts', '.js']
  },
  devServer: {
    host: '0.0.0.0',
    port: '4000',
    contentBase: path.join(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test:/\.ts$/, loader: 'ts-loader'
      }
    ]
  }
};
