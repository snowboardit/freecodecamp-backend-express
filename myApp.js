let express = require('express');
let app = express();

app.get('/', (req, res) => {
    const file = __dirname + '/views/index.html'
    res.status(200)
        .sendFile(file);
})


































module.exports = app;
