const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs');

const app = express()

var port = 8080

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.listen(port, function () {
    console.log('We are listening on port ' + port)
})

    app.use(express.static('public'));


app.post('/part/add', function (req, res) {
    var data = req.body;
    var jsonRaw = fs.readFileSync('public/resources/data/data.json');
    var json = JSON.parse(jsonRaw);
    json.c1.push(data.c1);
    json.c2.push(data.c2);
    json.c3.push(data.c3);
    json.c4.push(data.c4);
    json.c5.push(data.c5);

    fs.writeFileSync('public/resources/data/data.json', JSON.stringify(json));
})

app.get('/json/get', function(req, res){
    var jsonRaw = fs.readFileSync('public/resources/data/data.json');
    var json = JSON.parse(jsonRaw);
    console.log(json);
    res.send(json);
})
