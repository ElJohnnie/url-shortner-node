const express = require('express');
const shortId = require('shortid');

const app = express();

const urls = {};

app.get('/shorten', (req, res) => {
  const url = req.query.url;
  if (url) {
    const id = shortId.generate();
    urls[id] = url;
    res.send(`http://localhost:3000/${id}`);
  } else {
    res.status(400).send('URL não fornecida');
  }
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const url = urls[id];

  if (url) {
    res.redirect(url);
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
