const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('incoming request');
  next();
});

app.get('/list', (req, res) => {
  const todos = [
    {
      id: 1,
      title: 'get up',
      status: 'done',
    },
    {
      id: 2,
      title: 'listen',
      status: 'open',
    },
  ];

  res.render('list', { todos });

  //res.json(todos);
});

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/hello', (req, res) => {
  res.send('Hello München');
});

app.listen(8080, () => console.log('Server is listening'));
