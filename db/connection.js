const mysql = require('mysql2');
const util = require('util');


const connection = mysql.createConnection({
    host: 'localhost',
    // port: 3306,
    user: 'root',
    password: 'Strafooli84',
    database: 'employeeDB'
});

connection.connect();


connection.query = util.promisify(connection.query);


module.exports = connection;