const test = require('basictap');
const statemitter = require('../lib/index.js');

test('basic usage', t => {
  t.plan(3);

  const [state, applyState, subscribeState] = statemitter({
    a: 1,
    number: 1
  });

  t.equal(state.number, 1);

  const unsubscribeState = subscribeState(function () {
    t.equal(state.number, 2);
    t.equal(state.a, 1);
  });

  applyState({ number: 2 });

  unsubscribeState();

  applyState({ number: 3 });
});
