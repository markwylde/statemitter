const EventEmitter = require('events');

function createState (initialState) {
  const eventEmitter = new EventEmitter();

  const state = { ...initialState };

  function subscribeState (fn) {
    eventEmitter.addListener('change', fn);
    return () => {
      eventEmitter.removeListener('change', fn);
    };
  }

  function applyState (newState) {
    Object.assign(state, newState);
    eventEmitter.emit('change');
  }

  return [state, applyState, subscribeState];
}

module.exports = createState;
