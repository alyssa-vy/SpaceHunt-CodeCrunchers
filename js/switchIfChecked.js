function switchIfChecked(nextId, doneId){
    let checked = document.getElementById("administrator").checked;
    let next = document.getElementById(nextId);
    let done = document.getElementById(doneId);

    if(checked){
        next.style.display = "inline";
        done.style.display = "none";
    } else {
        next.style.display = "none";
        done.style.display = "inline";
    }

}