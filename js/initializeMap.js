var worldMap = null;

function prepareArtifactPlacement() {
    initializeMap();
    switchToPage("artifactPlacement");
}

function initializeMap(){
    if (worldMap === null || config.boardWidth !== worldMap.width || config.boardHeight !== worldMap.height) {
        worldMap = new Map(config.boardWidth, config.boardHeight);
        worldMap.surroundMapWithWormholes();
    }
}
