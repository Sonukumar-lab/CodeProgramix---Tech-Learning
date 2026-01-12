require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

// CORS Middleware
app.use(cors({
    origin: '*', // Ya specific frontend origin, jaise 'https://your-frontend-url.com'
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));

// Port setup
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
