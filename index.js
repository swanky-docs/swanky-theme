if (module.hot) {
  module.hot.accept();
}

// Syntax highlighting
// require('prismjs');
// require('prismjs/themes/prism.css');

// Line numbers
// require('prismjs/plugins/line-numbers/prism-line-numbers');
// require('prismjs/plugins/line-numbers/prism-line-numbers.css');

// Base theme
// Load this automatically
// var someStyles = require('basscss/css/basscss.min.css');
var styles = require('./css/index.styl');

module.exports = (function () {
  console.log('Swanky Theme');
})();
