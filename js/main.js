function main() {
    initConfig();
    position.initPosition();
}

function initGame() {
    resources.initResources();
    position.initPosition();
    m = new MapClass(config.boardWidth, config.boardHeight);

    c = new worldCanvis(config.boardWidth, config.boardHeight);

    // baddy code and binds are only temporary. They won't be here for long.

    baddy = document.createElement("img");
    baddy.src = "img/letter_b.jpg";
    baddy.classList.add("enemy");
    baddy.id = "baddy-1";
    c.addToCanvas(baddy, 0, 0);

    baddy2 = document.createElement("img");
    baddy2.src = "img/letter_b.jpg";
    baddy2.classList.add("enemy");
    baddy2.id = "baddy-2";
    c.addToCanvas(baddy2, 0, 14);

    c.moveWest("baddy-1",1);
    c.moveSouth("baddy-2",1);

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
