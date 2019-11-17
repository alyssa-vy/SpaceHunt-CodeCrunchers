function saveGame(filename) {
    /*
        Example for persistent state
        localStorage.setItem("Map", Map);
        let testMap = localStorage.getItem("Map");
     */

    localStorage.setItem(filename + ".map", Map);
    localStorage.setItem(filename + ".pa", PlanetsAdded);
    localStorage.setItem(filename + ".ka", knownArtifacts);
    localStorage.setItem(filename + ".scp", sensorCP);

    localStorage.setItem(filename + ".posx", position.x);
    localStorage.setItem(filename + ".posy", position.y);

    localStorage.setItem(filename + ".re", resources._energy);
    localStorage.setItem(filename + ".rs", resources._supplies);

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
    switchToPage("mainMenu");
}