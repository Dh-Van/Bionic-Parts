function createEditButton(actionCell, currRow){
    var editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "edit";
    editButton.setAttribute(`onClick`, `editRow(${currRow})`);

    actionCell.appendChild(editButton);
}

function createDeleteButton(actionCell, currRow){
    var editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "delete";
    editButton.setAttribute("data-row", currRow);

    editButton.setAttribute("onClick",`popupConfirm(${editButton.getAttribute("data-row")})`);

    actionCell.appendChild(editButton);
}

// CALEB CODE: 
// Coding letters I am goood at this 
// function beCool(yourmom)
// {
//     int hello =+ yourmom; 
//     for(int i = 0; i < 10; i =+1)
//     {
//         hello += yourmom;
//     }
//     return yourmom;
// }