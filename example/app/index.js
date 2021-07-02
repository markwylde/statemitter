const statemitter = require('../../');

const people = require('./people');

function app () {
  const [state, applyState, subscribe] = statemitter({
    people: [{
      firstName: 'Mark',
      lastName: 'Wylde'
    }]
  });

  function setPage (page) {
    applyState({
      page
    });
  }

  return {
    state,
    subscribe,

    setPage: setPage.bind(null),

    people: people(state, applyState)
  };
}

module.exports = app;
