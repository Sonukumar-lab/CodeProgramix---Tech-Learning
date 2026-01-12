const mysql = require('mysql2');
require('dotenv').config();
const { URL } = require('url');

// DATABASE_URL parse karo
const dbUrl = new URL(process.env.DATABASE_URL);

// Create MySQL connection
const connection = mysql.createConnection({
    host: dbUrl.hostname,             // host from URL
    user: dbUrl.username,             // username from URL
    password: dbUrl.password,         // password from URL
    database: dbUrl.pathname.slice(1),// remove leading "/" from path
    port: dbUrl.port                  // port from URL
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err); // full error
        return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = connection;
