var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=react,presets[]=es2015',
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
