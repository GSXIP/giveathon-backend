var express = require('express');
var app = express();

app.get('/test', (request, response) => {
    response.send('Heya');
})

var port = process.env.PORT || 8000;
app.listen(port, (app) => {
    console.log('listening on *: ' + port);
})

