// TODO Automatically add wormholes on the map boarder
class Map{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.cells = new Array(this.height);
        for (let i = 0; i < this.height; i++)
            this.cells[i] = new Array(this.width);
        for (let j = 0; j < this.height; j++){
            for (let i = 0; i < this.width; i++){
                this.cells[j][i] = null;
            }
        }
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
        return this.cells[y][x] !== null;
    }

    getObjectAtCoordinates(x, y){
        if (this.objectExistsAtPosition)
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
