const express = require ('express');
const router = express.Router();

const userRouter = require('./user')

router.get('/user', (req, res)=>{
    res.send(userRouter)
})


module.export = router;