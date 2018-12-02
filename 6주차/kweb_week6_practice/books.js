const express = require('express');
const router = express.Router();

const mysql_db = require('./database')();
const pool = mysql_db.init();

router.get('/', (req,res) => { res.send('Hello, world!'); });

router.get('/api/books', async(req,res) => {
    try{
        const conn = await pool.getConnection();
        try{
            const sql = conn.format('SELECT * FROM `books`',[]);
            const [result] = await conn.query(sql);
            conn.release();
            res.json(result);
        } catch(e){
            conn.release();
            throw e;
        }
    } catch(e){
        throw e;
    }
});

router.get('/api/books/:id', async(req,res) => {
    try{
        const conn = await pool.getConnection();
        try{
            const{id}=req.params;
            const sql = conn.format('SELECT * FROM `books` WHERE id = ?',[id]);
            const [result] = await conn.query(sql);
            conn.release();
            res.json(result);
        } catch (e){
            conn.release();
            throw e;
        }
    } catch(e){
        throw e;
    }
});

router.get('/api/books/title/:title', (req,res) => { res.end(); });

router.get('/api/books/rent', (req,res) => { res.end(); });

router.post('/api/books', async(req,res) => {
    try{
        const conn = await pool.getConnection();
        try{
            const {title,author,publish,comment} = req.body;
            const sql=conn.format('INSERT INTO `books` (title,author,publish,comment) VALUES (?,?,?,?)',{title,author,publish,comment});
            await conn.query(sql);
            conn.release();
            res.send('Successfully uploaded!');
        } catch(e){
            conn.release();
            throw e;
        }
    } catch(e){
        throw e;
    }
});

router.put('/api/books/:id', (req,res) => { res.end(); });

router.delete('/api/books/:id', (req,res) => { res.end(); });

module.exports = router;
