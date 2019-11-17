const resources = {
	_energy:0,
	_supplies:0,

	updateResources(){
		this._energy = eval(document.UI.energy.value);
		this._supplies = eval(document.UI.supplies.value);
	},

	updateUI(){
		document.UI.energy.value = this._energy;
		document.UI.supplies.value = this._supplies;
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

	subtractSuppliesTwo() {
		this.subtractSupplies(2);
	},

	initResources() {
		this._energy = config.initialEnergy;
		this._supplies = config.initialSupplies;
		this.updateUI();
	}
};
