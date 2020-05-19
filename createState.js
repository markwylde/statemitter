const EventEmitter = require('events');

function createState (initialState) {
  const eventEmitter = new EventEmitter();

  return {
    ...initialState,

    on: eventEmitter.addListener.bind(eventEmitter),
    off: eventEmitter.removeListener.bind(eventEmitter),
    eventEmitter
  };
}

module.exports = createState;
