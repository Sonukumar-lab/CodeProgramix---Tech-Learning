const mysql = require('mysql2');
require('dotenv').config();

// Agar tumne full URL liya hai to use karo
// let dbUrl = process.env.DB_URL;
// const connection = mysql.createConnection(dbUrl);

// Recommended: individual fields se connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'test',
    port: process.env.DB_PORT || 3306,
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = connection;
