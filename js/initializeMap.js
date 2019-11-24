var worldMap = null;

function initializeMap() {
    worldMap = new Map(config.boardWidth, config.boardHeight);
    switchToPage("artifactPlacement");
    return worldMap;
}
