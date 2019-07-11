var path = require('path');
module.exports = {
  entry: __dirname + '/client/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  resolve: {
        alias: {
         "styled-components": path.resolve("./node_modules", "styled-components"),
        }
       }
}