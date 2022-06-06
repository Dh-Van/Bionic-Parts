var isVisible = false;
var firstInput = true;

document.getElementById("window").addEventListener('submit', function(e){e.preventDefault(); replaceText();}, false);

{
function popped(){
    let window = document.getElementById("window");
    if(!isVisible){
        window.style.visibility = "visible";
        isVisible = true;
    } else {
        window.style.visibility = "hidden";
        isVisible = false;
    }
}

function replaceText(){

    let form = document.getElementById("form");

    let inputs = document.querySelectorAll("#test");

    let text = "";

    for(i = 0; i < inputs.length; i++){
        text += inputs[i].value;
    }

    if(firstInput){
        document.getElementById("display").innerHTML = text;
        firstInput = !firstInput;
    } else
    document.getElementById("display").innerHTML += "<br>" + text;


    for(i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }    
}

}