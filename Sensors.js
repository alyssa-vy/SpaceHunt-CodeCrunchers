// Story: As a player, I want to see what is located at nearby Celestial Points, so I know where things are.
// Acceptance Criteria:
// 1. Verify that if the player deploys sensors for the current CP, 2% of the supplies are consumed.
// 2. Verify that celestial objects within two CP of the current CP are displayed
// 3. Verify that celestial objects within two CP of the current CP are added to the Celestial Map

function addToLog(artifact, x, y) {
    //artifact = "Planet" // test celestial artifact
    //x = 1
    //y = 2
    document.getElementById('log').value += artifact + " detected at celestial point (" + x + ", " + y + ")\n"
}

function deploySensor() {
    //checkSupplies();
    //subtractSuppliesTwo(); // this breaks my next two statements?
    //resources.subtractSuppliesTwo();

    if (resources.checkSupplies()) {
        resources.subtractSuppliesTwo();
        currentx = document.UI.xValue.value;
        currenty = document.UI.yValue.value;
        currentx = parseInt(currentx); // it is originally a string so convert to an integer number
        currenty = parseInt(currenty);
        alert("Deploying Sensors");

        if (Map[currentx][currenty] != null) {
            artifact = Map[currentx][currenty];
            addToLog(artifact, currentx, currenty);
        }

        for (var i = 1; i < 3; ++i) {
            coordx = currentx;
            coordx += i;
            // Check 2 above X
            if (Map[coordx][currenty] != null) {
                artifact = Map[coordx][currenty];
                addToLog(artifact, coordx, currenty);
            }
            coordx = currentx;
            coordx -= i;
            // Check 2 below X
            if (Map[coordx][currenty] != null) {
                artifact = Map[coordx][currenty];
                addToLog(artifact, coordx, currenty);
            }
            coordy = currenty;
            coordy += i;
            // Check 2 right Y
            if (Map[currentx][coordy] != null) {
                artifact = Map[currentx][coordy];
                addToLog(artifact, currentx, coordy);
            }

        }
    }

    else
        return;

}
