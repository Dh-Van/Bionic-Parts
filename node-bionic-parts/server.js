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


app.post('/server', function (req, res) {
console.log(req.body);
res.send("test")
return res.end('done')
})

