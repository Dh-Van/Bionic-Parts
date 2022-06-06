
const table = window.document.getElementById("table");

async function addJSONdata(){
    var dataArray = [[], [], [], [], []];

    fetch('/json/get')
        .then(response => response.json())
        .then(data => {
            dataArray[0] = data.c1;
            dataArray[1] = data.c2;
            dataArray[2] = data.c3;
            dataArray[3] = data.c4;
            dataArray[4] = data.c5;

            console.log(`dataArray: ${dataArray}, dataLength: ${dataArray[0].length}`);
            
            for(i = 0; i < dataArray[0].length; i++){
                var tempArray = [];
                console.log("In here");
                for(j = 0; j < 5; j++){
                    console.log(`dataArraySpecific: ${dataArray[j][i]}`);
                    tempArray[j] = dataArray[j][i];
                }
                console.log(tempArray)
                addAssembly(tempArray, false);
            }
        });
}

addJSONdata();

// Example POST method implementation:
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, 
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

// for(i = 0; i < jsonData[0].length; i++){
//     var dataArray = [];
//     for(j = 0; j < 5; j++){
//         dataArray[j] = jsonData[j][i];
//     }
//     console.log(dataArray)
//     addAssembly(dataArray, false);
// }

async function addAssembly(dataArray, push){

    var row = table.insertRow(-1);
    var partNumberCell = row.insertCell(0);
    var typeCell = row.insertCell(1);
    var nameCell = row.insertCell(2);
    var parentCell = row.insertCell(3);
    var statusCell = row.insertCell(4);

    partNumberCell.innerHTML = dataArray[0];
    typeCell.innerHTML = dataArray[1];
    nameCell.innerHTML = dataArray[2];
    parentCell.innerHTML = dataArray[3];
    statusCell.innerHTML = dataArray[4]; 

    if(push){
        var tempJSON = {
            "c1": dataArray[0],
            "c2": dataArray[1],
            "c3": dataArray[2],
            "c4": dataArray[3],
            "c5": dataArray[4],
        }
        await postData("/part/add", tempJSON);
    }

}
