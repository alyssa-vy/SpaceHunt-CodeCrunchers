/*
    While normal game object movement is rather easy to understand, the player moves a bit differently and rather unintuitively.
    Normal gameplay gives the illusion that the player is traveling, but in fact it's the world traveling around the player.

    gameWorld.style.left is the amount of pixels away of the west side of the viewport.
    Think of the west side of the viewport as an x coordinate. As we increase the x coordinate by n amount,
    the gameworld's border shifts to the right n amount.

    You can also think of the viewport's north side as a backwards y coordinate. As we increase the y coordinate by n amount,
    the gameworld's border shifts downwards (not upwards!) by n amount.

    This is how rasterised coordinates work.

    EX.
    When moving eastward, the world must actually travel westward.
    To move the world westward, DECREMENT gameWorld.style.left
    That is because we are shifting gameworld's border X pixels LEFT of the east side of the viewport.

    EX.
    To move the world eastward (and thus, the player westward), INCREMENT gameWorld.style.left
    That is because we are moving the world X pixels RIGHT from the LEFT side of the viewport

    EX.
    To move the world south (and thus, the player north), INCREMENT gameWorld.style.top
    That is because we are moiving the world Y pixels DOWN from the TOP side of the viewport

    EX.
    To move the world north (and thus, the player south), DECREMENT gameWorld.style.top
    That is because we are moving the world Y pixels UP the TOP side of the viewport
*/

class worldCanvis {
    constructor(rows, cols) {
        // Width and height are integers representing the amount of cells the map contains
        this.pxPerCell = 50;  // The width & height of one unit cell
        this.rows = rows;
        this.cols = cols;
        this.viewPortWidth = this._pxToInt(window.getComputedStyle(document.getElementById("viewport")).width);
        this.viewPortHeight = this._pxToInt(window.getComputedStyle(document.getElementById("viewport")).height);
        this.gameWorld = document.getElementById("gameWorld");
        this.gameWorld.style.width = rows * this.pxPerCell + "px";
        this.gameWorld.style.height = cols * this.pxPerCell + "px";
        this.pxFromLeftSide = 0;
        this.pxFromTopSide = 0;
        this.gameWorld.style.left = this.pxFromLeftSide + "px";
        this.gameWorld.style.top = this.pxFromTopSide + "px";
    }

    addToCanvas(element, x, y){
        element.classList.add("cellObject");
        var xPx = x * this.pxPerCell
        var yPx = y * this.pxPerCell
        this.gameWorld.appendChild(element);
        element.style.left = xPx;
        element.style.top = yPx;
        // TODO Do I need to transform: translate it?
    }

    moveWest(id, magnitude){
        if (id === "player"){
            // Shift entire gameWorld
            var newLeftValue = this.pxFromLeftSide + this.pxPerCell * magnitude;
            console.log("Old left:" + this.pxFromLeftSide)
            console.log("New left:" + newLeftValue)
            if (this._withinEastWestBoundaries(newLeftValue)){
                this.pxFromLeftSide = newLeftValue;
                this.gameWorld.style.left = this.pxFromLeftSide + "px";
            }
        }
        else{
            // Shift an element on the gameWorld
            var element = document.getElementById("id");
            var oldLeftValue = _pxToInt(element.style.left);
            var newLeftValue = oldLeftValue + this.pxPerCell * magnitude;
            if (this._withinNorthSouthBoundaries(newLeftValue)){
                element.style.left = newLeftValue + "px";
            }
        }
    }

    moveEast(id, magnitude){
        this.moveWest(id, magnitude * -1);
    }

    moveNorth(id, magnitude){
        if (id === "player"){
            // Shift entire gameWorld
            var newTopValue = this.pxFromTopSide + this.pxPerCell * magnitude;
            console.log("Old top:" + this.pxFromTopSide)
            console.log("New top:" + newTopValue)
            if (this._withinNorthSouthBoundaries(newTopValue)){
                this.pxFromTopSide = newTopValue;
                this.gameWorld.style.top = this.pxFromTopSide + "px";
            }
        }
        else{
            // Shift an element on the gameWorld
            var element = document.getElementById("id");
            var oldTopValue = _pxToInt(element.style.top);
            var newTopValue = oldTopValue + this.pxPerCell * magnitude;
            if (this._withinNorthSouthBoundaries(newTopValue)){
                element.style.top = newTopValue + "px";
            }
        }
    }

    moveSouth(id, magnitude){
        this.moveNorth(id, magnitude * -1)
    }

    _withinEastWestBoundaries(number){
        var upperBound = 300;
        var lowerBound = -1 * this.rows * this.pxPerCell
        return number >= lowerBound && number <= upperBound
    }

    _withinNorthSouthBoundaries(number){
        var upperBound = 300;
        var lowerBound = -1 * this.cols * this.pxPerCell
        return number >= lowerBound && number <= upperBound
    }

    _pxToInt(pixelValue){
        if (pixelValue === undefined || pixelValue === "")
            return 0;
        var num = pixelValue.substring(0, pixelValue.length - 2);
        return parseInt(num);
    }
}
