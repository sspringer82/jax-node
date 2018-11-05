const express = require('express');

const { listAction } = require('./todo.controller');

const router = express.Router();

router.get('/', listAction);
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.send('Hello Client');
});

module.exports = router;
