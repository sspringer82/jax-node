const express = require('express');

const app = express();

app.use(express.static('public'));

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

  res.json(todos);
});

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/hello', (req, res) => {
  res.send('Hello München');
});

app.listen(8080, () => console.log('Server is listening'));
