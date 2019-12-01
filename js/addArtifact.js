var meteorsAdded = 0;
var asteroidsAdded = 0;
var spacestationsAdded = 0;
var wormholesAdded = 0;
var freightersAdded = 0;

function addPlanet(x, y, name){
    if (canAddArtifact(x, y)){
        var object = planets[name];
        worldMap.addObject(object, x, y);
        markPlanetAdded(name);
        alert(name + " was added to " + x + ", " + y);
    }
}

function addAsteroid(x, y){
    if (canAddArtifact(x, y)){
        var id = "Asteroid-" + asteroidsAdded;
        worldMap.addObject(new Astroid(id, "img/asteroid.png"), x, y);
        alert("Asteroid was added to " + x + ", " + y);
        asteroidsAdded++;
    }
}

function addMeteor(x, y){
    if (canAddArtifact(x, y)){
        var id = "Meteor-" + meteorsAdded;
        worldMap.addObject(new Meteor(id, "img/meteor.jpeg"), x, y);
        alert("Meteor was added to " + x + ", " + y);
        meteorsAdded++;
    }
}

function addSpacestation(x, y){
    if (canAddArtifact(x, y)){
        var id = "Spacestation-" + spacestationsAdded;
        worldMap.addObject(new Spacestation(id, "img/spacestation.jpg"), x, y);
        alert("Space station was added to " + x + ", " + y);
        spacestationsAdded++;
    }
}

function addWormhole(x, y){
    if (canAddArtifact(x, y)){
        var id = "Wormhole-" + wormholesAdded;
        worldMap.addObject(new Wormhole(id, "img/wormhole.jpg"), x, y);
        alert("Wormhole was added to " + x + ", " + y);
        wormholesAdded++;
    }
}

function addFreighter(x, y, k){
    /*
     *  Place an abandoned freighter (referred to internally as a "Freighter" object)
     *  at an (x, y) location on the map if able, and set the amount of supplies that
     *  the player scavanges from the freighter to the third argument, k
     */
    if(canAddArtifact(x, y)){
        var id = "Freighter-" + freightersAdded;
        var freighter = new Freighter(id, "img/freighter.png", k);
        worldMap.addObject(freighter, x, y);
        alert("Abandoned Freighter was added to " + x + ", " + y + " with " + k + " salvageable supplies");
        ++freightersAdded;
    }
}

function canAddArtifact(x, y){
    if (worldMap.objectExistsAtPosition(x, y)){
        alert("A Celestial Artifact Already Exists at that location");
        return false;
    }
    else if (worldMap.isOutOfBounds(x, y)){
        alert(`(${x}, ${y}) is out of bounds.`);
        return false;
    }
    disableResizingOfMap();
    return true;
}

function addExtraInput(type) {
    /*
     * Makes the extraInput input field visible if the artifact
     * type being added needs it
     */
    switch(type){
        case "Freighter":
            document.getElementById("extraInput").style.display = 'inline';
            document.getElementById("extraInputLabel").innerHTML = 'Supplies<br>';
            document.getElementById("extraInputLabel").style.display = 'inline';
            break;
        case "Asteroid":
        case "Wormhole":
        case "SpaceStation":
        default:
            document.getElementById("extraInputLabel").innerHTML = "document.getElementById(\"extraInputLabel\").innerHTML unset";
            document.getElementById("extraInputLabel").style.display = 'none';
            document.getElementById("extraInput").style.display = 'none';
            break;
    }
    /* Check if input is valid */
    disableAddIfInvalid(
        document.getElementById("addArtifactX").value,
        document.getElementById("addArtifactY").value,
        "addArtifactButton");
}

function addArtifact(type, x, y, extraInput){
    /*
     * Operates similarly to a funciton dispatch table in C.
     * Allows for simplicity in the html file by determining
     * the type of artifact being added here, and calling
     * the appropriate method for each object type.
     */
    switch(type){
        case "Freighter":
            addFreighter(x, y, extraInput);
            break;
        case "SpaceStation":
            addSpacestation(x, y);
            break;
        case "Asteroid":
            addAsteroid(x, y);
            break;
        case "Wormhole":
            addWormhole(x, y);
            break;
        case "Meteor":
            addMeteor(x, y);
            break;
    }
}

function disablePlanetAddIfInvalidInput() {
    /*
        Examines the input inside the planetXLocation and
        planetYLocation input fields and disables their
        corresponding submit button ("addPlanetButton")
        if their input is determined to be invalid.

        Invalid in this case meaning the x,y coordinate
        is out of bounds and a valid planet is selected.
    */
    let x = document.getElementById("planetXLocation").value;
    let y = document.getElementById("planetYLocation").value;
    if(isInBounds(x, y) && document.getElementById("planetType").value !== ""){
        document.getElementById("addPlanetButton").disabled = false;
    } else {
        document.getElementById("addPlanetButton").disabled = true;
    }
}
function disableAddIfInvalid(x, y, submitButtonId) {
    /*
        If x and y are in bounds then the submit button
        which is passed by id is enabled, otherwise
        it is disabled.
     */
    if(isInBounds(x, y) && document.getElementById("artifactType").value !== "")
        document.getElementById(submitButtonId).disabled = false;
    else
        document.getElementById(submitButtonId).disabled = true;
}

