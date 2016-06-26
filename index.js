if (__DEV__) {
  module.hot.accept();
}

// Syntax highlighting
require('prismjs');
require('./css/prism-theme.css');

// Line numbers
require('prismjs/plugins/line-numbers/prism-line-numbers');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');

// Base theme
require('./css/index.styl');
