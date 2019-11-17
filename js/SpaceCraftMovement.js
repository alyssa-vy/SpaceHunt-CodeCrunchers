
//Global varibale for the max size of the map deminsion.
//const max = 128;

//Nested position object within the spacecraft object representing
//its current position at any given time.
const position = {
    /*
    _x: eval(document.UI.xValue.value),  //X coordinate for the position of the spacecraft
    _y: eval(document.UI.xValue.value),  //Y coordinate for the position of the spacecraft
    */
    _x: 0,
    _y: 0,

    //Setter and getter functions since the field for this class
    //are private.
    get x() { return this._x; },
    get y() { return this._y; },
    set x(num) { this._x = eval(num); },
    set y(num) { this._y = eval(num); },

    initPosition() {
        this._x = config.initialLocationX;
        this._y = config.initialLocationY;
        this.updatePoints();
        worldCanvis.repositionPlayer(this._x, this._y);
    },

    moveSpacecraft(angle, distance) {
        let evaledDistance = eval(distance);
        //Error checking to make sure that the values passes in for
        //angle and distance are indeed numbers.
        if(evaledDistance < 1) {
            alert("Error in attempting to move spacecraft.\nPlease provide a positive value for the distance in which you would like to travle.");
            return false;
        }

        if(angle === 0) {
            //User wants to move East.
            if((this._x + evaledDistance) >= config.boardWidth) {
                //User has tried to move off the map.
                this.wormhole();
                alert("Error\nYou have tried to move of the map. You have now been sent through a worm hole.");
            }
            else {
                this._x += evaledDistance;
                worldCanvis.movePlayerEast(evaledDistance);
                checkCollision();
            }
        } else if(angle === 90) {
            //User wants to move North.
            if((this._y - evaledDistance) < 0) {
                //User has tried to move off the map.
                this.wormhole();
                alert("Error\nYou have tried to move of the map. You have now been sent through a worm hole.");
            }
            else {
                this._y -= evaledDistance;
                worldCanvis.movePlayerNorth(evaledDistance);
                checkCollision();
            }
        } else if(angle === 180) {
            //User wants to move West.
            if((this._x - evaledDistance) < 0) {
                //User has tried to move off the map.
                this.wormhole();
                alert("Error\nYou have tried to move of the map. You have now been sent through a worm hole.");
            }
            else {
                this._x -= evaledDistance;
                worldCanvis.movePlayerWest(evaledDistance);
                checkCollision();
            }
        } else if(angle === 270) {
            //User wants to move South.
            if((this._y + evaledDistance) >= config.boardWidth) {
                //User has tried to move off the map.
                this.wormhole();
                alert("Error\nYou have tried to move of the map. You have now been sent through a worm hole.");
            }
            else {
                this._y += evaledDistance;
                worldCanvis.movePlayerSouth(evaledDistance);
                checkCollision();
            }
        } else {
            //User did not specify a valid angle when trying to move.
            alert("Error when attempting to move.\nMust enter a valid angle (0, 90, 180, or 270).");
            return false;
        }

        //Call the functions to subtract energy and supplies as well as
        //make sure those fields are still valid to play the game.
        resources.subtractEnergy(10*evaledDistance);
        resources.subtractSuppliesTwo();
        resources.checkEnergy();
        resources.checkSupplies();

        this.updatePoints();
        return true;    //Movement was executed successfully.
    },

    wormhole() {
        this._x = Math.floor(Math.random() * config.boardWidth);
        this._y = Math.floor(Math.random() * config.boardWidth);
        worldCanvis.repositionPlayer(this._x, this._y);
        checkCollision();
    },

    updatePoints() {
        document.UI.xValue.value = this._x;
        document.UI.yValue.value = this._y;
    }

};
