
function saveGame(filename) {
    /*
        Saves the current state of the game to local storage.

        Examine the string extension upon the filename for each
        thing saved to see what code is associated with what global variable.
     */
    let prev = localStorage.getItem("ZZZ");
    if (prev !== null){
        let y = parseInt(prev) + 1;
        localStorage.setItem("ZZZ", y);
        localStorage.setItem("zz" + y, filename);
    } else {
        localStorage.setItem("ZZZ", "1");
        localStorage.setItem("zz1", filename);
    }

    if(Map !== null) {
        const rows = config.boardHeight;
        const columns = config.boardWidth;

        for (let x = 0; x < columns; ++x) {
            for (let y = 0; y < rows; ++y) {
                localStorage.setItem(filename + ".map" + x + y, Map[x][y]);
            }
        }
    }
    localStorage.setItem(filename + ".pa", PlanetsAdded);
    localStorage.setItem(filename + ".ka", knownArtifacts);
    localStorage.setItem(filename + ".scp", sensorCP);

    if (played) {
        localStorage.setItem(filename + ".posx", position.x);
        localStorage.setItem(filename + ".posy", position.y);
    } else {
        localStorage.setItem(filename + ".posx", config.initialLocationX);
        localStorage.setItem(filename + ".posy", config.initialLocationY);
    }

    if(resources._energy !== 0 && resources._supplies !== 0) {
        localStorage.setItem(filename + ".re", resources._energy);
        localStorage.setItem(filename + ".rs", resources._supplies);
    } else {
        localStorage.setItem(filename + ".re", defaultConfig.initialEnergy);
        localStorage.setItem(filename + ".rs", defaultConfig.initialSupplies);
    }

    if(config.boardWidth !== 0) {
        localStorage.setItem(filename + ".cfgw", config.boardWidth);
        localStorage.setItem(filename + ".cfgh", config.boardHeight);
        localStorage.setItem(filename + ".cfgx", config.initialLocationX);
        localStorage.setItem(filename + ".cfgy", config.initialLocationY);
        localStorage.setItem(filename + ".cfge", config.initialEnergy);
        localStorage.setItem(filename + ".cfgs", config.initialSupplies);
        localStorage.setItem(filename + ".cfgc", config.initialCredits);
        localStorage.setItem(filename + ".cfgg", config.godMode);
        localStorage.setItem(filename + ".cfgwb", config.randomWormholeBehavior);
        localStorage.setItem(filename + ".cfggz", config.gazetteer);
        localStorage.setItem(filename + ".cfga", config.gameAdministrator);
    } else {
        localStorage.setItem(filename + ".cfgw", defaultConfig.boardWidth);
        localStorage.setItem(filename + ".cfgh", defaultConfig.boardHeight);
        localStorage.setItem(filename + ".cfgx", defaultConfig.initialLocationX);
        localStorage.setItem(filename + ".cfgy", defaultConfig.initialLocationY);
        localStorage.setItem(filename + ".cfge", defaultConfig.initialEnergy);
        localStorage.setItem(filename + ".cfgs", defaultConfig.initialSupplies);
        localStorage.setItem(filename + ".cfgc", defaultConfig.initialCredits);
        localStorage.setItem(filename + ".cfgg", defaultConfig.godMode);
        localStorage.setItem(filename + ".cfgwb", defaultConfig.randomWormholeBehavior);
        localStorage.setItem(filename + ".cfggz", defaultConfig.gazetteer);
        localStorage.setItem(filename + ".cfga", defaultConfig.gameAdministrator);
    }
    document.getElementById("filename").value = "";
    loadSavedSessionsToSelector();
    switchToPage("mainMenu");
}