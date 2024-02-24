const http = require('http');
const url = require('url');
const shortId = require('shortid');

const urls = {};

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/shorten' && req.method === 'GET') {
    const originalUrl = reqUrl.query.url;
    if (originalUrl) {
      const id = shortId.generate();
      urls[id] = originalUrl;
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`http://localhost:3000/${id}`);
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('URL não fornecida');
    }
  } else if (reqUrl.pathname.startsWith('/') && req.method === 'GET') {
    const id = reqUrl.pathname.substring(1);
    const originalUrl = urls[id];

    if (originalUrl) {
      res.writeHead(302, { 'Location': originalUrl });
      res.end();
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('URL não encontrada');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
