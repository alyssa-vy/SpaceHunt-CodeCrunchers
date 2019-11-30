const resources = {
	_energy:undefined,
	_supplies:undefined,
	_credits:undefined,
	_health:undefined,

	_maxEnergy:undefined,
	_maxSupplies:undefined,
	_maxHealth:undefined,
    _initd:false,

	_hasStrongbox: false,
	_isDamaged:false,

    get supplies() {
        return this._supplies;
    },
    
    get credits() {
        return this._credits;
    },

	setDamaged(toSet) {
        if(this._isDamaged === false) {
		this._isDamaged = toSet;
        return;
        }

        alert("You ships was already damaged and has now blown up...\n");
        gameOver();
	},

	isDamaged(){
		return this._isDamaged;
	},

	setEnergy(newEnergy){
		this._energy = eval(newEnergy);
	},

	setSupplies(newSupplies){
		this._supplies = eval(newSupplies);
	},

	setCredits(newCredits){
		this._credits = eval(newCredits);
	},

	setHealth(newHealth){
		this._health = eval(newHealth);
	},

	setMaxEnergy(newMax){
		this._maxEnergy = eval(newMax);
	},

	setMaxSupplies(newMax){
		this._maxSupplies = eval(newMax);
	},

	setMaxHealth(newMax){
		this._maxHealth = eval(newMax);
	},

	updateResources(){
		this._energy = eval(document.UI.energy.value);
		this._supplies = eval(document.UI.supplies.value);
		this._credits = eval(document.UI.credits.value);
		this._health = eval(document.UI.health.value);
	},

	updateUI(){
		document.UI.energy.value = this._energy;
		document.UI.supplies.value = this._supplies;
		document.UI.credits.value = this._credits;
		document.UI.health.value = this._health;
	},

	checkEnergy(){
		if (document.UI.energy.value <= 0 && !config.godMode){
			alert ("Out of energy!");
			gameOver();
			return false;
		}
		if (document.UI.energy.value > this._maxEnergy) {
			this._energy = this._maxEnergy;
			document.UI.energy.value = this._energy;
		}
		return true;
	},

	addEnergy(toAdd){
		let evaledAdd = eval(toAdd);
		if (evaledAdd < 0){
			alert ("Do not call addEnergy with negative value - call subtractEnergy to lower energy");
			return false;
		}
		this._energy += evaledAdd;
		if (document.UI.energy.value > this._maxEnergy) {
			this._energy = this._maxEnergy;
		}
		document.UI.energy.value = this._energy;
		return true;
	},

	subtractEnergy(toSubtract){
		let evaledSubtract = eval(toSubtract);
		if (evaledSubtract < 0){
			alert ("Do not call subtractEnergy with negative value - call with positive value to be subtracted");
			return false;
		}
		this._energy -= evaledSubtract;
		if (this._energy < 0){
			this._energy = 0;
		}
		document.UI.energy.value = this._energy;
		return true;
	},

	checkSupplies(){
		if (document.UI.supplies.value <= 0 && !config.godMode){
			alert ("Out of supplies!");
			gameOver();
			return false;
		}
		if (document.UI.supplies.value > this._maxSupplies) {
			this._supplies = this._maxSupplies;
			document.UI.supplies.value = this._supplies;
		}
		return true;
	},

	addSupplies(toAdd){
		let evaledAdd = eval(toAdd);
		if (evaledAdd < 0){
			alert ("Do not call addSupplies with negative value - call subtractSupplies to lower supplies");
			return false;
		}
		this._supplies += evaledAdd;
		if (document.UI.supplies.value > this._maxSupplies) {
			this._supplies = this._maxSupplies;
		}
		document.UI.supplies.value = this._supplies;
		return true;
	},

	subtractSupplies(toSubtract){
		let evaledSubtract = eval(toSubtract);
		if (evaledSubtract < 0){
			alert ("Do not call subtractSupplies with negative value - call with positive value to be subtracted");
			return false;
		}
		this._supplies -= evaledSubtract;
		if (this._supplies < 0){
			this._supplies = 0;
		}
		document.UI.supplies.value = this._supplies;
		return true;
	},

	//Use this function to check if the player has "toCheck" number of credits or greater.
	checkCredits(toCheck){
		let evaledCheck = eval(toCheck);
		if (this._credits - evaledCheck >= 0){
			return true;
		}
		return false;
	},

	addCredits(toAdd){
		let evaledAdd = eval(toAdd);
		if (evaledAdd < 0){
			alert ("Do not call addCredits with negative value - call subtractCredits to lower credits");
			return false;
		}
		this._credits += evaledAdd;
		document.UI.credits.value = this._credits;
		return true;
	},

	subtractCredits(toSubtract){
		let evaledSubtract = eval(toSubtract);
		if (evaledSubtract < 0){
			alert ("Do not call subtractCredits with negative value - call with positive value to be subtracted");
			return false;
		}
		this._credits -= evaledSubtract;
		if (this._credits < 0){
			this._credits = 0;
		}
		document.UI.credits.value = this._credits;
		return true;
	},

	checkHealth(){
		if (document.UI.health.value <= 0 && !config.godMode){
			alert ("Your ship ran out of health!");
			gameOver();
			return false;
		}
		if (document.UI.health.value > this._maxHealth) {
			this._health = this._maxHealth;
			document.UI.health.value = this._health;
		}
		return true;
	},

	addHealth(toAdd){
		let evaledAdd = eval(toAdd);
		if (evaledAdd < 0){
			alert ("Do not call addHealth with negative value - call subtractHealth to lower health");
			return false;
		}
		this._health += evaledAdd;
		if (document.UI.health.value > this._maxHealth) {
			this._health = this._maxHealth;
		}
		document.UI.health.value = this._health;
		return true;
	},

	subtractHealth(toSubtract){
		let evaledSubtract = eval(toSubtract);
		if (evaledSubtract < 0){
			alert ("Do not call subtractHealth with negative value - call with positive value to be subtracted");
			return false;
		}
		this._health -= evaledSubtract;
		if (this._health < 0){
			this._health = 0;
		}
		document.UI.health.value = this._health;
		return true;
	},

	subtractSuppliesTwo() {
		this.subtractSupplies(2);
	},

	initResources() {
		this._maxEnergy = config.maximumEnergy;
		this._energy = this._maxEnergy;
		this._maxSupplies = config.maximumSupplies;
		this._supplies = this._maxSupplies;
		this._credits = config.maximumCredits;
		this._maxHealth = config.maximumHealth;
		this._health = this._maxHealth;
		this.updateUI();
	},

	foundStrongBox(){
		alert("Wow, you found the strongbox! Return it to Xeon before Badmax finds out.")
		this._hasStrongBox = true;
	},

	hasStrongBox(){
		return this._hasStrongBox;
	}
};
