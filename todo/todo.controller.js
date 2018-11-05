const todos = require('./todo.model');

module.exports = {
  // listAction(req, res) {
  //   res.render('list', { todos });
  // },
  listAction(req, res) {
    res.json(todos);
  },
  detailAction(req, res) {
    const id = parseInt(req.params.id, 10);
    const todo = todos.find(item => item.id === id);
    res.json(todo);
  },
  createAction(req, res) {
    todos.push(req.body);
    res.status(201).json(req.body);
  },
};
