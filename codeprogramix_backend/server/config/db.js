const mysql = require('mysql2');
require('dotenv').config();

// Create a MySQL connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',   // MySQL server host
    user: process.env.DB_USER,                  // DB username from .env
    password: process.env.DB_PASSWORD,          // DB password from .env
    database: process.env.DB_NAME,              // DB name from .env
    port: process.env.DB_PORT || 3306
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
