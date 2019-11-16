function addArtifact(x, y, type) {
    /*
        Adds an artifact of type: Pentium 1
                                  Pentium 2
                                  Pentium 3
                                  Pentium 4
                                  Pentium 5
                                  Pentium 6
                                  Pentium 7
                                  Xeon
                                  Celeron
                                  Ryzen
                                  Asteroid
                                  SpaceStation

         to the global "Map" 2D array (which is initialized
         to contain null values in js/initializeMap.js) and
         the user is alerted

         If an artifact already exists, it is a no-op and
         the user is alerted.

     */
    if(isInBounds(x,y) && markAdded(type)){
        if(Map[x][y] === null) {
            Map[x][y] = type;
            loadOptions("planetType");
            alert(type + " was added to " + x + ", " + y);
            addToGazetteer(type, x, y); // add the artifact to the celestial gazetteer
            return true;
        } else {
            alert("A Celestial Artifact Already Exists at that location");
            unmarkAdded(type);
        }
    } else {
        loadOptions("planetType");
        alert("error occurred when adding artifact");
        return false;
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
function markAdded(type){
    /*
        If the artifact we are adding has not already
        been added then mark it added and return true.
        Otherwise no-op and return false.
     */
    switch(type){
        case "Pentium 1":
            if(!PlanetsAdded[0]){
                PlanetsAdded[0] = true;
                return true;
            }
            return false;
        case "Pentium 2":
            if(!PlanetsAdded[1]){
                PlanetsAdded[1] = true;
                return true;
            }
            return false;
        case "Pentium 3":
            if(!PlanetsAdded[2]){
                PlanetsAdded[2] = true;
                return true;
            }
            return false;
        case "Pentium 4":
            if(!PlanetsAdded[3]){
                PlanetsAdded[3] = true;
                return true;
            }
            return false;
        case "Pentium 5":
            if(!PlanetsAdded[4]){
                PlanetsAdded[4] = true;
                return true;
            }
            return false;
        case "Pentium 6":
            if(!PlanetsAdded[5]){
                PlanetsAdded[5] = true;
                return true;
            }
            return false;
        case "Pentium 7":
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
        case "Pentium 1":
            if(PlanetsAdded[0]){
                PlanetsAdded[0] = false;
                return true;
            }
            return false;
        case "Pentium 2":
            if(PlanetsAdded[1]){
                PlanetsAdded[1] = false;
                return true;
            }
            return false;
        case "Pentium 3":
            if(PlanetsAdded[2]){
                PlanetsAdded[2] = false;
                return true;
            }
            return false;
        case "Pentium 4":
            if(PlanetsAdded[3]){
                PlanetsAdded[3] = false;
                return true;
            }
            return false;
        case "Pentium 5":
            if(PlanetsAdded[4]){
                PlanetsAdded[4] = false;
                return true;
            }
            return false;
        case "Pentium 6":
            if(PlanetsAdded[5]){
                PlanetsAdded[5] = false;
                return true;
            }
            return false;
        case "Pentium 7":
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
        Uses the getConfig() method to determine
        if a given x and y coordinate are in bounds.
        Returns the result.
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
