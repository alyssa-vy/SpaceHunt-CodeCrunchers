function loadGame(filename){
    /*
        Loads a previous iteration of the game from local storage based on file name
        after calling the initGame() method.

        Examine the string extension upon the filename for each
        thing saved to see what code is associated with what global variable.
    */

    let width = eval(localStorage.getItem(filename + ".boardwidth"));
    let height = eval(localStorage.getItem(filename + ".boardheight"));

    //Config
    config.boardWidth = width;
    config.boardHeight = height;
    config.godMode = eval(localStorage.getItem(filename + ".godmode"));
    config.randomWormholeBehavior = eval(localStorage.getItem(filename + ".rwb"));
    config.gazetteer = eval(localStorage.getItem(filename + ".gazetteer"));
    document.getElementById("log").value = localStorage.getItem(filename + ".log");
    config.gameAdministrator = eval(localStorage.getItem(filename + ".gameadmin"));
    config.initialLocationX = eval(localStorage.getItem(filename + ".ix"));
    config.initialLocationY = eval(localStorage.getItem(filename + ".iy"));

    //Configuration Info
    asteroidsAdded = eval(localStorage.getItem(filename + ".asteroidsadded"));
    asteroidCoverage = eval(localStorage.getItem(filename + ".asteroidcoverage"));
    meteorsAdded = eval(localStorage.getItem(filename + ".meterosadded"));
    meteorCoverage = eval(localStorage.getItem(filename + ".meteorcoverage"));
    spacestationsAdded = eval(localStorage.getItem(filename + ".spacestationsadded"));
    spaceStationCoverage = eval(localStorage.getItem(filename + ".spacestationcoverage"));
    wormholesAdded = eval(localStorage.getItem(filename + ".wormholesadded"));
    wormholeCoverage = eval(localStorage.getItem(filename + ".wormholecoverage"));
    freightersAdded = eval(localStorage.getItem(filename + ".freightersadded"));
    freighterCoverage = eval(localStorage.getItem(filename + ".freightercoverage"));
    PlanetsAdded = localStorage.getItem(filename + ".planetsadded");

    //Resources
    canMove = eval(localStorage.getItem(filename + ".canmove"));
    resources.setMaxEnergy(eval(localStorage.getItem(filename+".maxenergy")));
    resources.setMaxSupplies(eval(localStorage.getItem(filename + ".maxsupplies")));
    resources.setMaxHealth(eval(localStorage.getItem(filename + ".maxhealth")));
    resources._initd = eval(localStorage.getItem(filename + ".initd"));
    resources._hasStrongbox = eval(localStorage.getItem(filename+".hasbox"));
    resources._isDamaged = eval(localStorage.getItem(filename + ".dmg"));

    //Active Resources
    position._x = eval(localStorage.getItem(filename + ".posx"));
    position._y = eval(localStorage.getItem(filename + ".posy"));
    resources.setEnergy(eval(localStorage.getItem(filename + ".energy")));
    resources.setSupplies(eval(localStorage.getItem(filename + ".supplies")));
    resources.setCredits(eval(localStorage.getItem(filename + ".credits")));
    resources.setHealth(eval(localStorage.getItem(filename + ".health")));


    //Sensor Range
    sensorCP = eval(localStorage.getItem(filename +".sensorcp"));

    //Map
    // Side note : x and y are intentionally flipped on addX(y, x)
    worldMap = new Map(width, height);
    for(let x = 0; x < width; ++x) {
        for (let y = 0; y < height; ++y) {
            let type = localStorage.getItem(filename + ".wm" + x + y + "t");
            switch (type) {
                case "Freighter":
                    let supplies = eval(localStorage.getItem(filename + ".wm" + x + y + "supplies"));
                    addFreighter(y, x, supplies, false);
                    break;
                case "SpaceStation":
                    let ctw = eval(localStorage.getItem(filename + ".wm" + x + y + "ctw"));
                    let atw = eval(localStorage.getItem(filename + ".wm" + x + y + "atw"));
                    let ef = eval(localStorage.getItem(filename + ".wm" + x + y + "ef"));
                    addSpaceStation(y, x, atw, ctw, ef, false);
                    break;
                case "Asteroid":
                    addAsteroid(y, x, false);
                    break;
                case "Wormhole":
                    addWormhole(y, x, false);
                    break;
                case "Meteor":
                    addMeteor(y, x, false);
                    break;
                case "Planet":
                    let name = localStorage.getItem(filename + ".wm" + x + y + "id");
                    addPlanet(y, x, name, false);
                    break;
            }
            if (worldMap.cells[x][y] !== null && !worldMap.cells[x][y] instanceof Planet) {
                worldMap.cells[x][y].id = localStorage.getItem(filename + ".wm" + x + y + "id");
            }
        }
    }

    //Add Eniac
    worldMap.addObject(new Eniac("Eniac", "img/eniac.png"), 1, 1);
    worldMap.makeVisible(1, 1);

    //Add known artifacts and make them visible
    let length = eval(localStorage.getItem(filename + ".knownartifactlength"));
    for (let i = 0; i < length; ++i) {
        let x = eval(localStorage.getItem(filename + ".knownartifact" + i + "x"));
        let y = eval(localStorage.getItem(filename + ".knownartifact" + i + "y"));

        toAdd = new celestialArtifact(worldMap.getObjectAtCoordinates(x,y), x, y);
        knownArtifacts.push(toAdd);
        worldMap.makeVisible(x, y);
    }

    //Reposition badmax
    badMax.x = eval(localStorage.getItem(filename + ".badmaxx"));
    badMax.y = eval(localStorage.getItem(filename + ".badmaxy"));

    //Make surrounding wormholes visible
    for (var i = 0; i < width; i++){
        worldMap.makeVisible(i, 0);
        worldMap.makeVisible(i, height-1);
    }
    for (var j = 1; j < height - 1; j++){
        worldMap.makeVisible(0, j);
        worldMap.makeVisible(width-1, j);
    }

    //Reposition the player and make them face the right way.
    worldCanvas.repositionPlayer(position.x, position.y);
    let deg = eval(localStorage.getItem(filename + ".degree"));
    if(deg !== null)
        worldCanvas.setRotation('player', deg);

    //Make sure the GUI is updated
    resources.updateUI();
    position.updateFormCPs();

    //Mark the global state as played
    played = true;
    switchToPage("mainGame");
}