var express = require('express'),
    path = require('path'),
    app = express(),
    server = require('http').createServer(app).listen(8080),
    bodyParser = require('body-parser'),
    request = require("request");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    next();
}
app.use(allowCrossDomain);

app.get('/QnA', function (req, res) {
    var options = {
        method: 'GET',
        url: 'http://jsonstub.com/QnA/2',
        headers:
            {
                'content-type': 'application/json',
                'jsonstub-project-key': 'feef8e12-f80b-4886-a567-0ec30a53b730',
                'jsonstub-user-key': 'a67c3db7-405f-4d0d-9958-265eaa47fad4'
            }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
            res.send(body);
    });

});



