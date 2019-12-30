const express = require('express');
const app = express();

let people = [
  {
    id: 1,
    name : 'Kyo'
  },
  {
    id: 2,
    name: 'Asakusa'
  },
  {
    id: 3,
    name: 'Kyo Asakusa'
  }
];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('template', {Title: 'Pug', msg: 'Testing Pug', people: people});
});

app.listen(3000, () => {
  console.log('Running in 3000 port');
});