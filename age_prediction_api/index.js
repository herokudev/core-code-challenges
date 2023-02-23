const express = require('express');
const app = express();
const port = 3000;

const ageObj = {
  name: '',
  age: '',
  days: '',
};

const errorObj = {
  error: "Missing parameter 'name' was expected.",
};

app.get('/', (req, res) => {
  res.send('Welcome to the age prediction API');
});

app.get('/api/age/', (req, res) => {
  res.send(errorObj);
});

app.get('/api/age/:name', (req, res) => {
  const { name } = req.params;
  const rdmAge = Math.floor(Math.random() * 100);
  ageObj.name = name;
  ageObj.age = rdmAge;
  ageObj.days = rdmAge * 365;
  res.send(ageObj);
});

app.listen(port, () => {
  console.log(`SERVER app listening on port ${port}`);
});
