function create (state, applyState, person) {
  applyState({
    people: [...state.people, person]
  });
}

function people (state, applyState) {
  return {
    create: create.bind(null, state, applyState)
  };
}

module.exports = people;
