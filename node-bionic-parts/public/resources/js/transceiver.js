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

// Instantly calls the function made above
addJSONdata();

/**
 * Function that adds the data from the current row of the table to the json file
 */
function addData(){
    var dataArray = [[], [], [], [], []];

    dataArray[0] = c1.value;
    dataArray[1] = c2.value;
    dataArray[2] = c3.value;
    dataArray[3] = c4.value;
    dataArray[4] = c5.value;

    c1.value = "";
    c2.value = "";
    c3.value = "";
    c4.value = "";
    c5.value = "";

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
