const emitState = require('./emitState');

function setState (state, newState, debounce) {
  Object.assign(state, newState);

  emitState(state, debounce);
}

module.exports = setState;
