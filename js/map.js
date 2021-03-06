// TODO Automatically add wormholes on the map boarder
class Map{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.cells = new Array(this.height);
        this.canvasLoaded = false;
        for (let i = 0; i < this.height; i++)
            this.cells[i] = new Array(this.width);
        for (let j = 0; j < this.height; j++){
            for (let i = 0; i < this.width; i++){
                this.cells[j][i] = null;
            }
        }
        worldCanvas.initCanvas();
    }

    /* Add a celestial artifact to the map. Will throw an error if there is an object already at x and y
    id is assigned to this object. This will be the way to manipulate it within the Map object
    */
    addObject(object, x, y){
        if (this.objectExistsAtPosition(x, y))
            throw new ObjectAlreadyExistsAtPostion(`There is an object that already exists at (${x}, ${y})`);
        var newArtifact = object;
        this.cells[y][x] = newArtifact;
        addToGazetteer(object.id, x, y);
        if (this.canvasLoaded && this._isAlwaysVisible(object.id)){
            var element = createElementFromCelestialArtifact(object);
            worldCanvas.addToCanvas(element, x, y);
        }
    }

    /*  Not sure how to do this with worldCanvis and this.cells
    removeObject(id){
        var artifact = document.getElementById(id);
        artifact.remove();
    }
    */

    move(id, angle, magnitude){
        if (angle === 0)
            this.moveWest(id, magnitude);
        else if (angle === 90)
            this.moveNorth(id, magnitude);
        else if (angle === 180)
            this.moveWest(id, magnitude);
        else if (angle === 270)
            this.moveSouth(id, magnitude);
    }

    loadCanvas(){
        worldCanvas.initCanvas();
        for (var i = 0; i < this.width; i++){
            for (var j = 0; j < this.height; j++){
                if (this.objectExistsAtPosition(i, j)){
                    var obj = this.getObjectAtCoordinates(i, j);
                    if (this._isAlwaysVisible(obj.id)){
                        this.makeVisible(i, j);
                    }
                }
            }
        }
        this.canvasLoaded = true;
    }

    // Will make an object visible if it's not already visible. Does nothing if nothing exists at (x, y)
    makeVisible(x, y){
        if (!this.objectExistsAtPosition(x,y)) return;
        var object = this.getObjectAtCoordinates(x, y);
        if (!worldCanvas.objectExistsOnCanvas(object.id)){
            var element = createElementFromCelestialArtifact(object);
            worldCanvas.addToCanvas(element, x, y);
        }
    }

    _isAlwaysVisible(id){
        switch(id){
            case "Celeron":
            case "Xeon":
            case "Ryzen": return true;
                           break;
            default: return false;
        }
    }

    moveNorth(id, magnitude){
        var artifactPosition = this.getObjectCoordinates(id);
        var artifact = this.getObjectAtCoordinates(artifactPostion[0], artifactPosition[1])
        var newXPostion = artifactPostion[0];
        var newYPostion = artifactPosition[1] + magnitude;
        this._throwIfInvalidMovement(newXPostion, newYPostion);
        this.cells[artifactPostion[1]][artifactPostion[0]] = null;
        this.cells[newYPostion][newXPostion];
        worldCanvis.moveNorth(id, magnitude);
    }

    moveSouth(id, magnitude){
        this.moveNorth(id, magnitude * -1);
    }

    moveEast(id, magnitude){
        var artifactPosition = this.getObjectCoordinates(id);
        var artifact = this.getObjectAtCoordinates(artifactPostion[0], artifactPosition[1])
        var newXPostion = artifactPostion[0] + magnitude;
        var newYPostion = artifactPosition[1];
        this._throwIfInvalidMovement(newXPostion, newYPostion);
        this.cells[artifactPostion[1]][artifactPostion[0]] = null;
        this.cells[newYPostion][newXPostion];
        worldCanvis.moveNorth(id, magnitude);
    }

    moveWest(id, magnitude){
        this.moveEast(id, magnitude * -1);
    }

    reposition(id, x, y){
        var artifactPosition = this.getObjectCoordinates(id);
        var artifact = this.getObjectAtCoordinates(artifactPostion[0], artifactPosition[1])
        this._throwIfInvalidMovement(newXPostion, newYPostion);
        this.cells[artifactPostion[1]][artifactPostion[0]] = null;
        this.cells[newYPostion][newXPostion] = artifact;
        worldCanvis.reposition(id, newXPosition, newYPosition);
    }

    _throwIfInvalidMovement(newXPostion, newYPostion){
        if (this.objectExistsAtPosition(newXPostion, newYPostion))
            throw new ObjectAlreadyExistsAtPostion(`Movement would result in collision with object at (${newXPostion}, ${newYPostion})`);
        else if (this.isOutOfBounds(newXPostion, newYPostion)){
            throw new CoordinatesOutOfBounds(`Movement would result in ${id} lying outside of bounds. New postion would be (${newXPostion}, ${newYPostion})`)
        }
    }

    isOutOfBounds(x, y){
        return this.x > this.width || this.y > this.height || this.x < 0 || this.y < 0;
    }

    objectExistsAtPosition(x, y){
        if (this.cells[y][x] != null)
            return true;
        else {
            return false;
        }
        //return this.cells[y][x] !== null;
    }

    getObjectAtCoordinates(x, y){
        if (this.objectExistsAtPosition(x, y))
            return this.cells[y][x];
        return null;
    }

    getObjectCoordinates(id){
        for (var j = 0; j < this.height; j++){
            for (var i = 0; i < this.width; i++){
                var artifact = this.cells[j][i];
                if (artifact !== null){
                    if (artifact.id === id)
                        return [i, j];
                }
            }
        }
    }

    surroundMapWithWormholes(){
        for (var i = 0; i < this.width; i++){
            addWormhole(i, 0, false);
            addWormhole(i, this.height - 1, false);
            this.makeVisible(i, 0);
            this.makeVisible(i, this.height-1);
        }
        for (var j = 1; j < this.height - 1; j++){
            addWormhole(0, j, false);
            addWormhole(this.width - 1, j, false);
            this.makeVisible(0, j);
            this.makeVisible(this.width-1, j);
        }
    }
}

class ObjectAlreadyExistsAtPostion extends Error{
    constructor(message){
        super(message);
        this.name = "ObjectAlreadyExistsAtPostion";
    }
}

class CoordinatesOutOfBounds extends Error{
    constructor(message){
        super(message);
        this.name = "CoordinatesOutOfBounds";
    }
}
