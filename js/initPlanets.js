var planets = {
    "Pentium-1": new Planet("Pentium-1", "img/pentium_1.png"),
    "Pentium-2": new Planet("Pentium-2", "img/pentium_2.png"),
    "Pentium-3": new Planet("Pentium-3", "img/pentium_3.png"),
    "Pentium-4": new Planet("Pentium-4", "img/pentium_4.png"),
    "Pentium-5": new Planet("Pentium-5", "img/pentium_5.png"),
    "Pentium-6": new Planet("Pentium-6", "img/pentium_6.png"),
    "Pentium-7": new Planet("Pentium-7", "img/pentium_7.png"),
    "Ryzen": new Planet("Ryzen", "img/ryzen.png"),
    "Celeron": new Planet("Celeron", "img/celeron.png"),
    "Xeon": new Planet("Xeon", "img/xeon.png"),
}

// This function sets all the variables for each planet within artifacts
function initializeAllPlanets(){
    for (var planet in planets){
        if (randomTrueOrFalse()){
            var repairShopPrice = randomInt(0, 3);
            planets[planet].setRepairShopPrice(repairShopPrice);
        }
        if (randomTrueOrFalse()){
            var suppliesShopPrice = randomInt(0, 2);
            planets[planet].setSuppliesShopPrice(suppliesShopPrice);
        }
    }
    randomizeStrongboxPlacement();
}

function randomTrueOrFalse(){
    var num = Math.floor(Math.random() * 2 % 3)
    return num === 1;
}

function randomInt(lower, upper){
    // The range does NOT INCLUDE upper
    return Math.floor(Math.random() * (upper - lower) + lower)
}

function randomizeStrongboxPlacement(){
    var randomPlanet = randomInt(0, 10);
    var currentPlanet = 0;
    for (var planet in planets){
        if (currentPlanet === randomPlanet){
            planets[planet].containsStrongbox = true;
            return;
        }
        currentPlanet++;
    }

}
