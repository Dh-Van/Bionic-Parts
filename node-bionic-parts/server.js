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
    console.log(json);

})

app.get('/json/get', function(req, res){
    
})
