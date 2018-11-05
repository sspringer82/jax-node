const express = require('express');

const { listAction, detailAction } = require('./todo.controller');

const router = express.Router();

router.get('/', listAction);
router.get('/:id', detailAction);
router.post('/', (req, res) => {
  console.log(req.body);

  res.send('yeah!');
});

module.exports = router;
