const express = require ('express');
const morgan = require ('morgan');
const app = express();
const PORT = 1337;
app.use (morgan('dev'))

app.get ('/', (req, res) => {
    res.send ("Hello World!!!")
});



// connect PORT
 app.listen (PORT, function () {
     console.log (`listening port ${PORT}`)
 })