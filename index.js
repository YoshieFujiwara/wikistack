const express = require('express');
const morgan = require('morgan');
const app = express();
const layOut = require('./views/layout.js');
const content = require('./views/layout.js')

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(layOut(content));
});
const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
