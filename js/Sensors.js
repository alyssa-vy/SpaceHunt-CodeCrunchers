// Story: As a player, I want to see what is located at nearby Celestial Points, so I know where things are.
// Acceptance Criteria:
// 1. Verify that if the player deploys sensors for the current CP, 2% of the supplies are consumed.
// 2. Verify that celestial objects within two CP of the current CP are displayed
// 3. Verify that celestial objects within two CP of the current CP are added to the Celestial Map

// This is a function that acts as a class for a celestial artifact. It contains the artifact name and its x/y coordinates
function celestialArtifact(artifactClass, x, y) {
    this.artifactClass = artifactClass;
    this.x = x;
    this.y = y;
}

var knownArtifacts = []; // create an empty array for a list of known artifacts
var sensorCP = 2; // originally 2 CP for sensors -> can be changed if we get enhanced sensors
// This function adds a celestial artifact to the list of known artifacts when scanned
function addToList(artifact, x, y) {

    if (knownArtifacts.length == 0) { // If the list is empty, add the first scanned artifact
        toAdd = new celestialArtifact(artifact, x, y);
        knownArtifacts.push(toAdd);
        addToLog(artifact, x, y); // display to the log
        worldMap.makeVisible(x, y);
        return 1;
    }

    else { // If the list is not empty...
        for (var i = 0; i < knownArtifacts.length; ++i) { // check through the list to see if it has already been added
            if (knownArtifacts[i].artifactClass == artifact) { // if an artifact is already in the list then return without displaying to log or adding agian
                if (knownArtifacts[i].x == x && knownArtifacts[i].y == y) // if artifact has same coordinates then it is already sensed.
                    return 0;
            }
        }

        // if the artifact does not appear in the list then add it and display to the log
        toAdd = new celestialArtifact(artifact, x, y);
        knownArtifacts.push(toAdd);
        addToLog(artifact, x, y);
        worldMap.makeVisible(x, y);
        return 1;

    }
}


// get the celestial artifact and its coordinates then output a text to the textarea of the log
function addToLog(artifact, x, y) {
    document.getElementById('log').value += artifact.id + " detected at celestial point (" + x + ", " + y + ")\n"
}

function deploySensor() {
    resources.subtractSuppliesTwo(); // subtract two from supplies
    if (resources.checkSupplies()) { // if supplies are above 0 then continue using the sensors
        alert("Deploying Sensors");
        currentx = parseInt(document.UI.xValue.value);
        currenty = parseInt(document.UI.yValue.value);

        // First check the coordinate the user is on currently to see if there is a celestial artifact there
        if(worldMap.objectExistsAtPosition(currentx, currenty)) {
        //if (worldMap.getObjectAtCoordinates(currentx, currenty) != null) {
            addToList(worldMap.getObjectAtCoordinates(currentx, currenty), currentx, currenty);
        }
        // Create a loop that goes around twice to check within +2CP of the current CP

        for (var i = 1; i <= sensorCP; ++i) {
            coordx = currentx;
            coordx += i;
            if (coordx < config.boardWidth) {
            // Check 2 above X
                if (worldMap.objectExistsAtPosition(coordx, currenty)){
                    addToList(worldMap.getObjectAtCoordinates(coordx, currenty), coordx, currenty);
                }
            }

            coordy = currenty;
            coordy += i;
            if (coordy < config.boardHeight) {
                // Check 2 above Y
                if (worldMap.objectExistsAtPosition(currentx, coordy)) {
                    addToList(worldMap.getObjectAtCoordinates(currentx, coordy), currentx, coordy);
                }
            }
        }

        // Create a loop that goes around twice to check within -2CP of the current CP
        for (var i = 1; i <= sensorCP; ++i) {
            coordx = currentx;
            coordx -= i;
            // Check 2 below X
            if (coordx >= 0) {
                if (worldMap.objectExistsAtPosition(coordx, currenty)) {
                    addToList(worldMap.getObjectAtCoordinates(coordx, currenty), coordx, currenty);
                }
            }
            coordy = currenty;
            coordy -= i;
            // Check 2 below Y
            if (coordy >= 0) {
                if (worldMap.objectExistsAtPosition(currentx, coordy)) {
                    addToList(worldMap.getObjectAtCoordinates(currentx, coordy), currentx, coordy);
                }
            }
        }

        for (var i = 1; i <= sensorCP; ++i) {
            coordx = currentx;
            coordx += i;
            for (var z = 1; z <= sensorCP; ++z) {
                coordy = currenty;
                coordy += z;
                if (worldMap.objectExistsAtPosition(coordx, coordy)) {
                    addToList(worldMap.getObjectAtCoordinates(coordx, coordy), coordx, coordy);
                }
                coordy = currenty;
                coordy -= z;
                if (coordy >= 0) {
                    if (worldMap.objectExistsAtPosition(coordx, coordy)) {
                        addToList(worldMap.getObjectAtCoordinates(coordx, coordy), coordx, coordy);
                    }
                }
            }
        }

        for (var i = 1; i <= sensorCP; ++i) {
            coordx = currentx;
            coordx -= i;
            if (coordx >= 0) {
                for (var z = 1; z <= sensorCP; ++z) {
                    coordy = currenty;
                    coordy += z;
                    if (worldMap.objectExistsAtPosition(coordx, coordy)) {
                        addToList(worldMap.getObjectAtCoordinates(coordx, coordy), coordx, coordy);
                    }
                    coordy = currenty;
                    coordy -= z;
                    if (coordy >= 0) {
                        if (worldMap.objectExistsAtPosition(coordx, coordy)) {
                            addToList(worldMap.getObjectAtCoordinates(coordx, coordy), coordx, coordy);
                        }
                    }
                }
            }
        }

    }

    else // if supplies are 0 or below, then return and do not use sensors (end game)
        return;
}
