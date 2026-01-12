const mysql = require('mysql2');
require('dotenv').config();

// Connect using full URL (private network recommended on Railway)
const connection = mysql.createConnection(process.env.DB_URL || 'mysql://root:password@localhost:3306/railway');

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = connection;
