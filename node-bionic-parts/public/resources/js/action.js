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
    editButton.setAttribute("onClick",  `removeRow(${currRow})`);

    actionCell.appendChild(editButton);
}