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


for(i = 0; i < jsonData[0].length; i++){
    var dataArray = [];
    for(j = 0; j < 5; j++){
        dataArray[j] = jsonData[j][i];
    }
    console.log(dataArray)
    addAssembly(dataArray, false);
}

function addAssembly(dataArray, push){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/server", true);

    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

    xhr.send(`{"test":"a"}`);

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
