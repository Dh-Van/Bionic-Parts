const confirmOverlay = document.getElementById("confirmOverlay");
const confirmPopup = document.getElementById("confirmation");

var confirmed = false;
var currRow = -1;

function popupConfirm(rowNum){
    document.getElementById("Confirm").setAttribute("onClick",`removeRow(${rowNum})`);
    showConfirmForm();
}

function isConfirmed(){
    return confirmed;
}

/**
 * HIDES the form on the screen
 */
 function hideConfirm(){
    confirmPopup.style.display = "none"; 
    confirmOverlay.style.display = "none";
}

/**
 * SHOWS the form on the screen
 */
function showConfirmForm(){
    confirmPopup.style.display = "block";
    confirmOverlay.style.display = "block";
}