require('dotenv').config();
const express = require('express');
const app = express();
const portfinder = require('portfinder');

const cors = require('cors');
const bodyParser = require('body-parser');


const DEFAULT_PORT = 5001;

portfinder.getPort({ port: DEFAULT_PORT }, (err, port) => {
    if (err) {
        console.error('Error finding available port:', err);
        return;
    }
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});



const PORT = process.env.PORT || 5001;

// CORS Middleware Configuration
app.use(cors({
    origin: 'http://127.0.0.1:5500', // Allow only this frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
