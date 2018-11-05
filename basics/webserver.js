const http = require('http');

http
  .createServer((req, res) => {
    res.end('Hello World');
    // Prozess terminieren
    // process.exit(0);
  })
  .listen(8080, () => console.log('server is listening'));
