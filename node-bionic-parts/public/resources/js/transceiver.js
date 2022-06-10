/**
 * Function that will load the json data present in the data.json file by calling the addAssembly method
 */
 async function addJSONdata(t = table){
    // Data Array to store all of the data [by column] that is in the data.json file
    var dataArray = [[], [], [], [], []];

    // Will request the backend for the json
    fetch('/json/get')
        .then(response => response.json())
        .then(data => {
            // Stores the data [by column] into the dataArray  object
            dataArray[0] = data.c1;
            dataArray[1] = data.c2;
            dataArray[2] = data.c3;
            dataArray[3] = data.c4;
            dataArray[4] = data.c5;

            // Turns the data which is stored by column, into data stored by row so that the addAssembly method works
            for(i = 0; i < dataArray[0].length; i++){
                // Array to store the data by row
                var tempArray = [];
                // Loops through each column, and gets the same index, essentially getting the first row
                for(j = 0; j < 5; j++){
                    tempArray[j] = dataArray[j][i];
                }
                addAssembly(tempArray, false, -1, t);
            }
        });
}

// Instantly calls the function made above
addJSONdata();

/**
 * Function that adds the data from the current row of the table to the json file
 */
function addData(rowNum){
    // Temp array to store data
    var dataArray = [[], [], [], [], []];

    // Sets indices of the tempArray to the values of the respective columns
    dataArray[0] = c1.value;
    dataArray[1] = c2.value;
    dataArray[2] = c3.value;
    dataArray[3] = c4.value;
    dataArray[4] = c5.value;

    // Resets the values of the columns back to nothing
    c1.value = "";
    c2.value = "";
    c3.value = "";
    c4.value = "";
    c5.value = "";

    // Adds the row with the temp array passed in
    addAssembly(dataArray, true, rowNum);
}

/**
 * 
 * @param url: The url to post the json to
 * @param data: The json to post
 */
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        
        }, 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

/**
 * Removes the passed in row from the json columns, and then requests the backend to rewrite the new json ontop of the old json
 * @param {number} rowNum 
 */
async function jsonRemoveRow(rowNum){
    var json = await returnJSON();

    json.c1.splice(rowNum, 1);
    json.c2.splice(rowNum, 1);
    json.c3.splice(rowNum, 1);
    json.c4.splice(rowNum, 1);
    json.c5.splice(rowNum, 1);

    var response = await postData("/json/overwrite", json);
}

async function jsonEdit(addJSON, rowNum){
    await fetch("/json/edit", addJSON);
}

async function returnJSON(){
    return await fetch('/json/get').then(response => response.json());
}
