import mysql from 'mysql2';
import { local as config } from './db_info';

module.exports = function () {
    return {
        init: () => {
            return mysql.createPool({
                host     : config.host,
                user     : config.user,
                password : config.password,
                database : config.database,
                debug    :  config.debug,
                multipleStatements : config.multipleStatements
            })
        }
    }
};