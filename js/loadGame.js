function loadGame(filename){

    Map = localStorage.getItem(filename + ".map");
    PlanetsAdded = localStorage.getItem(filename + ".pa");
    knownArtifacts = localStorage.getItem(filename + ".ka");
    sensorCP = localStorage.getItem(filename + ".scp");

    resources.setEnergy(localStorage.getItem(filename + ".re"));
    resources.setSupplies(localStorage.getItem(filename + ".rs"));
    document.UI.energy.value = resources._energy;
    document.UI.supplies.value = resources._supplies;



    switchToPage("mainGame")
    //config = localStorage.getItem(filename + ".config");
    //resources = localStorage.getItem(filename + ".resources", resources);
    //position = localStorage.getItem(filename + ".pos", position);
}