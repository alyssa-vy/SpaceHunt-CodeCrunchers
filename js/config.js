var defaultConfig = {
    boardWidth: 120,
    boardHeight: 120,
    initialLocation: {
        x: 4,
        y: 4
    },
    initialEnergy: 100,
    initialSupplies: 100,
    initialCredits: 1000,
    randomWormholeBehavior: true,
    canFail: true
};

function getConfig(){
    config = defaultConfig;
    config.initialLocation.x = configurationSelectors.initialLocationX.value;
    config.initialLocation.y = configurationSelectors.initialLocationY.value;
    config.boardWidth = configurationSelectors.boardWidth.value;
    config.boardHeight= configurationSelectors.boardHeight.value;
    config.initialEnergy = configurationSelectors.initialEnergy.value;
    config.initialSupplies= configurationSelectors.initialSupplies.value;
    config.initialCredits= configurationSelectors.initialCredits.value;
    if (configurationSelectors.godMode)
        config.canFail = false;
    if (configurationSelectors.staticWormholeBehavior)
        config.randomWormholeBehavior = false;
    console.log(config);

    return config;
}

function validateNumber(){
    numberInput = event.target;
    min = parseInt(numberInput.min)
    max = parseInt(numberInput.max)
    currentValue = parseInt(numberInput.value)
    if (currentValue < min){
        numberInput.value = numberInput.min;
    }
    else if (currentValue > max){
        numberInput.value = numberInput.max;
    }
}
