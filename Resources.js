
const resources = {
	_energy:0,
	_supplies:0,
	
	updateResources(){
		this._energy = eval(document.UI.energy.value);
		this._supplies = eval(document.UI.supplies.value);
	},

	checkEnergy(){
		alert ("Checking Energy");
		if (document.UI.energy.value <= 0){
			alert ("Out of energy!");
			/*if (!godMode){
				//call gameover function
			}*/
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
		document.UI.energy.value = this._energy;
		return true;
	},

	checkSupplies(){
		alert("Checking Supplies");
		if (document.UI.supplies.value <= 0){
			alert ("Out of supplies!");
			/*if (!godMode){
				//call gameover function
			}*/
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
		this._supplies -= evaledAdd;
		document.UI.supplies.value = this._supplies;
		return true;
	},
	
	subtractSuppliesTwo(){
		this._supplies -= 2;
		document.UI.supplies.value = this._supplies;
		return true;
	}
};
