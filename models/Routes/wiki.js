const express = require ('express');
const router = express.Router();

const wikiRouter = require('./wiki')


router.get('/wiki', (req, res)=>{
    res.send(wikiRouter)
})


module.export = router;