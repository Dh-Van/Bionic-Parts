// The HTML table that will display information
const table = window.document.getElementById("table");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

let isVisible = false;
document.getElementById("popup").addEventListener('submit', function(e){e.preventDefault(); addData();}, false);


/**
 * Function that will load the json data present in the data.json file by calling the addAssembly method
 */
 async function addJSONdata(){
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
                console.log("this can't be breaking everything right?")
                // Array to store the data by row
                var tempArray = [];
                // Loops through each column, and gets the same index, essentially getting the first row
                for(j = 0; j < 5; j++){
                    tempArray[j] = dataArray[j][i];
                }
                addAssembly(tempArray, false);
            }
        });
}

addJSONdata();

function formCancel(){
    popup.style.diaplay = "none"; 
    overlay.style.display = "none";
    isVisible = false;
}

function formSubmit(){
    addData();
    formCancel();
}

function popped(){
    if(!isVisible) {popup.style.display = "initial"; overlay.style.display = "initial";}
    else if(isVisible) {popup.style.display = "none"; overlay.style.display = "none";}

    isVisible = !isVisible

    addData();
}

function addData(){
    var dataArray = [[], [], [], [], []];
    dataArray[0] = document.getElementById("c1").value;
    dataArray[1] = document.getElementById("c2").value;
    dataArray[2] = document.getElementById("c3").value;
    dataArray[3] = document.getElementById("c4").value;
    dataArray[4] = document.getElementById("c5").value;

    document.getElementById("c1").value = "";
    document.getElementById("c2").value = "";
    document.getElementById("c3").value = "";
    document.getElementById("c4").value = "";
    document.getElementById("c5").value = "";

    if(dataArray[0].length > 0)
        addAssembly(dataArray, true);
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
   * Function that will add an assembly onto the html table, and depending on the push boolean, add the data in dataArray to the data.json file
   * @param {Array<number>} dataArray: The array by 
   * @param {Boolean} push 
   */
async function addAssembly(dataArray, push){

    // Inserts the row to the end of the table, and adds cells in the right  order
    var row = table.insertRow(-1);
    var partNumberCell = row.insertCell(0);
    var typeCell = row.insertCell(1);
    var nameCell = row.insertCell(2);
    var parentCell = row.insertCell(3);
    var statusCell = row.insertCell(4);

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
