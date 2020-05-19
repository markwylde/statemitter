const { emitChange } = require('../../');

function create (state, person) {
  state.people.push(person);
  emitChange(state);
}

function people (state) {
  return {
    create: create.bind(null, state)
  };
}

module.exports = people;
