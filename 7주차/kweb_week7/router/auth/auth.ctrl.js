const mysql_db = require('../../database/db.config')();
const pool = mysql_db.init();

async function processQuery(query,data) {
    try {
        const conn = await pool.getConnection();
        try {
            const sql = conn.format(query,data);
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

const util = require('util');
const crypto = require('crypto');
const randomBytes = util.promisify(crypto.randomBytes);
const pbkdf2 = util.promisify(crypto.pdkdf2);

exports.register = async (req,res) => {
    const{id,password,name,introduce} =req.body;
    if(!id || !password || !name){
        res.send('<script>alert("Incorrect Input");history.back();</script>');
    } else {

    }
}