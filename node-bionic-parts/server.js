const express = require('express')
const app = express()
const path = require('path')
var bodyParser = require('body-parser')
var port = 8080

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.listen(port, function () {
    console.log('We are listening on port ' + port)
})

    app.use(express.static('public'));


app.post('/part/add', function (req, res) {
    console.log(req.body);
})

app.get('/json/get', function(req, res){
    
})
