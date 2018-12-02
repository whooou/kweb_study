const mysql = require('mysql2/promise');

module.exports = () => {
    return {
        init: () => {
            return mysql.createPool({
                host    : 'localhost',
                user    : 'root',
                password: '2016320224',
                database: 'kweb'
            })
        }
    }
};