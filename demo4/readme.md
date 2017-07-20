# CSS-loader

Webpack allows you to require CSS in JS file, then preprocessed CSS file with CSS-loader.

Webpack允许在js文件中require CSS文件，之后使用CSS-loader预处理CSS文件


main.js
```javascript
require('./app.css');
```

app.css
```css
body {
  background-color: blue;
}
```

index.html
```html
<html>
  <head>
    <script type="text/javascript" src="bundle.js"></script>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

webpack.config.js
```javascript
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
};
```

Attention, you have to use two loaders to transform CSS file. First is CSS-loader to read CSS file, and another is Style-loader to insert Style tag into HTML page. Different loaders are linked by exclamation mark(!).

你必须要两个loaders去转换CSS文件。第一个是CSS-loader去读取CSS文件，另一个是Style-loader去插入样式标签到HTML页面。

After launching the server, index.html will have internal style sheet.
```html
<head>
  <script type="text/javascript" src="bundle.js"></script>
  <style type="text/css">
    body {
      background-color: blue;
    }
  </style>
</head>
```