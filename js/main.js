function main() {
    initConfig();
}

function initGame() {
    worldMap.loadCanvas();
    resources.initResources();
    worldCanvas.updateBoundaries(config.boardWidth, config.boardHeight);
    position.initPosition();
    // randomizeMap();  Commented out until Meteor, Spacestation, and Wormhole object is created
    badMax.setPosition();


    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowRight') {
            position.moveSpacecraft(0, 1);
        }
        if (event.code == 'ArrowDown') {
            position.moveSpacecraft(270, 1);
        }
        if (event.code == 'ArrowLeft') {
            position.moveSpacecraft(180, 1);
        }
        if (event.code == 'ArrowUp') {
            position.moveSpacecraft(90, 1);
        }
    });
    switchToPage("mainGame");
    
    badMax.welcome();
}
