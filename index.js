const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const todo = require('./todo');
const auth = require('./auth');

const app = express();

app.use(bodyParser.json());

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
app.use('/todo', expressJwt({ secret: 'secret' }), todo);
app.use('/login', auth);

app.listen(8080, () => console.log('Server is listening'));
