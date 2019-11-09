function switchToPage(id){
    visiblePages = document.getElementsByClassName("page visible");
    for (var i = 0; i < visiblePages.length; i++){
        visiblePages[i].classList.remove("visible");
    }
    document.getElementById(id).classList.add("visible");
}
