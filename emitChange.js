function emitState (state, debounce) {
  if (!debounce) {
    return state.eventEmitter.emit('change');
  }

  if (!state._debouncing) {
    state._debouncing = setTimeout(() => {
      delete state._debouncing;
      return state.eventEmitter.emit('change');
    }, debounce);
  }
}

module.exports = emitState;
