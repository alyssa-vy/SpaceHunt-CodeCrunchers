
function saveGame(filename) {
    /*
        Saves the current state of the game to local storage.

        Examine the string extension upon the filename for each
        thing saved to see what code is associated with what global variable.
     */

    //Save the name of the session
    let prev = localStorage.getItem("SavedSessions");
    if (prev !== null){
        let y = parseInt(prev) + 1;
        localStorage.setItem("SavedSessions", y);
        localStorage.setItem("ss" + y, filename);
    } else {
        localStorage.setItem("SavedSessions", "1");
        localStorage.setItem("ss1", filename);
    }

    //Active Resources/Position
    if(played){
        localStorage.setItem(filename + ".posx", eval(position._x));
        localStorage.setItem(filename + ".posy", eval(position._y));

        localStorage.setItem(filename + ".energy", eval(resources._energy));
        localStorage.setItem(filename + ".supplies", eval(resources._supplies));
        localStorage.setItem(filename + ".credits", eval(resources._credits));
        localStorage.setItem(filename + ".health", eval(resources._health));
    } else {
        localStorage.setItem(filename + ".posx", eval(config.initialLocationX));
        localStorage.setItem(filename + ".posy", eval(config.initialLocationY));

        localStorage.setItem(filename + ".energy", eval(config.maximumEnergy));
        localStorage.setItem(filename + ".supplies", eval(config.maximumSupplies));
        localStorage.setItem(filename + ".credits", eval(config.maximumCredits));
        localStorage.setItem(filename + ".health", eval(config.maximumHealth));
    }

    //Resources
    localStorage.setItem(filename + ".canmove", eval(canMove));
    localStorage.setItem(filename + ".maxenergy", eval(resources._maxEnergy));
    localStorage.setItem(filename + ".maxsupplies", eval(resources._maxSupplies));
    localStorage.setItem(filename + ".maxhealth", eval(resources._maxHealth));
    localStorage.setItem(filename + ".initd", eval(resources._initd));
    localStorage.setItem(filename + ".hasbox", eval(resources._hasStrongBox));
    localStorage.setItem(filename + ".dmg", eval(resources._isDamaged));

    //Config
    localStorage.setItem(filename + ".boardwidth", eval(config.boardWidth));
    localStorage.setItem(filename + ".boardheight", eval(config.boardHeight));
    localStorage.setItem(filename + ".godmode", eval(config.godMode));
    localStorage.setItem(filename + ".rwb", eval(config.randomWormholeBehavior));
    localStorage.setItem(filename + ".gazetteer", eval(config.gazetteer));
    localStorage.setItem(filename + ".log", document.getElementById("log").value);
    localStorage.setItem(filename + ".gameadmin", eval(config.gameAdministrator));
    localStorage.setItem(filename + ".ix", eval(config.initialLocationX));
    localStorage.setItem(filename + ".iy", eval(config.initialLocationY));

    //Configuration Info
    localStorage.setItem(filename + ".asteroidsadded", eval(asteroidsAdded));
    localStorage.setItem(filename + ".asteroidcoverage", eval(asteroidCoverage));
    localStorage.setItem(filename + ".meterosadded", eval(meteorsAdded));
    localStorage.setItem(filename + ".meteorcoverage", eval(meteorCoverage));
    localStorage.setItem(filename + ".spacestationsadded", eval(spacestationsAdded));
    localStorage.setItem(filename + ".spacestationcoverage", eval(spaceStationCoverage));
    localStorage.setItem(filename + ".wormholesadded", eval(wormholesAdded));
    localStorage.setItem(filename + ".wormholecoverage", eval(wormholeCoverage));
    localStorage.setItem(filename + ".freightersadded", eval(freightersAdded));
    localStorage.setItem(filename + ".freightercoverage", eval(freighterCoverage));
    localStorage.setItem(filename + ".planetsadded", PlanetsAdded);

    //Sensor Range
    localStorage.setItem(filename + ".sensorcp", sensorCP);

    //Artifacts the player has found
    let tracker = 0;
    for(let i = 0; i < knownArtifacts.length; ++i){
        localStorage.setItem(filename + ".knownartifact" + i + "x", knownArtifacts[i].x);
        localStorage.setItem(filename + ".knownartifact" + i + "y", knownArtifacts[i].y);
        ++tracker;
    }
    localStorage.setItem(filename + ".knownartifactlength", eval(knownArtifacts.length));

    //Map Layout
    if(worldMap === null)
        initializeMap();

    let rows = eval(config.boardHeight);
    let columns = eval(config.boardWidth);
    for(let x = 0; x < columns; ++x){
        for(let y = 0; y < rows; ++y){
            let object = worldMap.cells[x][y];

            if(object !== null) {
                if (object instanceof Freighter) {
                    localStorage.setItem(filename + ".wm" + x + y + "t", "Freighter");
                    localStorage.setItem(filename + ".wm" + x + y + "supplies", object.supplies);

                } else if (object instanceof SpaceStation) {
                    localStorage.setItem(filename + ".wm" + x + y + "t", "SpaceStation");
                    localStorage.setItem(filename + ".wm" + x + y + "ctw", object.chanceToWin);
                    localStorage.setItem(filename + ".wm" + x + y + "atw", object.amountToWin);
                    localStorage.setItem(filename + ".wm" + x + y + "ef", object.entryFee);

                } else if (object instanceof Asteroid) {
                    localStorage.setItem(filename + ".wm" + x + y + "t", "Asteroid");

                } else if (object instanceof Wormhole) {
                    localStorage.setItem(filename + ".wm" + x + y + "t", "Wormhole");

                } else if (object instanceof Meteor) {
                    localStorage.setItem(filename + ".wm" + x + y + "t", "Meteor");

                } else if (object instanceof Planet) {
                    localStorage.setItem(filename + ".wm" + x + y + "t", "Planet");
                    localStorage.setItem(filename + ".wm" + x + y + "cs", eval(object.containsStrongbox));
                    localStorage.setItem(filename + ".wm" + x + y + "rs", eval(object.hasRepairShop));
                    localStorage.setItem(filename + ".wm" + x + y + "ss", eval(object.hasSuppliesShop));
                    localStorage.setItem(filename + ".wm" + x + y + "ppd", eval(object.pricePerDamage));
                    localStorage.setItem(filename + ".wm" + x + y + "pps", eval(object.pricePerSupplies));
                    localStorage.setItem(filename + ".wm" + x + y + "spss", eval(object.suppliesPerStrongboxSearch));
                    localStorage.setItem(filename + ".wm" + x + y + "io", eval(object.inOrbit));
                    localStorage.setItem(filename + ".wm" + x + y + "us", eval(object.usedSensors));
                    localStorage.setItem(filename + ".wm" + x + y + "s", eval(object.searched));
                } else if (object instanceof Eniac){
                    localStorage.setItem(filename + ".wm" + x + y + "t", "Eniac");
                } else {
                    console.log("Faulty object encountered when saving at (" + x + ", " + y + ")");
                }

                localStorage.setItem(filename + ".wm" + x + y + "id", object.id);
                localStorage.setItem(filename + ".wm" + x + y + "img", object.imageSrc);
            }

        }
    }

    //n pass in 90
    //s pass in 270
    //e pass in 0
    //w pass in 180
    localStorage.setItem(filename + ".degree", globalDegree);

    //BadMax
    localStorage.setItem(filename + ".badmaxx", badMax.x);
    localStorage.setItem(filename + ".badmaxy", badMax.y);

    //Reset Input
    document.getElementById("filename").value = "";
    loadSavedSessionsToSelector();
    switchToPage("mainMenu");
}