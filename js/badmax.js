//File for the implementation of the Bad Max character and his
//corresponding functionality.

const badMax = {

    _x: 0,
    _y: 0,
    id: "BadMax",
    imageSrc: "img/badmax.png",

    //Setter and getter functions since the field for this class
    //are private.
    get x() { return this._x; },
    get y() { return this._y; },
    set x(num) { this._x = eval(num); },
    set y(num) { this._y = eval(num); },


    setPosition() {
        this._x = Math.floor(Math.random() * config.boardWidth);
        this._y = Math.floor(Math.random() * config.boardWidth);
        worldCanvas.reposition(this.id, this._x, this._y);
    },


    //A welcome function that alerts a message to the player when the
    //game starts up informing them that he has stolen the KocaKola
    //recipe and that he has hidden it for the user to find.
    welcome() {
        alert("I am Bad Max, and I have stolen the KocaKola recipe from Eniac. Good luck finding it hahahahahah\n");
    },

    //Called when the user is attacked by BadMax and their CPs are equal
    interact() {
        let prob = Math.floor(Math.random() * 10);

        if(prob < 5) {
            alert("You have been attacked by Bad Max, but you and your crew have fought him off!\n");
        }

        else if(prob < 7) {
            if(config.godMode === false) {
                alert("You have been attacked by Bad Max and they have blown up your ship... The game is now over\n");
                gameOver();
                return;
            }

            alert("You have been attacked by Bad Max but god mode has saved you from him blwoing up your ship!\n");
        }

        else {
            alert("You have been attacked by Bad Max, him and his crew have stolen half your credits and supplies!\n");
            resources.subtractSupplies(Math.floor(eval(resources.supplies)/2));
            resources.subtractCredits(Math.floor(eval(resources.credits)/2));
        }

        this.setPosition();
    },

    //A function that helps get the CPs of badMax closer to that of the user's
    chaseDown(x, y) {
        //First check to see if the user has flown in the same CP as
        //Bad Max was already residing in.
        if(this._x === x && this._y === y) {
            this.interact();
            return;
        }

        let degreeX = -1;
        let degreeY = -1;

        //Then get his X and Y coordinates closer to that of the users.
        if(this._x !== x)
        {
            degreeX = this.getXCloser(x);
        }
        if(this._y !== y)
        {
            degreeY = this.getYCloser(y);
        }

        //Now based on the return code, figure out which way to
        //position the rotation of bad max by figuring out if he is
        //farther from the user on the x or y coordinate.
        if(degreeX === -1) {
            worldCanvas.setRotation(this.id, degreeY);
        }
        
        else if(degreeY === -1) {
            worldCanvas.setRotation(this.id, degreeX);
        }

        else {
            let xDiff = Math.abs(x - this._x);
            let yDiff = Math.abs(y - this._y);

            if(xDiff >= yDiff) {
                worldCanvas.setRotation(this.id, degreeX);
            }
            else {
                worldCanvas.setRotation(this.id, degreeY);
            }

        }

        //If after the advancement their CPs match, attack.
        if(this._x === x && this._y === y) {
            this.interact();
        }
    },

    //Used by the chasedown function to specifically get BadMax's X
    //coordinate closer to that of the user's.
    getXCloser(x) {
        let degree;

        if(this._x < x)
        {
            if((this._x + 3) < x) {
                this._x += 3;
                worldCanvas.reposition(this.id, this._x, this._y);
            }
            else {
                for(i = 0; this._x !== x && i < 3; ++i) {
                    ++this._x;
                    worldCanvas.reposition(this.id, this._x, this._y);
                }
            }
            //worldCanvas.setRotation(this.id, 0);

            degree = 0;
        }

        else
        {
            if((this._x - 3) > x) {
                this._x -= 3;
                worldCanvas.reposition(this.id, this._x, this._y);
            }
            else {
                for(i = 0; this._x !== x && i < 3; ++i) {
                    --this._x;
                    worldCanvas.reposition(this.id, this._x, this._y);
                }
            }
            //worldCanvas.setRotation(this.id, 180);
            
            degree = 180;
        }

        return degree;
    },

    //Used by the chasedown function to specifically get BadMax's Y
    //coordinate closer to that of the user's.
    getYCloser(y) {
        let degree;

        if(this._y < y)
        {
            if((this._y + 3) < y) {
                this._y += 3;
                worldCanvas.reposition(this.id, this._x, this._y);
            }
            else {
                for(i = 0; this._y !== y && i < 3; ++i) {
                    ++this._y;
                    worldCanvas.reposition(this.id, this._x, this._y);
                }
            }
            //worldCanvas.setRotation(this.id, 270);
            
            degree = 270;
        }

        else
        {
            if((this._y - 3) > y) {
                this._y -= 3;
                worldCanvas.reposition(this.id, this._x, this._y);
            }
            else {
                for(i = 0; this._y !== y && i < 3; ++i) {
                    --this._y;
                    worldCanvas.reposition(this.id, this._x, this._y);
                }
            }
            //worldCanvas.setRotation(this.id, 90);
            
            degree = 90;
        }
        
        return degree;
    }
}


