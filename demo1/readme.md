main.js  is an entry file

Webpack follows webpack.config.js to build bundle.js
```javascript
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```

启动服务器
```bash
$ webpack-dev-server
```


打包生成bundle.js
```bash
$ webpack
```