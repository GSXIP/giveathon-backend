var express = require('express');
var app = express();

var controllers = {
    "/posting": new (require('./controllers/posting.js'))(null)
}

for (var key in controllers) {
    var controller = controllers[key];
    if (typeof(controller.get) == "function") {
        app.get(key, controller.get);
    }
    if (typeof(controller.post) == "function") {
        app.post(key, controller.post);
    }
    if (typeof(controller.put) == "function") {
        app.put(key, controller.put);
    }
}

app.get('/test', (request, response) => {
    response.send('Heya');
})

var port = process.env.PORT || 8000;
app.listen(port, (app) => {
    console.log('listening on *: ' + port);
})

