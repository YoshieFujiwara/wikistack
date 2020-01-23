const express = require('express');
const morgan = require('morgan');
const app = express();
const layOut = require('./views/layout.js');
//const content = require('./views/layout.js')
const { db } = require('./models');
const models = require('./models');
const wikiRouter = require('./models/Routes/wiki')
const userRouter = require('./models/Routes/user')




app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))

//app.use(wikiRouter);
//app.use(userRouter);

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get('/wiki', (req, res)=>{
  res.send(wikiRouter)
})

app.get('/user', (req, res)=>{
  res.send(userRouter)
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
