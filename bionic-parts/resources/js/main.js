const table = window.document.getElementById("table");

fetch('data.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data)
  })
  .catch((err) => {
    // Do something for an error here
  })

// console.log(json)

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

if(dataMatrix === undefined)
    var dataMatrix = [[], [], [], [], []];

for(r = 0; r < dataMatrix[0].length; r++){
    addAssembly(dataMatrix[r]);
}

function addAssembly(dataArray){
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


    // Adds data to the data matrix
    dataMatrix[0].push(partNumberCell.innerHTML);
    dataMatrix[1].push(typeCell.innerHTML);
    dataMatrix[2].push(nameCell.innerHTML);
    dataMatrix[3].push(parentCell.innerHTML);
    dataMatrix[4].push(statusCell.innerHTML);

    // console.log(dataMatrix[0]);

    console.log(`${dataMatrix[0]}`);
    console.log(`${dataMatrix[1]}`);
    console.log(`${dataMatrix[2]}`);
    console.log(`${dataMatrix[3]}`);
    console.log(`${dataMatrix[4]}`);
}
