function loadGame(filename){
    Map = localStorage.getItem(filename + ".map");
    config = localStorage.getItem(filename + ".config", config);
    defaultConfig = localStorage.getItem(filename + ".dconfig", defaultConfig);
    PlanetsAdded = localStorage.getItem(filename + ".pa", PlanetsAdded);
    //resources = localStorage.getItem(filename + ".resources", resources);
    knownArtifacts = localStorage.getItem(filename + ".ka", knownArtifacts);
    sensorCP = localStorage.getItem(filename + ".scp", sensorCP);
    //position = localStorage.getItem(filename + ".pos", position);
}