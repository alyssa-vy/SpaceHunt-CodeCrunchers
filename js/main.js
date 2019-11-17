function main() {
    initConfig();
}

function initGame() {
    resources.initResources();
    worldCanvis.initCanvis();
    position.initPosition();
    m = new MapClass(config.boardWidth, config.boardHeight);


    // baddy code and binds are only temporary. They won't be here for long.

    baddy = document.createElement("img");  // All canvas items are images
    baddy.src = "img/letter_b.jpg";  // Add an image asset
    baddy.classList.add("enemy");   // Describe what type of object this is
    baddy.id = "baddy-1";  // All canvas objects require an id. If you don't give it an id, the canvas can't retrieve it
    worldCanvis.addToCanvas(baddy, 0, 0);  // Send the element to canvas, which will put it in the corresponding coordinates

    baddy2 = document.createElement("img");
    baddy2.src = "img/letter_b.jpg";
    baddy2.classList.add("enemy");
    baddy2.id = "baddy-2";  // All Ids must be unique
    worldCanvis.addToCanvas(baddy2, 10, 0);

    worldCanvis.movePlayerNorth(1);  // Move the player North by 1 cell
    worldCanvis.moveNorth("player", 1);  // This is equivalent to the above call
    worldCanvis.moveWest("baddy-1",1);  // Move baddy-1 one unit west
    worldCanvis.moveSouth("baddy-2",10);  // Move baddy-2 south 10 units
    worldCanvis.updateImage("player", "img/letter_c.jpg")  // You can update the graphic of any element on the canvas,
                                                 // This may be useful for simple animation

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
    }.bind());
    switchToPage("mainGame");
}
