const express = require('express');
const todo = require('./todo');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('incoming request');
  next();
});

// routing
app.use('/todo', todo);

app.listen(8080, () => console.log('Server is listening'));
