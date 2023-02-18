const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/buba-gump/ping', (req, res) => {
  res.send('pong');
});

app.get('/api/buba-gump/pong', (req, res) => {
  res.send('ping');
});

app.get('/api/delay/:mydelay', (req, res) => {
  const { mydelay } = req.params;
  setTimeout(() => {
    res.send(mydelay);
  }, mydelay);
});

app.listen(port, () => {
  console.log(`SERVER app listening on port ${port}`);
});
