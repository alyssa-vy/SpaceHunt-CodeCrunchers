class Freighter extends CelestialArtifact {

    get supplies() { return this._supplies; }
    set supplies(num) { this._supplies = eval(num); }

    constructor(id, imgSrc, k){
        super(id, imgSrc);
        this._supplies = eval(k);
    }

    interact(){
        //increase player's supplies by k
        resources.addSupplies(this._supplies);
        resources.checkSupplies();
        resources.updateUI();
        if(this._supplies > 0) {
            alert("You have encountered an Abandoned Freighter and salvaged " + this._supplies + " supplies from it!\n" +
                "The freighter no longer has any salvageable supplies." +
                "\nYou also still lose supplies for moving.");
        }
        else if(this._supplies === 0) {
            alert("You have encountered an Abandoned Freighter!\n" +
                "However, it does not have any salvageable supplies.");
        }
        this._supplies = 0;
    }
}
