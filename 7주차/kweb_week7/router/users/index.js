const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{res.end();});
router.get('/:uid',(req,res)=>{res.end();});
router.put('/:uid',(req,res)=>{res.end();});
router.delete('/:uid',(req,res)=>{res.end();});

module.exports=router;