const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: {
    app: require.resolve('./public/index.html')
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.yaml$/,
        use: [
          { loader: 'json-loader' },
          { loader: 'yaml-loader', options:{ asJSON: true } }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({patterns:[
      {
        // Copy the Swagger OAuth2 redirect file to the project root;
        // that file handles the OAuth2 redirect after authenticating the end-user.
        from: 'swagger-ui.html',
        to: './'
      }
    ]})
  ],
  output: {
    filename: '[name].bundle.js',
    path: outputPath,
  },
};
