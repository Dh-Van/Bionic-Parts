

function letMeKnowWhenYouAreDone(myData) {
	this == a //false
	console.log(myData)
}

function main() {
	const a = this;

	iHaveACallback(function letMeKnowWhenYouAreDone(myData) {
		this == a //false
		console.log(myData)
	})

	iHaveACallback((myData) =>  {
		this == a //true
		console.log(myData)
	})

	iHaveACallback(letMeKnowWhenYouAreDone)
}




function iHaveACallback(callback) {
	console.log("doing work")

	setTimeout(()=>{
		callback("here is some data")
	}, 30 * 1000)

}