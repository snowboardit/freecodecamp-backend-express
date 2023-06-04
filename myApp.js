// Imports
require('dotenv').config()
const express = require('express'),
    app = express();

// Local imports
const logger = require('./middleware/logger'),
    now = require('./middleware/now');

// Middlewares
app.use(logger);
app.use('/public', express.static('public'));

// Routes
app.get('/', (req, res) => {
    const file = __dirname + '/views/index.html'
    res.sendFile(file);
});

app.get('/json', (req, res) => {
    const isUppercase = process.env.MESSAGE_STYLE === 'uppercase' ? true : false,
        m = 'Hello json',
        message = isUppercase ? m.toUpperCase() : m,
        json = { message }
    res.json(json);
});

app.get('/now', now, (req, res) => {
    res.json({ time: req.time })
});































module.exports = app;
