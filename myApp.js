let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Hello Express').status(200);
})


































module.exports = app;
