function switchIfChecked(nextId, doneId) {
    /*
        This function is intended to be used only for allowing game administrators
        to proceed to the artifact placement page iff the administrator checkbox
        is checked.

        It ensures the appropriate button is visible to the appropriate user.
     */

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
