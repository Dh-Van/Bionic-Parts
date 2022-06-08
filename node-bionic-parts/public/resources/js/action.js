function createEditButton(actionCell, currRow){
    var editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "edit";
    editButton.setAttribute(`onClick`, `setEditable(${currRow})`);

    actionCell.appendChild(editButton);
}

function createDeleteButton(actionCell, func){
    var editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "delete";
    editButton.setAttribute("onClick", func);

    actionCell.appendChild(editButton);
}