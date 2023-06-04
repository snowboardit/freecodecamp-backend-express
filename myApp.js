// Imports
require('dotenv').config()
const express = require('express'),
    app = express();

// Local imports
const logger = require('./middleware/logger'),
    now = require('./middleware/now'),
    name = require('./routes/name');

// Middlewares
app.use(logger);
app.use('/public', express.static('public'));

// Routes
app.get('/', (req, res) => {
    const file = __dirname + '/views/index.html'
    res.status(200)
        .sendFile(file);
});

app.get('/json', (req, res) => {
    const isUppercase = process.env.MESSAGE_STYLE === 'uppercase' ? true : false,
        m = 'Hello json',
        message = isUppercase ? m.toUpperCase() : m;
    res.status(200)
        .json({ message });
});

app.get('/now', now, (req, res) => {
    res.status(200)
        .json({ time: req.time })
});

app.get('/:word/echo', (req, res) => {
    const echo = req.params.word.trim()
    res.status(200)
        .json({ echo })
})

app.route('/name').get(name).post(name)

module.exports = app;