/*
class BadMax extends CelestialArtifact {
    constructor(id, imageSrc) {
        super(id, imageSrc);
        this._x = 0;
        this._y = 0;
    }

    //Setter and getter functions since the field for this class
    //are private.
    getX() { return this._x; }
    getY() { return this._y; }
    setX(num) { this._x = eval(num); }
    setY(num) { this._y = eval(num); }


    setPosition() {
        this._x = Math.floor(Math.random() * config.boardWidth);
        this._y = Math.floor(Math.random() * config.boardWidth);
    }


    //A welcome function that alerts a message to the player when the
    //game starts up informing them that he has stolen the KocaKola
    //recipe and that he has hidden it for the user to find.
    welcome() {
        alert("I am Bad Max, and I have stolen the KocaKola recipe from Eniac. Good luck finding it hahahahahah\n");
    }

    //Called when the user is attacked by BadMax and their CPs are equal
    interact() {
        let prob = Math.floor(Math.random() * 10);

        if(prob < 5) {
            alert("You have been attacked by Bad Max, but you and your crew have fought him off!\n");
        }

        else if(prob < 7) {
            if(config.godMode === false) {
                alert("You have been attacked by Bad Max and they have blown up your ship... The game is now over\n");
                gameOver();
                return;
            }

            alert("You have been attacked by Bad Max but god mode has saved you from him blwoing up your ship!\n");
        }

        else {
            alert("You have been attacked by Bad Max, him and his crew have stolen half your credits and supplies!\n");
            resources.subtractSupplies(Math.floor(eval(resources.supplies)/2));
            resources.subtractCredits(Math.floor(eval(resources.credits)/2));
        }

        this.setPosition();
    }

    //A function that helps get the CPs of badMax closer to that of the user's
    chaseDown(x, y) {
        //First check to see if the user has flown in the same CP as
        //Bad Max was already residing in.
        if(this._x === x && this._y === y) {
            this.interact();
            return;
        }

        //Then get his X and Y coordinates closer to that of the users.
        if(this._x !== x)
        {
            this.getXCloser(x);
        }
        if(this._y !== y)
        {
            this.getYCloser(y);
        }

        //If after the advancement their CPs match, attack.
        if(this._x === x && this._y === y) {
            this.interact();
        }
    }

    //Used by the chasedown function to specifically get BadMax's X
    //coordinate closer to that of the user's.
    getXCloser(x) {
        if(this._x < x)
        {
            if((this._x + 3) < x) {
                this._x += 3;
            }
            else {
                for(i = 0; this._x !== x && i < 3; ++i) {
                    ++this._x;
                }
            }
        }

        else
        {
            if((this._x - 3) > x) {
                this._x -= 3;
            }
            else {
                for(i = 0; this._x !== x && i < 3; ++i) {
                    --this._x;
                }
            }
        }
    }

    //Used by the chasedown function to specifically get BadMax's Y
    //coordinate closer to that of the user's.
    getYCloser(y) {
        if(this._y < y)
        {
            if((this._y + 3) < y) {
                this._y += 3;
            }
            else {
                for(i = 0; this._y !== y && i < 3; ++i) {
                    ++this._y;
                }
            }
        }

        else
        {
            if((this._y - 3) > y) {
                this._y -= 3;
            }
            else {
                for(i = 0; this._y !== y && i < 3; ++i) {
                    --this._y;
                }
            }
        }
    }
}
*/
