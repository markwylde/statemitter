const app = require('./app')();
const ui = require('./ui');

document.addEventListener('DOMContentLoaded', function () {
  ui(app);
});
