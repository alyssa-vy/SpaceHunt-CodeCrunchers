class SpaceStation extends CelestialArtifact {

    get chanceToWin() { return this._chanceToWin; }
    get amountToWin() { return this._amountToWin; }
    get entryFee() { return this._entryFee; }

    set chanceToWin(num) { this._chanceToWin = eval(num); }
    set amountToWin(num) { this._amountToWin = eval(num); }
    set entryFee(num) { this._entryFee = eval(num); }

    constructor(id, img, amountToWin, chanceToWin, entryFee){
        super(id, img);
        this._chanceToWin = eval(chanceToWin);
        this._amountToWin = eval(amountToWin);
        this._entryFee = eval(entryFee);
    }

    interact() {

        if(this._amountToWin <= 0){
            alert("You have docked at SpaceStation-" + this.id + "\n" +
                "There happens to be a Casinian playing a game of chance.\n\n" +
                "However, there is nothing to win in the game of chance, so you carry on about your business.");
            return;
        }

        //If the user cannot participate, print a special message.
        if(resources.credits < this._entryFee) {
            alert("You have docked at SpaceStation-" + this.id + "\n" +
                "There happens to be a Casinian playing a game of chance.\n\n" +
                "Unfortunately, you are too poor to afford the entry fee.\n" +
                "The Casinian laughs at you.");
            return;
        }

        //If the user can participate, goad them into playing.
        if(confirm("You have docked at SpaceStation-" + this.id +"\n" +
            "There happens to be a Casinian playing a game of chance.\n\n" +
            this._chanceToWin + "% chance to win.\n" +
            this._entryFee + " credit entry fee.\n" +
            this._amountToWin + " credits you could win.\n" +
            "The Casinian says you are too chicken to play.\n" +
            "Would you like to prove him wrong?")) {

            resources.subtractCredits(this._entryFee);
            alert("You pay the " + this._entryFee + " credit entry fee.");
            resources.updateUI();

            let roll = Math.floor(Math.random() * Math.floor(100));

            if (roll < this._chanceToWin) { // Won the roll
                resources.addCredits(this._amountToWin + this._entryFee);
                resources.updateUI();
                alert("You won the game of chance and you clean house.\n" +
                    "The Casinian reluctantly gives you your " + this._amountToWin + " credits, refunds your entry fee and mutters something under his breath.\n" +
                    "There is no longer anything to win at this SpaceStation.");
                this._amountToWin = 0;
            } else { //lost the roll
                alert("You lost the game of chance.\n" +
                    "The Casinian laughs as he takes your " + this._entryFee + " credits.");
            }
        } else {
            alert("You have chosen not to participate in the game of chance.\n" +
                "The Casinian yells: \"Bawk bawk bawk! I knew you were chicken!\"");
        }
    }
}
