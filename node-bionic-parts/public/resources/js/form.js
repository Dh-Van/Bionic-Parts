// The popup content
const popup = document.getElementById("popup");
// The background when the popup is displayed
const overlay = document.getElementById("overlay");

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
c1.addEventListener("input", e => {c1.style.backgroundColor = "#c5edc7"; if(c1.value.length < 1) c1.style.backgroundColor = "rgba(255, 0, 0, .5)";});
c2.addEventListener("input", e => {c2.style.backgroundColor = "#c5edc7"; if(c2.value.length < 1 || c2.value == "N/A") c2.style.backgroundColor = "rgba(255, 0, 0, .5)";});
c3.addEventListener("input", e => {c3.style.backgroundColor = "#c5edc7"; if(c3.value.length < 1) c3.style.backgroundColor = "rgba(255, 0, 0, .5)";});
c4.addEventListener("input", e => {c4.style.backgroundColor = "#c5edc7"; if(c4.value.length < 1) c4.style.backgroundColor = "rgba(255, 0, 0, .5)";});
c5.addEventListener("input", e => {c5.style.backgroundColor = "#c5edc7"; if(c5.value.length < 1 || c5.value == "N/A") c5.style.backgroundColor = "rgba(255, 0, 0, .5)";});
}

function formCancel(){
    popup.style.diaplay = "none"; 
    overlay.style.display = "none";
    isVisible = false;
}

function formSubmit(){
    if(
        c1.value.length < 1 ||
        c2.value.length < 1 ||
        c3.value.length < 1 ||
        c4.value.length < 1 ||
        c5.value.length < 1 ||
        c2.value == "N/A" ||
        c5.value == "N/A"
        ){
            alert("Fill in the required fields");
    } else {
        document.getElementById("Submit").disabled = false;
        addData();
        formCancel();
    }
}

function popped(){
    c1.style.backgroundColor = "rgba(255, 0, 0, .5)";
    c2.style.backgroundColor = "rgba(255, 0, 0, .5)";
    c3.style.backgroundColor = "rgba(255, 0, 0, .5)";
    c4.style.backgroundColor = "rgba(255, 0, 0, .5)";
    c5.style.backgroundColor = "rgba(255, 0, 0, .5)";
    
    if(!isVisible) {popup.style.display = "initial"; overlay.style.display = "initial";}
    else if(isVisible) {popup.style.display = "none"; overlay.style.display = "none";}

    isVisible = !isVisible
}

