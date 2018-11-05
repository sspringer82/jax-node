const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const todo = require('./todo');

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a',
  },
);
app.use(morgan('combined', { stream: accessLogStream }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('incoming request');
  next();
});

// routing
app.use('/todo', todo);

app.listen(8080, () => console.log('Server is listening'));
