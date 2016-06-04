if (module.hot) {
  module.hot.accept();
}

// Syntax highlighting
require('prismjs');
require('./css/prism-theme.css');

// Line numbers
require('prismjs/plugins/line-numbers/prism-line-numbers');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');

// Base theme
var styles = require('./css/index.styl');

module.exports = (function () {
  console.log('Swanky Theme');
})();
