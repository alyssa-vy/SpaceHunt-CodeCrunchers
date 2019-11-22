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
        this.hasLanded = false;
    }

    interact(){
        if (!this.playerWantsToLand()) return;
        while (this.hasLanded){

        }
        var e = document.createElement("div");
        e.classList.add("inputPanel");
        e.innerHTML = "Hello, world!";
    }

    playerWantsToLand(){
        this.hasLanded = window.confirm(`You are within ${this.name}'s orbit. Would you like to land?`)
        return this.hasLanded;
    }

    openPrompt(){
        var box = new InputPanel();
        box.message = this.buildWelcomeMessage();
        box.addButton("Search for strongbox (-1 supplies)", function(){
            this.searchForStrongbox();
        }.bind(this))

        box.addButton("Btn1", function(){
            alert("hey");
        })
        box.addButton("Btn2", function(){
            alert("hey2");
        })
        box.open();
    }

    buildWelcomeMessage(){
        var message = `Welcome to ${this.name}.`;
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
        subtractSupplies(1);
        if (this.hasStrongBox){
            alert("Wow, you've found the strongbox! Return it to ")
        }
    }

    landOnPlanet(){

    }

    // set hasStrongBox(bool) { this.hasStrongbox = bool; }
    // set hasRepairShop(bool) { this.hasRepairshop = bool; }
    // set hasSuppliesShop(bool) { this.hasRepairshop = bool; }
    // set pricePerSupplies(credits) { this.pricePerSupplies = credits; }
    // set pricePerDamage(credits) { this.pricePerDamage = credits; }
}
