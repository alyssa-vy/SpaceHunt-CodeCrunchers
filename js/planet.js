/* All planets will have
    - imageSrc
    - hasStrongbox
    - hasRepairshop
    - hasSuppliesShop
    - repairshop price
    - suppliesshop price
*/

class Planet{
    constructor(name, imageSrc){
        this.name = name;
        this.asset = imageSrc;
        this.hasStrongbox = false;
        this.hasRepairshop = false;
        this.hasSuppliesshop = false;
        this.pricePerDamage = undefined;
        this.pricePerSupplies = undefined;
    }

    interact(){
        if (!this.playerWantsToLand()) return;
    }

    playerWantsToLand(){
        return confirm(`You are within ${this.name}'s orbit. Would you like to land?'`)
    }

    landOnPlanet(){

    }

    set hasStrongBox(bool) { this.hasStrongbox = bool; }
    set pricePerSupplies(credits) {
        this.hasSuppliesShop = true;
        this.pricePerSupplies = credits;
    }

    set pricePerDamage(credits) {
        this.hasRepairshop = bool;
        this.pricePerDamage = credits;
    }
}
