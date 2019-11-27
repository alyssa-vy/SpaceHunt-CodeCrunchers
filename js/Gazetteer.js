
// Acceptance Criteria:
// 1. Verify that only a quality engineer or game admin is able to see the Celestial Gazetteer
// 2. Verify that all celestial artifacts are displayed with their coordinates.


// If the checkbox is checked in config then make the gazetteer visible
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

// Add a celestial artifact to the gazetteer
function addToGazetteer(artifact, x, y) {
    document.getElementById("gazette").value += artifact + " at (" + x + ", " + y + ")\n";
}
