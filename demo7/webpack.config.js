var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  // 声明插件
  plugins: [  
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
