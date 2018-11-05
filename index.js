// core modules
const http = require('http');

// npm modules
const lodash = require('lodash');

// eigene module
const requestHandler = require('./request-handler')();
const requestHandler2 = require('./request-handler')();

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const intersect = lodash.intersection(arr1, arr2);

console.log(intersect);

http
  .createServer(requestHandler)
  .listen(8080, () => console.log('server is listening to localhost:8080'));
