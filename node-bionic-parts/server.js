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


var data = {
    "c1": ["a1", "b1"],
    "c2": ["a2", "b2"],
    "c3": ["a3", "b3"],
    "c4": ["a4", "b4"],
    "c5": ["a5", "b5"],
}

// add assembly
app.post('/assembly/add', function (req, res) {
	console.log(req.body);
	res.send({})
	// return res.end('done')
})

// add new part
app.post('/part/add', function (req, res) {
	console.log(req.body);
	res.send({})
	// return res.end('done')
})

// get a particular part
app.get('/part/:id', function (request, response) {
	console.log(request.body);
	response.send("test")
	// return res.end('done')
})

// list all parts
app.get('/parts', function (req, res) {
	res.send(data)
	// return res.end('done')
})

