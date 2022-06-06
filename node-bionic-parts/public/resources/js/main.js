const table = window.document.getElementById("table");

// function createArray(length) {
//     var arr = new Array(length || 0),
//         i = length;

//     if (arguments.length > 1) {
//         var args = Array.prototype.slice.call(arguments, 1);
//         while(i--) arr[length-1 - i] = createArray.apply(this, args);
//     }

//     return arr;
// }
const jsonData = [data.c1, data.c2, data.c3, data.c4, data.c5];
var dataMatrix = [[], [], [], [], []];
// dataMatrix.push(jsonData);

// IFFE - Immediately Invoked Function Expression
// We do this so we can use await, as you can't use await outside an async function
(async () => {
    console.log("do work");
    let res = await fetch("/parts");
    console.log(await res.json());

    // @todo actually update the table
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
})()


// for(i = 0; i < jsonData[0].length; i++){
//     var dataArray = [];
//     for(j = 0; j < 5; j++){
//         dataArray[j] = jsonData[j][i];
//     }
//     console.log(dataArray)
//     addAssembly(dataArray, false);
// }

// Helper function to send JSON data to the bakend.
// Lightweight wrapper around fetch that sets content type so the server will automatically decode the json for us.
async function postJson(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function addAssembly(dataArray, push){

    let value = await postJson("/assembly/add", {"test":"a"})
    console.log(value)

    // let value = await postJson("/assembly/add", {"test":"a"}).then((value)=>{
    //     console.log(value)
    // }).catch((err)=>{
    //     console.log(err);
    // })

    //fetch
    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "/server", true);

    // xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

    // xhr.send(`{"test":"a"}`);

    // var row = table.insertRow(-1);
    // var partNumberCell = row.insertCell(0);
    // var typeCell = row.insertCell(1);
    // var nameCell = row.insertCell(2);
    // var parentCell = row.insertCell(3);
    // var statusCell = row.insertCell(4);

    // partNumberCell.innerHTML = dataArray[0];
    // typeCell.innerHTML = dataArray[1];
    // nameCell.innerHTML = dataArray[2];
    // parentCell.innerHTML = dataArray[3];
    // statusCell.innerHTML = dataArray[4]; 

    // if(push){
    //     // Adds data to the data matrix
    //     data.c1.push(partNumberCell.innerHTML);
    //     data.c2.push(typeCell.innerHTML);
    //     data.c3.push(nameCell.innerHTML);
    //     data.c4.push(parentCell.innerHTML);
    //     data.c5.push(statusCell.innerHTML)
    // }

}
