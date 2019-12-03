function switchToPage(id){
    visiblePages = document.getElementsByClassName("page visible");
    for (var i = 0; i < visiblePages.length; i++){
        visiblePages[i].classList.remove("visible");
    }
    document.getElementById(id).classList.add("visible");
    if(played){
        document.getElementById("StartButton").value = "Continue";
        document.getElementById("ConfigureButton").style.display = 'none';
    }
    if(id === "configuration" || id === "mainGame"){
        document.getElementById("LoadSaveButton").value = "Load/Save";
        document.getElementById("filename").style.display = 'inline';
        document.getElementById("savebtn").style.display = 'inline';
        document.getElementById("savebtn").innerHTML = '<br>';
        document.getElementById("savetxt").innerHTML = " Filename";
    }
}

function gameOver(){
    switchToPage("GameOver");
}

function gameWin() {
    switchToPage("GameWin");
}
