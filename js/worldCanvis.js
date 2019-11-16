/*
    While normal game object movement is rather easy to understand, the player moves a bit differently and rather unintuitively.
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

class worldCanvis {
    constructor(rows, cols) {
        this.pxPerCell = 50;  // The width & height of one unit cell
        this.rows = rows;
        this.cols = cols;
        this.pxFromLeftSide = 0;
        this.pxFromTopSide = 0;
        this.viewPortWidth = this._pxToInt(window.getComputedStyle(document.getElementById("viewport")).width);
        this.viewPortHeight = this._pxToInt(window.getComputedStyle(document.getElementById("viewport")).height);
        this.gameWorld = document.getElementById("gameWorld");
        this.gameWorld.style.width = this.rows * this.pxPerCell + "px";
        this.gameWorld.style.height = this.cols * this.pxPerCell + "px";
        this.gameWorld.style.left = this.pxFromLeftSide + "px";
        this.gameWorld.style.top = this.pxFromTopSide + "px";
    }

    addToCanvas(element, x, y){
        element.classList.add("cellObject");
        var xPx = x * this.pxPerCell
        var yPx = y * this.pxPerCell
        this.gameWorld.appendChild(element);
        element.style.left = xPx + "px";
        element.style.top = yPx + "px";
    }

    reposition(id, x, y){
        if (id === "player"){
            this.repositionPlayer(x, y);
        }
        else{
            var element = document.getElementById(id);
            var newLeftValue = x * this._pxToInt(element.style.left);
            var newTopValue = y * this._pxToInt(element.style.top);
            if (this._withinEastWestBoundaries(newLeftValue) && this._withinNorthSouthBoundaries(newTopValue)){
                element.style.left = newLeftValue + "px";
                element.style.top = newTopValue + "px";
            }
            else{
                var errorMessage = x + " or " + y + " out of canvas range [0," + this.rows + "]";
                var e = new ValueOutsideCanvasBoundaries(errorMessage);
                throw e;
            }
        }
    }

    repositionPlayer(x, y){
        var newLeftValue = x * this.pxPerCell;
        var newTopValue = y * this.pxPerCell;
        if (this._playerWithinEastWestBoundaries(newLeftValue) && this._playerWithinNorthSouthBoundaries(newTopValue)){
            this.pxFromLeftSide = newLeftValue;
            this.pxFromTopSide = newTopValue;
            this.gameWorld.style.left = newLeftValue + "px";
            this.gameWorld.style.top = newTopValue + "px";
        }
        else{
            var errorMessage = x + " or " + y + " out of canvas range [0," + this.rows + "]";
            var e = new ValueOutsideCanvasBoundaries(errorMessage);
            throw e;
        }
    }

    moveEast(id, magnitude){
        if (id === "player"){
            this.movePlayerEast(magnitude);
        }
        else{
            // Shift an element on the gameWorld from origin
            var element = document.getElementById(id);
            var oldLeftValue = this._pxToInt(element.style.left);
            var newLeftValue = oldLeftValue + this.pxPerCell * magnitude;
            if (this._withinEastWestBoundaries(newLeftValue)){
                element.style.left = newLeftValue + "px";
            }
        }
    }

    moveWest(id, magnitude){
        this.moveEast(id, magnitude * -1);
    }

    movePlayerEast(magnitude){
        // Shift entire gameWorld from origin
        // We move the world in negative magnitude direction to give the illusion that the player moved East
        var newLeftValue = this.pxFromLeftSide + this.pxPerCell * magnitude * -1;
        if (this._playerWithinEastWestBoundaries(newLeftValue)){
            this.pxFromLeftSide = newLeftValue;
            this.gameWorld.style.left = this.pxFromLeftSide + "px";
        }
    }

    movePlayerWest(magnitude){
        this.movePlayerEast(magnitude * -1);
    }

    moveSouth(id, magnitude){
        if (id === "player"){
            this.movePlayerSouth(magnitude);
        }
        else{
            // Shift an element on the gameWorld from origin
            var element = document.getElementById(id);
            var oldTopValue = this._pxToInt(element.style.top);
            var newTopValue = oldTopValue + this.pxPerCell * magnitude;
            if (this._withinNorthSouthBoundaries(newTopValue)){
                element.style.top = newTopValue + "px";
            }
        }
    }

    moveNorth(id, magnitude){
        this.moveSouth(id, magnitude * -1)
    }

    movePlayerSouth(magnitude){
        // Shift entire gameWorld from origin
        // We move the world in negative magnitude direction to give the illusion that the player moved South
        var newTopValue = this.pxFromTopSide + this.pxPerCell * magnitude * -1;
        if (this._playerWithinNorthSouthBoundaries(newTopValue)){
            this.pxFromTopSide = newTopValue;
            this.gameWorld.style.top = this.pxFromTopSide + "px";
        }
    }

    movePlayerNorth(magnitude){
        movePlayerSouth(magnitude * -1);
    }

    _playerWithinEastWestBoundaries(number){
        var upperBound = 300;
        var lowerBound = -1 * this.rows * this.pxPerCell + this.viewPortWidth / 2;
        return number >= lowerBound && number <= upperBound
    }

    _playerWithinNorthSouthBoundaries(number){
        var upperBound = 300;
        var lowerBound = -1 * this.cols * this.pxPerCell + this.viewPortHeight / 2;
        return number >= lowerBound && number <= upperBound;
    }

    _withinEastWestBoundaries(number){
        var upperBound = 0;
        var lowerBound = this.cols * this.pxPerCell;
        return number >= lowerBound && number <= upperBound;
    }

    _withinNorthSouthBoundaries(number){
        var upperBound = 0;
        var lowerBound = this.rows * this.pxPerCell;
        return number >= lowerBound && number <= upperBound;
    }

    _pxToInt(pixelValue){
        if (pixelValue === undefined || pixelValue === "")
            return 0;
        var num = pixelValue.substring(0, pixelValue.length - 2);
        return parseInt(num);
    }
}

function ValueOutsideCanvasBoundaries(message){
    this.name = "ValueOutsideCanvasBoundaries";
    this.message = (message || "");
}
ValueOutsideCanvasBoundaries.prototype = Error.prototype;
