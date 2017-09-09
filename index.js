var express = require('express');
var app = express();
var bodyParser = require('Body-parser');

app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function (req, res, next) {
    console.log('Record timestamp');
    next();
});

app.use(bodyParser.json()); //body ที่เข้ามาจะถูกอ่านก่อน

app.post('/calculator/rest/minus', function (req, res, next) {
    var body = req.body; //creat var body
    var x = body.x;
    var y = body.y;
    var result = 0;
    var obj = {
        "x": x,
        "y": y,
        "result of x minus y": x - y
    }
    res.json(obj);

});

app.post('/calculator/rest/multiply', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var obj = {
        "x": x,
        "y": y,
        "result of x multiply y": x * y
    }
    res.json(obj);
});

app.post('/calculator/rest/divide', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = 0;
    var obj = {
        "x": x,
        "y": y,
        "result x divide y": x / y
    }
    res.json(obj);
});

app.get('/help', function (req, res, next) {
    res.send('Help me');

});
app.listen(3000, function () {
    console.log('Start node on port');
});