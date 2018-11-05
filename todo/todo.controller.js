const todos = require('./todo.model');

module.exports = {
  listAction(req, res) {
    res.render('list', { todos });
  },
  detailAction(req, res) {
    const id = parseInt(req.params.id, 10);
    const todo = todos.find(item => item.id === id);
    res.json(todo);
  },
};
