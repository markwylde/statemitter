const homePage = (state) => {
  return state.people.map(person => `
    <div>Hello ${person.firstName} ${person.lastName}</div>
  `).join('\n');
};

module.exports = homePage;
