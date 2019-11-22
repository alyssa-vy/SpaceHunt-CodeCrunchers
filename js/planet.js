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
        this.hasRepairShop = false;
        this.hasSuppliesShop = false;
        this.pricePerDamage = undefined;
        this.pricePerSupplies = undefined;
    }

    interact(){
        if (!this.playerWantsToLand()) return;
        var prompt = this.getPrompt();
        prompt.open();
        disableShipMovement();
    }

    playerWantsToLand(){
        this.hasLanded = window.confirm(`You are within ${this.name}'s orbit. Would you like to land?`)
        return this.hasLanded;
    }

    getPrompt(){
        var box = new InputPanel();
        box.message = this.buildWelcomeMessage();
        box.addButton("Search for strongbox (-1 supplies)", function(){
            this.searchForStrongbox();
        }.bind(this));

        if (this.hasRepairShop){
            box.addButton(`Repair ship (-${this.pricePerDamage*5} credits, +5 health)`, function(){
                resources.addHealth(5);
                resources.subtractCredits(this.pricePerDamage * 5);
            }.bind(this));
        }

        if (this.hasSuppliesShop){
            box.addButton(`Buy resources (-${this.pricePerSupplies*5} credits, +5 energy/supplies)`, function(){
                resources.addSupplies(5);
                resources.addEnergy(5);
                resources.subtractCredits(this.pricePerSupplies* 5);
            }.bind(this));
        }

        box.addButton(`Leave ${this.name}`, function(){
            enableShipMovement();
            this.close();
        }.bind(box));

        return box;
    }

    buildWelcomeMessage(){
        var message = `Welcome to ${this.name}. `;
        var interactables = 0;
        if (this.hasSuppliesShop) interactables++;
        if (this.hasRepairShop) interactables++;
        switch(interactables){
            case(0): message += "It seems this planet is deserted.";
                    break;
            case(1): message += "There's a small shop where you landed.";
                    break;
            default: message += "This area is well populated and has many shops.";
        }
        return message;
    }

    searchForStrongbox(){
        resources.subtractSupplies(1);
        if (this.hasStrongBox){
            resources.foundStrongBox();
        }
        else{
            alert("Looks like the strongbox is nowhere to be found.")
        }
    }
}
