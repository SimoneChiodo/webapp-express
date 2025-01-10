// INIT MYSQL2
const mysql = require("mysql2");

// INIT ENV
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

// CREATE CONNECTION
const connection = mysql.createConnection({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
});

// EXECUTE CONNECTION
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL");
});

// EXPORT
module.exports = connection;
