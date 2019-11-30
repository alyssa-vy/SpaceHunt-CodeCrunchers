class Planet extends CelestialArtifact{
    constructor(id, imageSrc){
        super(id, imageSrc);
        this.hasStrongbox = false;
        this.hasRepairShop = false;
        this.hasSuppliesShop = false;
        this.pricePerDamage = 2;
        this.pricePerSupplies = 1;
        this.suppliesPerStrongboxSearch = 1;
        this.prompt = null;
        this.inOrbit = false; // automatically false;
        this.usedSensors = false; // check if user has already used sensors
        this.searched = false; // check if user has already searched for the strongbox
    }

    // This is the main functionality of the planet class. It pops up a small interactable menu.
    // When a player lands on a planet, call this function.
    interact(){
        this.enterOrbit();
        if (this.inOrbit) {
            var prompt = this.getOrbitPrompt();
            prompt.open();
        }
    }

    enterOrbit() {
        if (confirm("Would you like to enter " + this.id + "'s orbit?'")) {
            resources.subtractSuppliesTwo(); // subtract 2% supplies
            if (resources.checkSupplies()) { // check if supplies are greater than 0
                disableShipMovement(); // stop ship from being able to move once in orbit
                this.inOrbit = true; // set boolean value inOrbit to true
            }
        }
        else {
            return; // replace this with code to keep ship from moving into space
        }
    }

    leaveOrbit() {
        alert("You have left " + this.id + "'s orbit!");
        resources.subtractSuppliesTwo();
        if (resources.checkSupplies()) {
            enableShipMovement();
            this.inOrbit = false;
        }
    }

    strongboxSensor() {
            //resources.subtractSupplies(this.suppliesPerStrongboxSearch);
            resources.subtractSuppliesTwo();
            if (this.hasStrongBox){
                //resources.foundStrongBox();
                alert("The sensor has caught a strong signal from the strongbox on this planet!")
            }
            else{
                alert("The sensor did not pick up any signal from the strongbox on this planet. Try another planet!")
            }
            this.usedSensors = true; // user has already used sensors for strongbox
            this.prompt.removeButton(this.strongBoxButtonMessage);

    }

    playerWantsToLand(){
        return window.confirm(`You are within ${this.id}'s orbit. Would you like to land?`)
    }

// This is a new prompt shown when a user has entered a planet's orbit. The buttons contained are to either leave orbit or land
    getOrbitPrompt() {
        var box = new InputPanel();
        box.message = "You are floating in " + this.id + "'s orbit.";
        if (!this.usedSensors) {
            box.addButton("Use Sensors to Search For Strongbox", function(){
                this.strongboxSensor();
            }.bind(this));
        }

        box.addButton("Land on Planet", function() {
            box.close();
            var prompt = this.getPrompt();
            prompt.open();
        }.bind(this));

        box.addCloseButton("Leave Orbit?", function() {
            this.leaveOrbit();
        }.bind(this));

        this.prompt = box;
        return box;
    }

    getPrompt(){
        var box = new InputPanel();
        box.message = this.buildWelcomeMessage();
        if (!this.searched) {
            box.addButton(this.strongBoxButtonMessage, function(){
                this.searchForStrongbox();
            }.bind(this));
        }
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

        box.addCloseButton(`Leave ${this.id}`, function(){
            var prompt = this.getOrbitPrompt();
            prompt.open();
        }.bind(this));

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
        var message = `Welcome to ${this.id}. `;
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
        this.searched = true; // user has already searched
    }
}
