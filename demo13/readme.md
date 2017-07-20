# Vendor chunk

You can also extract the vendor libraries from a script into a separate file with CommonsChunkPlugin.

好像是提取出第三方库

If you want a module available as variable in every module, such as making $ and jQuery available in every module without writing require("jquery"). You should use ProvidePlugin (Official doc).

```javascript
// main.js
$('h1').text('Hello World');


// webpack.config.js
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
```