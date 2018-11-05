const requestHandler = (req, res) => {
  // manueller Breakpoint
  // debugger;
  res.end('Hello World😻!');
  // Prozess terminieren
  // process.exit(0);
};

module.exports = () => {
  console.log('Hallo ich bin ein Seiteneffekt');
  return requestHandler;
};
