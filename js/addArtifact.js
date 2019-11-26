var meteorsAdded = 0;
var spacestationsAdded = 0;
var wormholesAdded = 0;
var freightersAdded = 0;

function addPlanet(x, y, name){
    if (canAddArtifact(x, y)){
        var object = planets[name];
        worldMap.addObject(object, x, y);
        addToGazetteer(name, x, y);
        alert(name + " was added to " + x + ", " + y);
    }
}

function addMeteor(x, y){
    if (canAddArtifact(x, y)){
        var id = "Meteor-" + meteorsAdded;
        worldMap.addObject(new Meteor(id, "img/asteroid.png"), x, y);
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
        worldMap.addObject(new Freighter(id, "img/freighter.jph", k), x, y);
        alert("Abandoned Freighter was added to " + x + ", " + y);
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
    return true;
}

function disablePlanetAdd() {
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
    document.getElementById(submitButtonId).disabled = !isInBounds(x, y);
}
function notAlreadyAdded(type){
    /*
        If the artifact we are adding has not already
        been added then mark it added and return true.
        Otherwise no-op and return false.
     */
    switch(type){
        case "Pentium-1":
            if(!PlanetsAdded[0]){
                PlanetsAdded[0] = true;
                return true;
            }
            return false;
        case "Pentium-2":
            if(!PlanetsAdded[1]){
                PlanetsAdded[1] = true;
                return true;
            }
            return false;
        case "Pentium-3":
            if(!PlanetsAdded[2]){
                PlanetsAdded[2] = true;
                return true;
            }
            return false;
        case "Pentium-4":
            if(!PlanetsAdded[3]){
                PlanetsAdded[3] = true;
                return true;
            }
            return false;
        case "Pentium-5":
            if(!PlanetsAdded[4]){
                PlanetsAdded[4] = true;
                return true;
            }
            return false;
        case "Pentium-6":
            if(!PlanetsAdded[5]){
                PlanetsAdded[5] = true;
                return true;
            }
            return false;
        case "Pentium-7":
            if(!PlanetsAdded[6]){
                PlanetsAdded[6] = true;
                return true;
            }
            return false;
        case "Celeron":
            if(!PlanetsAdded[7]){
                PlanetsAdded[7] = true;
                return true;
            }
            return false;
        case "Xeon":
            if(!PlanetsAdded[8]){
                PlanetsAdded[8] = true;
                return true;
            }
            return false;
        case "Ryzen":
            if(!PlanetsAdded[9]){
                PlanetsAdded[9] = true;
                return true;
            }
            return false;
        case "Asteroid":
            return true;
        case "SpaceStation":
            return true;
        case "Wormhole":
            return true;
        case "BadMax":
            return true;
        default:
            return false;
    }
}
function unmarkAdded(type){
    /*
        If the artifact we are adding has already
        been added then unmark it added and return true.
        Otherwise no-op and return false.
     */
    switch(type){
        case "Pentium-1":
            if(PlanetsAdded[0]){
                PlanetsAdded[0] = false;
                return true;
            }
            return false;
        case "Pentium-2":
            if(PlanetsAdded[1]){
                PlanetsAdded[1] = false;
                return true;
            }
            return false;
        case "Pentium-3":
            if(PlanetsAdded[2]){
                PlanetsAdded[2] = false;
                return true;
            }
            return false;
        case "Pentium-4":
            if(PlanetsAdded[3]){
                PlanetsAdded[3] = false;
                return true;
            }
            return false;
        case "Pentium-5":
            if(PlanetsAdded[4]){
                PlanetsAdded[4] = false;
                return true;
            }
            return false;
        case "Pentium-6":
            if(PlanetsAdded[5]){
                PlanetsAdded[5] = false;
                return true;
            }
            return false;
        case "Pentium-7":
            if(PlanetsAdded[6]){
                PlanetsAdded[6] = false;
                return true;
            }
            return false;
        case "Celeron":
            if(PlanetsAdded[7]){
                PlanetsAdded[7] = false;
                return true;
            }
            return false;
        case "Xeon":
            if(PlanetsAdded[8]){
                PlanetsAdded[8] = false;
                return true;
            }
            return false;
        case "Ryzen":
            if(PlanetsAdded[9]){
                PlanetsAdded[9] = false;
                return true;
            }
            return false;
        default:
            return false;
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
    var wormholesToAdd = Math.floor(config.boardWidth * config.boardHeight * 0.05);
    var spacestationsToAdd = Math.floor(config.boardWidth * config.boardHeight * 0.15);

    console.log(meteorsToAdd, meteorsAdded)

    for (meteorsAdded; meteorsAdded <= meteorsToAdd; meteorsAdded++){
        var id = "Meteor-" + meteorsAdded;
        placeArtifactRandomly(new Meteor(id, "asteroid.png"));
    }
    for (wormholesAdded; wormholesAdded <= wormholesToAdd; wormholesAdded++){
        var id = "Wormhole-" + wormholesAdded;
        placeArtifactRandomly(new Wormhole(id, "wormhole.jpg"));
    }
    for (spacestationsAdded; spacestationsAdded <= spacestationsToAdd; spacestationsAdded++){
        var id = "Spacestation-" + spacesationsToAdd;
        placeArtifactRandomly(new Spacestation(id, "spacestation.jpg"));
    }
}

function placeArtifactRandomly(artifact){
    var x = Math.floor(Math.random() * config.boardWidth);
    var y = Math.floor(Math.random() * config.boardHeight);
    while (worldMap.objectExistsAtPosition(x, y)){
        var x = Math.floor(Math.random() * config.boardWidth);
        var y = Math.floor(Math.random() * config.boardHeight);
    }
    worldMap.addObject(artifact, x, y);
}
