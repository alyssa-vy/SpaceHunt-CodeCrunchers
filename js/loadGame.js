function loadGame(filename){
    /*
        Loads a previous iteration of the game from local storage based on file name
        after calling the initGame() method.

        Examine the string extension upon the filename for each
        thing saved to see what code is associated with what global variable.
    */
    initGame();
    PlanetsAdded = localStorage.getItem(filename + ".pa");
    knownArtifacts = localStorage.getItem(filename + ".ka");
    sensorCP = localStorage.getItem(filename + ".scp");

    config.boardHeight = localStorage.getItem(filename + ".cfgh");
    config.boardWidth = localStorage.getItem(filename + ".cfgw");
    config.initialLocationX = localStorage.getItem(filename + ".cfgx");
    config.initialLocationY = localStorage.getItem(filename + ".cfgy");
    config.initialEnergy = localStorage.getItem(filename + ".cfge");
    config.initialSupplies = localStorage.getItem(filename + ".cfgs");
    config.initialCredits = localStorage.getItem(filename + ".cfgc");
    config.godMode = localStorage.getItem(filename + ".cfgg");
    config.randomWormholeBehavior = localStorage.getItem(filename + ".cfgwb");
    config.gazetteer = localStorage.getItem(filename + ".cfggz");
    config.gameAdministrator = localStorage.getItem(filename + ".cfga");
    resources.updateUI();

    const rows = config.boardHeight;
    const columns = config.boardWidth;
    Map = new Array(columns);
    for (let x = 0; x < columns; ++x) {
        Map[x] = new Array(rows);
        for (let y = 0; y < rows; ++y) {
            let to_store = localStorage.getItem(filename + ".map" + x + y)
            if(to_store === "null"){
                Map[x][y] = null;
            } else {
                Map[x][y] = to_store;
            }
        }
    }

    position.x = localStorage.getItem(filename + ".posx");
    position.y = localStorage.getItem(filename + ".posy");
    worldCanvas.reposition("player",position.x, position.y);
    position.updatePoints();

    resources.setEnergy(localStorage.getItem(filename + ".re"));
    resources.setSupplies(localStorage.getItem(filename + ".rs"));
    document.UI.energy.value = resources._energy;
    document.UI.supplies.value = resources._supplies;

    switchToPage("mainGame");
}