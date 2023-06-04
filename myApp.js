require('dotenv').config()
let express = require('express');
let app = express();

app.use('/public', express.static('public'));

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
































module.exports = app;
