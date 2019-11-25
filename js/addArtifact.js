function addArtifact(x, y, type) {
    /*
        Type is a string that exists within the "artifacts" global variable

         to the global "Map" 2D array (which is initialized
         to contain null values in js/initializeMap.js) and
         the user is alerted

         If an artifact already exists, it is a no-op and
         the user is alerted.

     */
    if (worldMap.objectExistsAtPosition(x, y)){
        alert("A Celestial Artifact Already Exists at that location");
        unmarkAdded(type);
        return;
    }
    else if (worldMap.isOutOfBounds(x, y)){
        alert(`(${x}, ${y}) is out of bounds.`);
        unmarkAdded(type);
        return;
    }
    var object = artifacts[type];
    worldMap.addObject(object, type, x, y);
    addToGazetteer(type, x, y); // add the artifact to the celestial gazetteer
    alert(type + " was added to " + x + ", " + y);

    if(isPlanet(type) && notAlreadyAdded(type)) {
        loadOptions("planetType");
    }
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
function isPlanet(type){
    switch(type){
        case "Pentium-1":
        case "Pentium-2":
        case "Pentium-3":
        case "Pentium-4":
        case "Pentium-5":
        case "Pentium-6":
        case "Pentium-7":
        case "Celeron":
        case "Xeon":
        case "Ryzen":
            return true;
        default:
            return false;
    }
}
