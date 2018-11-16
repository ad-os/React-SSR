const path = require('path');

module.exports = {
  // Inform webpack that we are bundle the bundle for NodeJs, rather than the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/server.js',

  // Tell webpack where to put the output file 
  // that is generated
  // __dirname refers to the current working directory
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/react',
            '@babel/env'
          ]
        }
      }
    ]
  },

  resolveLoader: {
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  }
};
