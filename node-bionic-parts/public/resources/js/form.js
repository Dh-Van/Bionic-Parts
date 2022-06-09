// The popup content
const popup = document.getElementById("popup");
// The background when the popup is displayed
const overlay = document.getElementById("popupOverlay");

let editable = false;
let row = 0;

const LIGHT_GREEN = "#c5edc7" ;
const TRANSPARENT_RED = "rgba(255, 0, 0, .5)"
let currData = [[], [], [], [], []];

// Columns of the form
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")

// EventListeners to change the color of the form fields depending on if it is a valid input or not
{
c1.addEventListener("input", e => {c1.style.backgroundColor = LIGHT_GREEN; if(c1.value.length < 1) c1.style.backgroundColor = TRANSPARENT_RED;});
c2.addEventListener("input", e => {c2.style.backgroundColor = LIGHT_GREEN; if(c2.value.length < 1 || c2.value == "N/A") c2.style.backgroundColor = TRANSPARENT_RED;});
c3.addEventListener("input", e => {c3.style.backgroundColor = LIGHT_GREEN; if(c3.value.length < 1) c3.style.backgroundColor = TRANSPARENT_RED;});
c4.addEventListener("input", e => {c4.style.backgroundColor = LIGHT_GREEN; if(c4.value.length < 1) c4.style.backgroundColor = TRANSPARENT_RED;});
c5.addEventListener("input", e => {c5.style.backgroundColor = LIGHT_GREEN; if(c5.value.length < 1 || c5.value == "N/A") c5.style.backgroundColor = TRANSPARENT_RED;});
}

/**
 * Sets the background color of ALL the form fields to the input color
 * @param {color} color 
 */
function setColor(color){
    c1.style.backgroundColor = color;
    c2.style.backgroundColor = color;
    c3.style.backgroundColor = color;
    c4.style.backgroundColor = color;
    c5.style.backgroundColor = color;
}

/**
 * Makes the Overlay and Popup content fade IN
 */
function fadeOut(){
    fadeIn();
    overlay.classList.toggle("fadeOut");
    popup.classList.toggle("fadeOut");
}

/**
 * Makes the Overlay and Popup content fade OUT
 */
function fadeIn(){
    fadeOut();
    overlay.classList.toggle("fadeIn");
    popup.classList.toggle("fadeIn");
}

/**
 * HIDES the form on the screen
 */
function hideForm(){
    popup.style.display = "none"; 
    overlay.style.display = "none";
}

/**
 * SHOWS the form on the screen
 */
function showForm(){
    popup.style.display = "block";
    overlay.style.display = "block";
}

/**
 * Makes the form fade in and sets the color of all the form fields to TRANSPARENT_RED
 */
function displayForm(){
    setColor(TRANSPARENT_RED);
    showForm();
}

/**
 * Submits the form only if the form fields are valid
 */
function formSubmit(){
    if(!validateForm())
            alert("Fill in the required fields");
    else {
        if(editable){
            editable = false;
            addData(row);
            removeRow(row);
            row = -1;
        } else {
        addData(-1);
        formCancel();
        }
    }
}

/**
 * Clears ALL the values of the form fields and sets the background color to TRANSPARENT_RED
 */
function formClear(){
    c1.value = "";
    c2.value = "N/A";
    c3.value = "";
    c4.value = "";
    c5.value = "N/A";
    setColor(TRANSPARENT_RED);
}

function formSet(col1, col2, col3, col4, col5, rowNum){
    editable = true;
    row = rowNum;

    c1.value = col1;
    c2.value = col2;
    c3.value = col3;
    c4.value = col4;
    c5.value = col5;

    setColor(LIGHT_GREEN);
    showForm();
}

/**
 * Makes the form fade out, and then stops showing the form
 */
function formCancel(){
    hideForm();
}

/**
 * Returns if the form is valid or not
 */
function validateForm(){
    return  !(c1.value.length < 1 ||
            c2.value.length < 1 ||
            c3.value.length < 1 ||
            c4.value.length < 1 ||
            c5.value.length < 1 ||
            c2.value == "N/A" ||
            c5.value == "N/A");
}