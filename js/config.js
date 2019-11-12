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
    godMode: false,
    randomWormholeBehavior: true,
};

function getConfig(){
    config = defaultConfig;
    config.initialLocation.x = parseInt(configurationSelectors.initialLocationX.value);
    config.initialLocation.y = parseInt(configurationSelectors.initialLocationY.value);
    config.boardWidth = parseInt(configurationSelectors.boardWidth.value);
    config.boardHeight= parseInt(configurationSelectors.boardHeight.value);
    config.initialEnergy = parseInt(configurationSelectors.initialEnergy.value);
    config.initialSupplies= parseInt(configurationSelectors.initialSupplies.value);
    config.initialCredits= parseInt(configurationSelectors.initialCredits.value);
    config.godMode = configurationSelectors.godMode.checked
    if (configurationSelectors.staticWormholeBehavior.checked)
        config.randomWormholeBehavior = false;
    return config;
}

function validateNumber(){
    numberInput= event.target;
    min = parseInt(numberInput.min);
    max = parseInt(numberInput.max);
    if (numberInput.value === "" || isNaN(numberInput.value)){
        setInvalid(numberInput, "Please enter a whole number");
        return;
    }
    currentValue = parseInt(numberInput.value)
    if (currentValue < min){
        setInvalid(numberInput, "Number must be greater than " + min);
    }
    else if (currentValue > max){
        setInvalid(numberInput, "Number must be less than " + max);
    }
    else{
        setValid(numberInput);
    }
}

function validateCoordinate(coordinate){
    numberInput = event.target;
    if (numberInput.value === "" || isNaN(numberInput.value)){
        setInvalid(numberInput, "Please enter a whole number");
        return;
    }
    coordinateValue = parseInt(numberInput.value);
    if (coordinate === "x"){
        borderUpperLimit = parseInt(configurationSelectors.boardWidth.value);
        borderLowerLimit = parseInt(configurationSelectors.boardWidth.min);
    }
    else{
        borderUpperLimit = parseInt(configurationSelectors.boardHeight.value);
        borderLowerLimit = parseInt(configurationSelectors.boardHeight.min);
    }
    if (coordinateValue < borderLowerLimit || coordinateValue > borderUpperLimit){
        setInvalid(event.target, "Coordinate must be within map border");
    }
    else{
        setValid(event.target);
    }
}

function isInt(string){
    if (isNaN(string))
        return false;
    return (string.includes(".") && !string.endsWith("."))
}

function setInvalid(inputField, message){
    inputField.classList.add("invalidInput");
    errorMessageElement = inputField.parentElement.getElementsByClassName("invalidInputMessage")[0];
    errorMessageElement.innerHTML = message;
}

function setValid(inputField){
    inputField.classList.remove("invalidInput");
    errorMessageElement = inputField.parentElement.getElementsByClassName("invalidInputMessage")[0];
    errorMessageElement.innerHTML = "";
}

function setConfigurationDefault(){
    configurationSelectors.initialLocationX.value = defaultConfig.initialLocation.x
    configurationSelectors.initialLocationY.value = defaultConfig.initialLocation.y
    configurationSelectors.boardWidth.value = defaultConfig.boardWidth
    configurationSelectors.boardHeight.value = defaultConfig.boardHeight
    configurationSelectors.initialEnergy.value = defaultConfig.initialEnergy
    configurationSelectors.initialSupplies.value = defaultConfig.initialSupplies
    configurationSelectors.initialCredits.value = defaultConfig.initialCredits
    configurationSelectors.godMode.checked = defaultConfig.godMode
    configurationSelectors.staticWormholeBehavior.checked = !defaultConfig.randomWormholeBehavior
    inputFields = configurationSelectors.querySelectorAll("input");
    inputFields.forEach(function(inputField){
        setValid(inputField);
    });
}

function disableSubmitIfInvalid(){
    invalidInputFields = document.getElementById("configuration").getElementsByClassName("invalidInput");
    if (invalidInputFields.length > 0){
        submitButton = document.getElementById("configurationSubmitButton").disabled = true;
    }
    else{
        submitButton = document.getElementById("configurationSubmitButton").disabled = false;
    }
}
