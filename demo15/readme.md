# Hot Module Replacement

Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running without a page reload.

（热替换）

You have two ways to enable Hot Module Replacement with the webpack-dev-server.

(1) Specify --hot and --inline on the command line
```bash
$ webpack-dev-server --hot --inline
```
Meaning of the options:
+   --hot: adds the HotModuleReplacementPlugin and switch the server to hot mode.
+   --inline: embed the webpack-dev-server runtime into the bundle.
+   --hot --inline: also adds the webpack/hot/dev-server entry.
 
(2) Modify webpack.config.js.

add new webpack.HotModuleReplacementPlugin() to the plugins field
add webpack/hot/dev-server and webpack-dev-server/client?http://localhost:8080 to the entry field
webpack.config.js looks like the following.
```javascript
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
      include: path.join(__dirname, '.')
    }]
  }
};
```
Now launch the dev server.
```bash
$ webpack-dev-server
```
Visiting http://localhost:8080, you should see 'Hello World' in your browser.

Don't close the server. Open a new terminal to edit App.js, and modify 'Hello World' into 'Hello Webpack'. Save it, and see what happened in the browser.

App.js
```javascript
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
```
index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
index.html
```html
<html>
  <body>
    <div id='root'></div>
    <script src="/static/bundle.js"></script>
  </body>
</html>
```