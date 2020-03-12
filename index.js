const express = require('express');
const path = require('path');
const app = express();

var enforce = require('express-sslify');

if (process.env.PRODUCTION) {
  // Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
  // a load balancer (e.g. Heroku). See further comments below
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(express.static(path.join(__dirname, './midi')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './midi', 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT);