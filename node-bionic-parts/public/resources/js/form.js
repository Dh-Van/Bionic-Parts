// The popup content
const popup = document.getElementById("popup");
// The background when the popup is displayed
const overlay = document.getElementById("overlay");

const LIGHT_GREEN = "#c5edc7" ;
const TRANSPARENT_RED = "rgba(255, 0, 0, .5)"

// Columns of the form
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")

// Visibility of the popup content
let isVisible = false;

// EventListeners to change the color of the form fields depending on if it is a valid input or not
{
c1.addEventListener("input", e => {c1.style.backgroundColor = LIGHT_GREEN; if(c1.value.length < 1) c1.style.backgroundColor = TRANSPARENT_RED;});
c2.addEventListener("input", e => {c2.style.backgroundColor = LIGHT_GREEN; if(c2.value.length < 1 || c2.value == "N/A") c2.style.backgroundColor = TRANSPARENT_RED;});
c3.addEventListener("input", e => {c3.style.backgroundColor = LIGHT_GREEN; if(c3.value.length < 1) c3.style.backgroundColor = TRANSPARENT_RED;});
c4.addEventListener("input", e => {c4.style.backgroundColor = LIGHT_GREEN; if(c4.value.length < 1) c4.style.backgroundColor = TRANSPARENT_RED;});
c5.addEventListener("input", e => {c5.style.backgroundColor = LIGHT_GREEN; if(c5.value.length < 1 || c5.value == "N/A") c5.style.backgroundColor = TRANSPARENT_RED;});
}

function formCancel(){
    popup.style.diaplay = "none"; 
    overlay.style.display = "none";
    isVisible = false;
}

function formSubmit(){
    if(

        ){
            alert("Fill in the required fields");
    } else {
        document.getElementById("Submit").disabled = false;
        addData();
        formCancel();
    }
}

function popped(){
    if(!isVisible) {popup.style.display = "initial"; overlay.style.display = "initial";}
    else if(isVisible) {popup.style.display = "none"; overlay.style.display = "none";}

    isVisible = !isVisible
}

