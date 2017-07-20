# Code splitting

main.js
```javascript
require.ensure(['./a'], function(require) {
  var content = require('./a');
  document.open();
  document.write('<h1>' + content + '</h1>');
  document.close();
});
```

require.ensure tells Webpack that ./a.js should be separated from bundle.js and built into a single chunk file.

On the surface, you won't feel any differences. However, Webpack actually builds main.js and a.js into different chunks(bundle.js and 1.bundle.js), and loads 1.bundle.js from bundle.js when on demand.


执行webpack打包后，会生成两个文件：
```bash
    0.bundle.js
    a.js
    bundle.js
    index.html
    main.js
    readme.md
    webpack.config.js
```
