const http = require('http');

http
  .createServer((req, res) => {
    // manueller Breakpoint
    // debugger;
    res.end('Hello World😻!');
    // Prozess terminieren
    // process.exit(0);
  })
  .listen(8080, () => console.log('server is listening to localhost:8080'));
