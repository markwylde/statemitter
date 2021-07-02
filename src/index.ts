import { EventEmitter }  from 'events';

export type State = Object | Array<any>;

export type Listener = (...args: any[]) => void;

/**
 * A function that will be called every time a change
 * of state has occured.
 */
export interface SubscribeFunction {
  (handler: Listener): UnsubscribeFunction;
};

/**
 * A function that will stop the SubscribeFunction
 * from being called.
 */
export interface UnsubscribeFunction {
  (): void;
};

/**
 * A function that will assign the old state with
 * the new state.
 */
export interface ApplyFunction {
  (handler: Listener): any;
};

/**
 * Create a new statemitter
 * 
 * @example
 * ```javascript
 * const [notes, applyNotes, subscribeNotes] = statemitter({ notes: [] });
 * subscribeNotes(console.log);
 * applyNotes({ notes: ['my first note'] });
 * ```
 */
export function statemitter (initialState : State) : [
  state : State,
  apply : ApplyFunction,
  subscribe : SubscribeFunction
] {
  const eventEmitter = new EventEmitter();

  const state = { ...initialState };

  function subscribeState (fn : Listener) {
    eventEmitter.addListener('change', fn);
    return function () {
      eventEmitter.removeListener('change', fn);
    };
  }

  function applyState (newState : State) {
    Object.assign(state, newState);
    eventEmitter.emit('change');
    return state;
  }

  return [state, applyState, subscribeState];
}

export default statemitter;

if (module) {
  module.exports = statemitter;
}
