'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const PASSWORD = 'PLEASE_CHANGE_ME';

// What does this do and why is it here?
var process = require('process')
process.on('SIGINT', () => {
  console.info("Interrupted")
  process.exit(0)
})

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/secret', (req, res) => {
  if (req.query.password === PASSWORD) {
    res.send('Access granted');
  } else {
    res.send('Denied');
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
