const mysql_db = require('../../database/db.config')();
const pool = mysql_db.init();

async function processQuery(query,data) {
    try {
        const conn = await pool.getConnection();
        try {
            const sql = conn.format(query, data);
            const [result] = await conn.query(sql);
            conn.release();
            return result;
        } catch (e) {
            conn.release();
            throw e;
        }
    } catch (e) {
        throw e;
    }
}

exports.readBooks = async (req,res) => {
    try {
        const result = await processQuery('SELECT * FROM `books`',[]);
        res.json(result);
    } catch (e) {
        throw e;
    }
};

exports.readBooksById = async (req,res) => {
    try {
        const {id} = req.params;
        const result = await processQuery('SELECT * FROM `books` WHERE id = ?',[id]);
        res.json(result);
    } catch (e) {
        throw e;
    }
};

exports.readBooksByTitle = async (req,res) => {
    try {
        const {title} = req.params;
        const result = await processQuery('SELECT * FROM `books` WHERE title = ?',[title]);
        res.json(result);
    } catch (e) {
        throw e;
    }
};

exports.insertBook = async (req,res) => {
    try {
        const {title, author, publish, comment } = req.params;
        await processQuery('INSERT INTO `books` (title,author,publish,comment) VALUES (?,?,?,?)',[title,author,publish,comment]);
        res.send('Successfully uploaded');
    } catch (e) {
        throw e;
    }
};

exports.isRentList = async (req,res) => {
    try {
        const result = await processQuery('SELECT * FROM `books` WHERE isRent = 1',[]);
        res.json(result);
    } catch (e) {
        throw e;
    }
};

exports.changeBook = async (req,res) => {
    try {
        const {id, title, author, publish, comment } = req.params;
        await processQuery('UPDATE `books` SET (title, author, publish, comment) VALUES (?,?,?,?) WHERE id = ?',[title, author, publish, comment, id]);
        res.send('Succesfully changed');
    } catch (e) {
        throw e;
    }
};

exports.deleteBook = async (req,res) => {
    try {
        const {id} = req.params;
        await processQuery('DELETE FROM `books` WHERE id = ?',[id]);
        res.send('Succesfully removed');
    } catch (e) {
        throw e;
    }
};