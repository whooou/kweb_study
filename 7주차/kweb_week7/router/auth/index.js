const express = require('express');
const router = express.Router();

router.post('/login',(req,res)=>{res.end();});
router.get('/logout',(req,res)=>{res.end();});
router.post('/register',(req,res)=>{res.end();});

module.exports = router;