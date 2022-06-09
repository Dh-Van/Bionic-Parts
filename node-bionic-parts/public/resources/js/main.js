// The HTML table that will display information
const table = window.document.getElementById("table");

  /**
   * Function that will add an assembly onto the html table, and depending on the push boolean, add the data in dataArray to the data.json file
   * @param {Array<number>} dataArray: The array by 
   * @param {Boolean} push 
   */
async function addAssembly(dataArray, push, rowNum){

    // Inserts the row to the end of the table, and adds cells in the right  order
    var row = table.insertRow(rowNum);
    var actionCell = row.insertCell(0);
    var partNumberCell = row.insertCell(1);
    var typeCell = row.insertCell(2);
    var nameCell = row.insertCell(3);
    var parentCell = row.insertCell(4);
    var statusCell = row.insertCell(5);


    createEditButton(actionCell, table.rows.length-1);
    createDeleteButton(actionCell, table.rows.length-1);

    // Sets the data inside the cell to the respective dataArray index
    partNumberCell.innerHTML = dataArray[0];
    typeCell.innerHTML = dataArray[1];
    nameCell.innerHTML = dataArray[2];
    parentCell.innerHTML = dataArray[3];
    statusCell.innerHTML = dataArray[4]; 


    // If the method was called with the intent to push data to the data.json file
    if(push){
        // Creates a json file with the respective dataArray index
        var tempJSON = {
            "c1": dataArray[0],
            "c2": dataArray[1],
            "c3": dataArray[2],
            "c4": dataArray[3],
            "c5": dataArray[4],
        }
        // Posts the json file to the backend
        await postData("/part/add", tempJSON);
    }
}


function editRow(rowNum){
    var row = table.rows[rowNum];
    console.log(row.cells[1].innerHTML);
    formSet(row.cells[1].innerHTML, row.cells[2].innerHTML, row.cells[3].innerHTML, row.cells[4].innerHTML, row.cells[5].innerHTML ,rowNum)
}

function removeRow(rowNum){
    table.deleteRow(rowNum);
    jsonRemoveRow(rowNum);
}
