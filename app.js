const express = require('express');
const morgan = require('morgan');
const app = express();
const layOut = require('./views/layout.js');
//const content = require('./views/layout.js')
const { db } = require('./models');
const models = require('./models');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))

db.authenticate().
then(() => {
  console.log('connected to the database');
})


app.get('/', (req, res) => {
  res.send(layOut());
});
const init = async () => {
  await models.User.sync();
  await models.Page.sync();
  models.db.sync({force: true});

  const PORT = 1337;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};
init();
// const PORT = 1337;

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });

// <link href="/stylesheets/style.css" rel="stylesheet">
