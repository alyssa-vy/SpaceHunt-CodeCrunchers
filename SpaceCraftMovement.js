
//Global varibale for the max size of the map deminsion.
const max = 128;

//Nested position object within the spacecraft object representing
//its current position at any given time.
const position = {
    _x: 0,  //X coordinate for the position of the spacecraft
    _y: 0,  //Y coordinate for the position of the spacecraft

    //Setter and getter functions since the field for this class
    //are private.
    get x() { return this._x; },
    get y() { return this._y; },
    set x(num) { this._x = num; },
    set y(num) { this._y = num; },

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
            if((this._x + evaledDistance) >= max) {
                //User has tried to move off the map.
                this.wormhole();
            }
            else {
                this._x += evaledDistance;
            }
        } else if(angle === 90) {
            //User wants to move North.
            if((this._y + evaledDistance) >= max) {
                //User has tried to move off the map.
                this.wormhole();
            }
            else {
                this._y += evaledDistance;
            }
        } else if(angle === 180) {
            //User wants to move West.
            if((this._x - evaledDistance) < 0) {
                //User has tried to move off the map.
                this.wormhole();
            }
            else {
                this._x -= evaledDistance;
            }
        } else if(angle === 270) {
            //User wants to move South.
            if((this._y - evaledDistance) < 0) {
                //User has tried to move off the map.
                this.wormhole();
            }
            else {
                this._y -= evaledDistance;
            }
        } else {
            //User did not specify a valid angle when trying to move.
            alert("Error when attempting to move.\nMust enter a valid angle (0, 90, 180, or 270).");
            return false;
        }

        //Call the functions to subtract energy and supplies as well as
        //make sure those fields are still valid to play the game.
        resources.subtractEnergy(10*evaledDistance);
        resources.subtractSupplies();
        resources.checkEnergy();
        resources.checkSupplies();

        document.UI.xValue.value = this._x;
        document.UI.yValue.value = this._y;
        return true;    //Movement was executed successfully.
    },

    wormhole() {
        this._x = Math.floor(Math.random() * max);
        this._y = Math.floor(Math.random() * max);
    }

};
