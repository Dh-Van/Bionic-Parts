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

function setColor(color){
    c1.style.backgroundColor = color;
    c2.style.backgroundColor = color;
    c3.style.backgroundColor = color;
    c4.style.backgroundColor = color;
    c5.style.backgroundColor = color;
}

function formCancel(){
    isVisible = false;
    fadeOut().then(removeForm());
}

function fadeOut(){
    overlay.style.animation = "fadeOut 0.4s forwards";
    popup.style.animation = "fadeOut 0.4s forwards";
}

function fadeIn(){
    overlay.style.animation = "fadeIn 0.4s forwards";
    popup.style.animation = "fadeIn 0.4s forwards";
}

function removeForm(){
    popup.style.display = "none"; 
    overlay.style.display = "none";
}

function showForm(){
    popup.style.display = "block"; 
    overlay.style.display = "block";
}

function formSubmit(){
    if(
        c1.value.length < 1 ||
        c2.value.length < 1 ||
        c3.value.length < 1 ||
        c4.value.length < 1 ||
        c5.value.length < 1 ||
        c2.value == "N/A" ||
        c5.value == "N/A"){
            alert("Fill in the required fields");
    } else {
        addData();
        formCancel();
    }
}

function formClear(){
    c1.value = "";
    c2.value = "N/A";
    c3.value = "";
    c4.value = "";
    c5.value = "N/A";
    setColor(TRANSPARENT_RED);
}

function popped(){
    setColor(TRANSPARENT_RED);
    fadeIn();
    showForm();

    isVisible = !isVisible
}

