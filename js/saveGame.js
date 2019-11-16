function saveGame(filename) {
    /*
        Example for persistent state
        localStorage.setItem("Map", Map);
        let testMap = localStorage.getItem("Map");
     */

    localStorage.setItem(filename + ".map", Map);
    localStorage.setItem(filename + ".config", config);
    localStorage.setItem(filename + ".dconfig", defaultConfig);
    localStorage.setItem(filename + ".pa", PlanetsAdded);
    localStorage.setItem(filename + ".resources", resources);
    localStorage.setItem(filename + ".ka", knownArtifacts);
    localStorage.setItem(filename + ".scp", sensorCP);
    localStorage.setItem(filename + ".pos", position);

}