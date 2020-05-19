const homePage = require('./pages/home');

function ui (app) {
  function render () {
    if (app.state.page) {
      document.body.innerHTML = app.state.page(app.state);
    }
  }

  app.setPage(homePage);

  app.state.on('change', render);
  render();

  setInterval(function () {
    app.people.create({
      firstName: 'Another',
      lastName: 'Person'
    });
  }, 1000);
}

module.exports = ui;
