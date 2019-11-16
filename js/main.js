function main() {
    initConfig();
    position.initPosition();
}

function initGame() {
    resources.initResources();
    position.initPosition();
    m = new MapClass(config.boardWidth, config.boardHeight);

    c = new worldCanvis(config.boardWidth, config.boardHeight);
    // This code to bind keys is temporary. Don't rely on it being here for long.
    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowRight') {
            c.moveEast("player", 1);
        }
        if (event.code == 'ArrowDown') {
            c.moveSouth("player", 1);
        }
        if (event.code == 'ArrowLeft') {
            c.moveWest("player", 1);
        }
        if (event.code == 'ArrowUp') {
            c.moveNorth("player", 1);
        }
    }.bind(c));
    position.initPosition();
    switchToPage("mainGame");
}