function planetHasBeenAdded(type){
    /*
        If the artifact we are adding has not already
        been added then mark it added and return true.
        Otherwise no-op and return false.
     */
    switch(type){
        case "Pentium-1":
            return PlanetsAdded[0];
            break;
        case "Pentium-2":
            return PlanetsAdded[1];
            break;
        case "Pentium-3":
            return PlanetsAdded[2];
            break;
        case "Pentium-4":
            return PlanetsAdded[3];
            break;
        case "Pentium-5":
            return PlanetsAdded[4];
            break;
        case "Pentium-6":
            return PlanetsAdded[5];
            break;
        case "Pentium-7":
            return PlanetsAdded[6];
            break;
        case "Celeron":
            return PlanetsAdded[7];
            break;
        case "Xeon":
            return PlanetsAdded[8];
            break;
        case "Ryzen":
            return PlanetsAdded[9];
            break;
        default:
            return null;
    }
}

function markPlanetAdded(type){
    switch(type){
        case "Pentium-1":
            PlanetsAdded[0] = true;
            break;
        case "Pentium-2":
            PlanetsAdded[1] = true;
            break;
        case "Pentium-3":
            PlanetsAdded[2] = true;
            break;
        case "Pentium-4":
            PlanetsAdded[3] = true;
            break;
        case "Pentium-5":
            PlanetsAdded[4] = true;
            break;
        case "Pentium-6":
            PlanetsAdded[5] = true;
            break;
        case "Pentium-7":
            PlanetsAdded[6] = true;
            break;
        case "Celeron":
            PlanetsAdded[7] = true;
            break;
        case "Xeon":
            PlanetsAdded[8] = true;
            break;
        case "Ryzen":
            PlanetsAdded[9] = true;
            break;
        default:
            return;
    }
}

function isInBounds(x, y) {
    /*
        Uses the current config to determine
        if a given x and y coordinate are in bounds.
        Returns the resulting boolean.
    */
    let goodx = false;
    let goody = false;
    if(x >= 0 && x < config.boardWidth){
        goodx = true;
    }
    if(y >= 0 && y < config.boardHeight){
        goody = true;
    }
    return goodx && goody;
}

function randomizeMap(){
    // Items to add is BoardArea * percentOfTheBoard
    var meteorsToAdd = Math.floor(config.boardWidth * config.boardHeight * 0.05);
    var asteroidsToAdd = Math.floor(config.boardWidth * config.boardHeight * 0.05);
    var wormholesToAdd = Math.floor(config.boardWidth * config.boardHeight * 0.05);
    var spacestationsToAdd = Math.floor(config.boardWidth * config.boardHeight * 0.15);

    for (meteorsAdded; meteorsAdded <= meteorsToAdd; meteorsAdded++){
        var id = "Meteor-" + meteorsAdded;
        placeArtifactRandomly(new Meteor(id, "meteor.png"));
    }
    for (asteroidsAdded; asteroidsAdded <= asteroidsToAdd; asteroidsAdded++){
        var id = "Asteroid-" + asteroidsAdded;
        placeArtifactRandomly(new Asteroid(id, "asteroid.png"));
    }
    for (wormholesAdded; wormholesAdded <= wormholesToAdd; wormholesAdded++){
        var id = "Wormhole-" + wormholesAdded;
        placeArtifactRandomly(new Wormhole(id, "wormhole.jpg"));
    }
    for (spacestationsAdded; spacestationsAdded <= spacestationsToAdd; spacestationsAdded++){
        var id = "Spacestation-" + spacesationsToAdd;
        placeArtifactRandomly(new Spacestation(id, "spacestation.jpg"));
    }

    for (var planet in planets){
        if (!planetHasBeenAdded(planet)){
            placeArtifactRandomly(planets[planet]);
        }
    }
}

function placeArtifactRandomly(artifact){
    var x = Math.floor(Math.random() * config.boardWidth);
    var y = Math.floor(Math.random() * config.boardHeight);
    while (worldMap.objectExistsAtPosition(x, y)){
        var x = Math.floor(Math.random() * config.boardWidth);
        var y = Math.floor(Math.random() * config.boardHeight);
    }
    console.log(x, y);
    worldMap.addObject(artifact, x, y);
}

function disableResizingOfMap(){
    configurationSelectors.boardWidth.disabled = true;
    configurationSelectors.boardHeight.disabled = true;
}
