const express = require('express');

const { listAction, detailAction, createAction } = require('./todo.controller');

const router = express.Router();

router.get('/', listAction);
router.get('/:id', detailAction);
router.post('/', createAction);

module.exports = router;
