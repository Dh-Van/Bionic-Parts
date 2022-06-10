// The HTML table that will display information
var table = window.document.getElementById("table");

var removeQueue = [];

  /**
   * Function that will add an assembly onto the html table, and depending on the push boolean, add the data in dataArray to the data.json file
   * @param {Array<number>} dataArray: The array by 
   * @param {Boolean} push 
   */
async function addAssembly(dataArray, push, rowNum, t = table){

    // Inserts the row to the end of the table, and adds cells in the right  order
    var row = t.insertRow(rowNum);
    var actionCell = row.insertCell(0);
    var partNumberCell = row.insertCell(1);
    var typeCell = row.insertCell(2);
    var nameCell = row.insertCell(3);
    var parentCell = row.insertCell(4);
    var statusCell = row.insertCell(5);

    createEditButton(actionCell, table.rows.length - 2);
    createDeleteButton(actionCell, table.rows.length - 2);

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
        await postData("/add", tempJSON);
    }
}

/**
 * Will call the formSet function in form.js, allows user to edit the row
 * @param {number} rowNum 
 */
function editRow(rowNum){
    var row = table.rows[rowNum];
    formSet(row.cells[1].innerHTML, row.cells[2].innerHTML, row.cells[3].innerHTML, row.cells[4].innerHTML, row.cells[5].innerHTML ,rowNum)
}

/**
 * Will call the jsonRemoveRow function in transceiver.js, allows user to remove the row
 * @param {number} rowNum 
 */
function removeRow(rowNum){
    removeQueue.push(rowNum - 1);
    removeFromJSON();

    buttonList = document.getElementsByClassName("delete");
    table.deleteRow(rowNum + 1);
    
    for(i = 0; i < buttonList.length; i++){
        var row = buttonList[i].getAttribute("data-row");
        if(row > rowNum)
            buttonList[i].setAttribute("data-row", --row);

        buttonList[i].setAttribute("onClick",`popupConfirm(${row})`);

    }
    
    removeFromJSON();
    hideConfirm();
}

/**
 * Removes all elements present in removeQueue from the json, done to avoid delete calls not happening because of simultaneous method clallls
 */
function removeFromJSON(){
    console.log("in met");
    for(i = 0; i < removeQueue.length; i++){
        jsonRemoveRow(i);
        removeQueue.splice(i, 1);
    }
}

/**
 * Deletes all rows of the table besides the top header row
 */
function clearTable(t){
    while(t.rows.length > 2) t.deleteRow(2);
}
