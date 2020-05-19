const { createState, setState } = require('../../');

const people = require('./people');

function app () {
  const state = createState({
    people: [{
      firstName: 'Mark',
      lastName: 'Wylde'
    }]
  });

  function setPage (state, page) {
    setState(state, {
      ...state,
      page
    });
  }

  return {
    state,

    setPage: setPage.bind(null, state),

    people: people(state)
  };
}

module.exports = app;
