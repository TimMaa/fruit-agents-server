const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.mjs$/,
        include: [path.resolve(__dirname, 'node_modules')],
        type: 'javascript/auto'
      }
    ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.mjs']
  },
  target: 'node'
};
