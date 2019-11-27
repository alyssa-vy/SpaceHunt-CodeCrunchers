//File for the implementation of the Bad Max character and his
//corresponding functionality.

const badMax = {

    //X and Y CPs to represent where Bad Max is at on the map.
    _x: 0,
    _y: 0,

    //Setter and getter functions since the field for this class
    //are private.
    get x() { return this._x; },
    get y() { return this._y; },
    set x(num) { this._x = eval(num); },
    set y(num) { this._y = eval(num); },


    setPosition() {
        this._x = Math.floor(Math.random() * config.boardWidth);
        this._y = Math.floor(Math.random() * config.boardWidth);
    },


    //A welcome function that alerts a message to the player when the
    //game starts up informing them that he has stolen the KocaKola
    //recipe and that he has hidden it for the user to find.
    welcome() {
        alert("I am Bad Max, and I have stolen the KocaKola recipe from Eniac. Good luck finding it hahahahahah\n");
    },

    //Called when the user is attacked by BadMax and their CPs are equal
    attack() {
        let prob = Math.floor(Math.random() * 10);

        if(prob < 5) {
            alert("You have been attacked by Bad Max, but you and your crew have fought him off!\n");
        }

        else if(prob < 7 && !config.godMode) {
            alert("You have been attacked by Bad Max and they have blown up your ship... The game is now over\n");
            gameOver();
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
            this.attack();
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
            this.attack();
        }
    },

    //Used by the chasedown function to specifically get BadMax's X
    //coordinate closer to that of the user's.
    getXCloser(x) {
        if(this._x < x)
        {
            if((this._x + 5) < x) {
                this._x += 5;
            }
            else {
                for(i = 0; this._x !== x && i < 3; ++i) {
                    ++this._x;
                }
            }
        }

        else
        {
            if((this._x - 5) > x) {
                this._x -= 5;
            }
            else {
                for(i = 0; this._x !== x && i < 3; ++i) {
                    --this._x;
                }
            }
        }
    },

    //Used by the chasedown function to specifically get BadMax's Y
    //coordinate closer to that of the user's.
    getYCloser(y) {
        if(this._y < y)
        {
            if((this._y + 5) < y) {
                this._y += 5;
            }
            else {
                for(i = 0; this._y !== y && i < 3; ++i) {
                    ++this._y;
                }
            }
        }

        else
        {
            if((this._y - 5) > y) {
                this._y -= 5;
            }
            else {
                for(i = 0; this._y !== y && i < 3; ++i) {
                    --this._y;
                }
            }
        }
    }
}
