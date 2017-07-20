# Code splitting with bundle-loader

Another way of code splitting is using bundle-loader.

main.js
```javascript
// Now a.js is requested, it will be bundled into another file
var load = require('bundle-loader!./a.js');

// To wait until a.js is available (and get the exports)
//  you need to async wait for it.
load(function(file) {
  document.open();
  document.write('<h1>' + file + '</h1>');
  document.close();
});
require('bundle-loader!./a.js') tells Webpack to load a.js from another chunk.
```

Now Webpack will build main.js into bundle.js, and a.js into 1.bundle.js.