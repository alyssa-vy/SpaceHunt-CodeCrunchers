function main() {
    initConfig();
    worldCanvis.initCanvis();
}

function initGame() {
    resources.initResources();
    position.initPosition();
    m = new MapClass(config.boardWidth, config.boardHeight);


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
}
