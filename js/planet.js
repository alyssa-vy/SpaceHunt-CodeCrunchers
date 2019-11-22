class Planet{
    constructor(name, imageSrc){
        this.name = name;
        this.asset = imageSrc;
        this.hasStrongbox = false;
        this.hasRepairShop = false;
        this.hasSuppliesShop = false;
        this.pricePerDamage = 2;
        this.pricePerSupplies = 1;
        this.suppliesPerStrongboxSearch = 1;
        this.prompt = null;
    }

    // This is the main functionality of the planet class. It pops up a small interactable menu.
    // When a player lands on a planet, call this function.
    interact(){
        if (!this.playerWantsToLand()) return;
        var prompt = this.getPrompt();
        prompt.open();
        disableShipMovement();
    }

    playerWantsToLand(){
        return window.confirm(`You are within ${this.name}'s orbit. Would you like to land?`)
    }

    getPrompt(){
        var box = new InputPanel();
        box.message = this.buildWelcomeMessage();
        box.addButton(this.strongBoxButtonMessage, function(){
            this.searchForStrongbox();
        }.bind(this));

        if (this.hasRepairShop){
            box.addButton(this.repairShopButtonMessage, function(){
                resources.addHealth(5);
                resources.subtractCredits(this.pricePerDamage * 5);
            }.bind(this));
        }

        if (this.hasSuppliesShop){
            box.addButton(this.suppliesShopButtonMessage, function(){
                resources.addSupplies(5);
                resources.addEnergy(5);
                resources.subtractCredits(this.pricePerSupplies* 5);
            }.bind(this));
        }

        box.addCloseButton(`Leave ${this.name}`, function(){
            enableShipMovement();
        }.bind(box));

        this.prompt = box;
        return box;
    }

    get strongBoxButtonMessage(){
        return `Search for strongbox (-${this.suppliesPerStrongboxSearch} supplies)`;
    }

    get repairShopButtonMessage(){
        return `Repair ship (-${this.pricePerDamage*5} credits, +5 health)`;
    }

    get suppliesShopButtonMessage(){
        return `Buy resources (-${this.pricePerSupplies*5} credits, +5 energy/supplies)`
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
        resources.subtractSupplies(this.suppliesPerStrongboxSearch);
        if (this.hasStrongBox){
            resources.foundStrongBox();
        }
        else{
            alert("Looks like the strongbox is nowhere to be found.")
        }
        this.prompt.removeButton(this.strongBoxButtonMessage);
    }
}
