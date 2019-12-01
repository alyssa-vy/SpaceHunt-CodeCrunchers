/*
    While normal game object movement is rather simple, the player moves a bit differently and rather unintuitively.
    Normal gameplay gives the illusion that the player travel around the world, but in fact it's the world traveling around the player.

    The top left of the viewport is the origin, where positive x is west (in pixels) and positive y is south (in pixels).
    Yes, the positive y direction is DOWNWARDS not UPWARDS
    gameWorld.style.left corresponds to the x position, gameWorld.style.top corresponds to the y position.

    This is how rasterised coordinates work.

    EX.
    When moving eastward, the world must actually travel westward.
    To move the world westward, DECREMENT gameWorld.style.left
    That is because we are shifting gameworld's top left corner X pixels LEFT of the origin
    Once again, the origin is the top left corner of the viewport

    EX.
    To move the world eastward (and thus, the player westward), INCREMENT gameWorld.style.left
    That is because we are shifting gameworld's top left corner X pixels RIGHT of the origin

    EX.
    To move the world south (and thus, the player north), INCREMENT gameWorld.style.top
    That is because we are shifting gameworld's top left corner Y pixels DOWN from the origin

    EX.
    To move the world north (and thus, the player south), DECREMENT gameWorld.style.top
    That is because we are shifting gameworld's top left corner Y pixels UP from the origin
*/

const worldCanvas = {
    initCanvas() {
        this.viewPortWidth = this._pxToInt(window.getComputedStyle(document.getElementById("viewport")).width) - 50;
        this.viewPortHeight = this._pxToInt(window.getComputedStyle(document.getElementById("viewport")).height) - 50;
        this.pxPerCell = 50;  // The width & height of one unit cell
        this.rows = config.boardHeight;
        this.cols = config.boardWidth;
        this.pxFromLeftSide = 0;
        this.pxFromTopSide = 0;
        this.gameWorld = document.getElementById("gameWorld");
        this.gameWorld.style.width = this.rows * this.pxPerCell + this.viewPortWidth + "px";
        this.gameWorld.style.height = this.cols * this.pxPerCell + this.viewPortHeight + "px";
        this.repositionPlayer(0, 0);
    },

    addToCanvas(element, x, y){
        element.classList.add("cellObject");
        this.gameWorld.appendChild(element);
        this.reposition(element.id, x, y);
    },

    updateImage(id, imgSrc){
        document.getElementById(id).src = imgSrc;
    },

    setRotation(id, degree){
        switch(degree){
            case 0: degree = 90
                    break;
            case 90: degree = 0;
                    break;
            case 180: degree = 270;
                    break;
            case 270: degree = 180;
                    break;
        }; // Converts from mathematical degrees to CSS degrees
        var element = document.getElementById(id);
        element.style.transform = `translate(-50%, -50%) rotate(${degree}deg)`;
    },

    reposition(id, x, y){
        if (id === "player"){
            this.repositionPlayer(x, y);
        }
        else{
            var element = document.getElementById(id);
            var px = this._translateObjectCoordsToPx(x, y);
            element.style.left = px[0]+ "px";
            element.style.top = px[1] + "px";
            element.boardXPos = x;
            element.boardYPos = y;
        }
    },

    repositionPlayer(x, y){
        var px = this._translatePlayerCoordsToPx(x,y);
        var newLeftValue = px[0];
        var newTopValue = px[1];
        this.pxFromLeftSide = newLeftValue;
        this.pxFromTopSide = newTopValue;
        this.gameWorld.style.left = newLeftValue + "px";
        this.gameWorld.style.top = newTopValue + "px";
    },

    moveEast(id, magnitude){
        if (id === "player"){
            this.movePlayerEast(magnitude);
        }
        else{
            // Shift an element on the gameWorld from origin
            var element = document.getElementById(id);
            this.reposition(id, element.boardXPos + magnitude, element.boardYPos)
        }
    },

    moveWest(id, magnitude){
        this.moveEast(id, magnitude * -1);
    },

    movePlayerEast(magnitude){
        // Shift entire gameWorld from origin
        // We move the world in negative magnitude direction to give the illusion that the player moved East
        var newLeftValue = this.pxFromLeftSide + this.pxPerCell * magnitude * -1;
        this.pxFromLeftSide = newLeftValue;
        this.gameWorld.style.left = this.pxFromLeftSide + "px";
    },

    movePlayerWest(magnitude){
        this.movePlayerEast(magnitude * -1);
    },

    moveSouth(id, magnitude){
        if (id === "player"){
            this.movePlayerSouth(magnitude);
        }
        else{
            // Shift an element on the gameWorld from origin
            var element = document.getElementById(id);
            this.reposition(id, element.boardXPos + magnitude, element.boardYPos)
        }
    },

    moveNorth(id, magnitude){
        this.moveSouth(id, magnitude * -1)
    },

    movePlayerSouth(magnitude){
        // Shift entire gameWorld from origin
        // We move the world in negative magnitude direction to give the illusion that the player moved South
        var newTopValue = this.pxFromTopSide + this.pxPerCell * magnitude * -1;
        this.pxFromTopSide = newTopValue;
        this.gameWorld.style.top = this.pxFromTopSide + "px";
    },

    movePlayerNorth(magnitude){
        this.movePlayerSouth(magnitude * -1);
    },

    objectExistsOnCanvas(id){
        return document.getElementById(id) !== null;
    },

    _pxToInt(pixelValue){
        if (pixelValue === undefined || pixelValue === "")
            return 0;
        var num = pixelValue.substring(0, pixelValue.length - 2);
        return parseInt(num);
    },

    _translatePlayerCoordsToPx(x, y){
        x = -(x * this.pxPerCell);
        y = -(y * this.pxPerCell);
        return [x, y];
    },
    _translateObjectCoordsToPx(x, y){
        x = x * this.pxPerCell + this.viewPortWidth / 2;
        y = y * this.pxPerCell + this.viewPortHeight / 2;
        return [x, y]
    }
}

function createElementFromCelestialArtifact(artifact){
    var element = document.createElement("img");
    element.id = artifact.id;
    element.classList.add("cellObject");
    element.src = artifact.imageSrc;
    return element;
}
