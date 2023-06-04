let express = require('express');
let app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    const file = __dirname + '/views/index.html'
    res.sendFile(file);
});

app.get('/json', (req, res) => {
    const json = { "message": "Hello json" }
    res.json(json);
});
































module.exports = app;
