//Global vairbale for the max size of the map deminsion.
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
        //Error checking to make sure that the values passes in for 
        //angle and distance are indeed numbers.
        if(typeof angle !== 'number' || typeof distance !== 'number' || distance < 1) {
            alert("Error in attempting to move spacecraft.\nPlease provide valid values for the angle and distance when attempting to move.");
            return false;
        }

        if(angle === 0) {
            if((x + distance) >= max) {
                //Do call a wormhole function
            }
        }


        /*alert("Move Space Craft");
            checkEnergy();
            checkSupplies();*/
    }
}
