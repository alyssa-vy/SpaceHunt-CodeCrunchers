// Story: As a player, I want to see what is located at nearby Celestial Points, so I know where things are.
// Acceptance Criteria:
// 1. Verify that if the player deploys sensors for the current CP, 2% of the supplies are consumed.
// 2. Verify that celestial objects within two CP of the current CP are displayed
// 3. Verify that celestial objects within two CP of the current CP are added to the Celestial Map

// get the celestial artifact and its coordinates then output a text to the textarea of the log
function addToLog(artifact, x, y) {
    document.getElementById('log').value += artifact + " detected at celestial point (" + x + ", " + y + ")\n"
}

function deploySensor() {
    resources.subtractSuppliesTwo(); // subtract two from supplies
    if (resources.checkSupplies()) { // if supplies are above 0 then continue using the sensors
        alert("Deploying Sensors");
        currentx = document.UI.xValue.value;
        currenty = document.UI.yValue.value;
        currentx = parseInt(currentx); // it is originally a string so convert to an integer number
        currenty = parseInt(currenty);

        // First check the coordinate the user is on currently to see if there is a celestial artifact there
        if (Map[currentx][currenty] != null) {
            artifact = Map[currentx][currenty];
            addToLog(artifact, currentx, currenty);
        }

        // Create a loop that goes around twice to check within +2CP of the current CP
        for (var i = 1; i < 3; ++i) {
            coordx = currentx;
            coordx += i;
            // Check 2 above X
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

        // Create a loop that goes around twice to check within -2CP of the current CP
        for (var i = 0; i < 3; ++i) {
            coordx = currentx;
            coordx -= i;
            // Check 2 below X
            if (Map[coordx][currenty] != null) {
                artifact = Map[coordx][currenty];
                addToLog(artifact, coordx, currenty);
            }
            coordy = currenty;
            coordy -= i;
            // Check 2 right Y
            if (Map[currentx][coordy] != null) {
                artifact = Map[currentx][coordy];
                addToLog(artifact, currentx, coordy);
            }
        }

    }

    else // if supplies are 0 or below, then return and do not use sensors (end game)
        return;
}
