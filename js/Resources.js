const resources = {
	_energy:0,
	_supplies:0,
	_credits:0,
	_health:0,
    _initd:false,

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
		return true;
	},

	addEnergy(toAdd){
		let evaledAdd = eval(toAdd);
		if (evaledAdd < 0){
			alert ("Do not call addEnergy with negative value - call subtractEnergy to lower energy");
			return false;
		}
		this._energy += evaledAdd;
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
		return true;
	},

	addSupplies(toAdd){
		let evaledAdd = eval(toAdd);
		if (evaledAdd < 0){
			alert ("Do not call addSupplies with negative value - call subtractSupplies to lower supplies");
			return false;
		}
		this._supplies += evaledAdd;
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

	checkCredits(){

	},

	addCredits(){

	},

	subtractCredits(){

	},

	checkHealth(){

	},

	addHealth(){

	},

	subtractHealth(){

	},

	subtractSuppliesTwo() {
		this.subtractSupplies(2);
	},

	initResources() {
		this._energy = config.initialEnergy;
		this._supplies = config.initialSupplies;
		this._credits = config.initialCredits;
		this._health = config.initialHealth;
		this.updateUI();
	}
};
