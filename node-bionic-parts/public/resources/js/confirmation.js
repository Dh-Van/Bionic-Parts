const overlay = document.getElementById("confirmOverlay");
const popup = document.getElementById("confirmation");

function popupConfirm(){
    showForm();
}

function confirmed(){

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