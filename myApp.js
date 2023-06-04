let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    const file = __dirname + '/views/index.html'
    res.sendFile(file);
});
































module.exports = app;
