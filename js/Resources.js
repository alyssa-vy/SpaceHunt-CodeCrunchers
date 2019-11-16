
const resources = {
	_energy:0,
	_supplies:0,
	_maxEnergy:1000,
	_maxSupplies:100,
	
	updateResources(){
		this._energy = eval(document.UI.energy.value);
		this._supplies = eval(document.UI.supplies.value);
	},

	updateUI(){
		document.UI.energy.value = this._energy;
		document.UI.supplies.value = this._supplies;
	},

	checkEnergy(){
		//alert ("Checking Energy");
		if (document.UI.energy.value <= 0){
			alert ("Out of energy!");
			if (!config.godMode){
				alert ("Game over!");
				gameOver();
			}
			return false;
		}
		if (document.UI.energy.value > this._maxEnergy){
			document.UI.energy.value = this._maxEnergy;
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
		if (document.UI.energy.value > 1000){
			document.UI.energy.value = 1000;
		}
		return true;
	},
	
	subtractEnergy(toSubtract){
		let evaledSubtract = eval(toSubtract);
		if (evaledSubtract < 0){
			alert ("Do not call subtractEnergy with negative value - call with positive value to be subtracted");
			return false;
		}
		this._energy -= evaledSubtract;
		document.UI.energy.value = this._energy;
		return true;
	},

	checkSupplies(){
		//alert("Checking Supplies");
		if (document.UI.supplies.value <= 0){
			alert ("Out of supplies!");
			if (!config.godMode) {
				alert ("Game over!");
				gameOver();
			}
			return false;
		}
		if (document.UI.supplies.value > this._maxSupplies){
			document.UI.supplies.value = this._maxSupplies;
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
		if (document.UI.supplies.value > 100){
			document.UI.supplies.value = 100;
		}
		return true;
	},
	
	subtractSupplies(toSubtract){
		let evaledSubtract = eval(toSubtract);
		if (evaledSubtract < 0){
			alert ("Do not call subtractSupplies with negative value - call with positive value to be subtracted");
			return false;
		}
		this._supplies -= evaledSubtract;
		document.UI.supplies.value = this._supplies;
		return true;
	},
	
	subtractSuppliesTwo() {
		this._supplies -= 2;
		document.UI.supplies.value = this._supplies;
		return true;
	},

	initResources() {
		this._energy = config.initialEnergy;
		this._supplies = config.initialSupplies;
		this.updateUI();
	}
};
