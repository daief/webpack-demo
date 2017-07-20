# Babel-loader

```bash
npm install --save react react-dom
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

Loaders are preprocessors which transform a resource file of your app ([more info](http://webpack.github.io/docs/using-loaders.html)). For example, Babel-loader can transform JSX/ES6 file into JS file. Official doc has a complete list of [loaders](http://webpack.github.io/docs/list-of-loaders.html).

Loaders是能够将你app的资源文件进行转换的预处理程序。比如Babel-loader可以将JSX/ES6文件转换成js文件。

# webpack.config.js
```javascript
module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
    ]
  }
};
```

In webpack.config.js, module.loaders field is used to assign loaders. The above snippet uses babel-loader which also needs plugins babel-preset-es2015 and babel-preset-react to transpile ES6 and React. You can also take another way to set the babel query option.


```javascript
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
}
```
