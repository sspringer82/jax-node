const todos = require('./todo.model');

module.exports = {
  listAction(req, res) {
    res.render('list', { todos });
  },
};
