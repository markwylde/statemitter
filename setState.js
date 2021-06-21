const emitChange = require('./emitChange');

function setState (state, newState, debounce) {
  Object.assign(state, newState);

  emitChange(state, debounce);
}

module.exports = setState;
