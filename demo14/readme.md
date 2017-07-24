# Exposing global variables
If you want to use some global variables, and don't want to include them in the Webpack bundle, you can enable externals field in webpack.config.js.

如果想使用一些全局变量，而又不想包含在webpack的bundle中，可以在配置文件中使用externals。

data.js
```javascript
var data = 'Hello World';
```

webpack.config.js
```javascript
module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
    ]
  },
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    //  "jquery": "jQuery"
    'data': 'data'
  }
};
```

Now, you require `data` as a module variable in your script. but it actually is a global variable.

main.jsx
```jsx
var data = require('data');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>{data}</h1>,
  document.body
);
```