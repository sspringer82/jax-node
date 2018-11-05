const express = require('express');

const { listAction } = require('./todo.controller');

const router = express.Router();

router.get('/', listAction);

module.exports = router;
