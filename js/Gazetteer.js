
function displayGazetteer() {

    if (document.getElementById("gazetteer").checked == false) {
        document.getElementById("gazarea").style.visibility= 'hidden';
        return false;
    }
    else {
        document.getElementById("gazarea").style.visibility= 'visible';
        return true;
    }

}


function addToGazetteer(artifact, x, y) {
    document.getElementyById("gazette").value += artifact + " at (" + x + ", " + y + ")\n";
}
