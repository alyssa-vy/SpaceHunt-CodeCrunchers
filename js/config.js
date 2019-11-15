var config = {
    get boardWidth() { return parseInt(configurationSelectors.boardWidth.value) },
    get boardHeight() { return parseInt(configurationSelectors.boardHeight.value) },
    get initialLocationX() { return parseInt(configurationSelectors.initialLocationX.value) },
    get initialLocationY() { return parseInt(configurationSelectors.initialLocationY.value) },
    get initialEnergy() { return parseInt(configurationSelectors.initialEnergy.value) },
    get initialSupplies() { return parseInt(configurationSelectors.initialSupplies.value) },
    get initialCredits() { return parseInt(configurationSelectors.initialCredits.value) },
    get godMode() { return configurationSelectors.godMode.checked },
    get randomWormholeBehavior() { return !configurationSelectors.staticWormholeBehavior.checked }
}

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


var validateEvent = new Event("validate", {
    bubbles: true
});

function initConfig(){
    // Adds validate event listeners to all the necessary config fields
    numberFields = document.getElementsByClassName("numberField")
    for (var i = 0; i < numberFields.length; i++){
        numberFields[i].addEventListener("validate", function(){
            // Must bind this function to give a context to what "this" is
            // In this case, "this" is a div with a class "numberField"
            validateNumber(this.querySelector("input"))
        }.bind(numberFields[i]));
    }
    x_coord_div = configurationSelectors.initialLocationX.parentElement
    y_coord_div = configurationSelectors.initialLocationY.parentElement
    x_coord_div.addEventListener("validate", function(){
        validateXCoordinate(this.querySelector("input"))
    }.bind(x_coord_div))
    y_coord_div.addEventListener("validate", function(){
        validateYCoordinate(this.querySelector("input"))
    }.bind(y_coord_div));

    setConfigurationDefault();
}

function validate(){
    // Checks for validation on all input fields on the configuration page
    inputFields = document.getElementById("configuration").querySelectorAll("input");
    inputFields.forEach(function(input){
        input.dispatchEvent(validateEvent)
    })
    disableSubmitIfInvalid();
}

function validateNumber(numberInputField){
    value = numberInputField.value
    minVal = parseInt(numberInputField.min);
    maxVal= parseInt(numberInputField.max);
    if (!(isInt(value))){
        setInvalid(numberInputField, "Please enter a whole number");
        return;
    }
    currentValue = parseInt(numberInputField.value)
    if (currentValue < minVal){
        setInvalid(numberInputField, "Number must be greater than " + minVal);
    }
    else if (currentValue > maxVal){
        setInvalid(numberInputField, "Number must be less than " + maxVal);
    }
    else{
        setValid(numberInputField);
    }
}

function validateXCoordinate(numberInputField){
    value = numberInputField.value
    if (!(isInt(value))){
        setInvalid(numberInputField, "Please enter a whole number");
        return;
    }
    value = parseInt(value);
    borderUpperLimit = parseInt(configurationSelectors.boardWidth.value);
    borderLowerLimit = 0
    if (value < borderLowerLimit || value > borderUpperLimit){
        setInvalid(numberInputField, "Coordinate must be within the map's \"width\" border");
    }
    else{
        setValid(numberInputField);
    }
}

function validateYCoordinate(numberInputField){
    value = numberInputField.value
    if (!(isInt(value))){
        setInvalid(numberInputField, "Please enter a whole number");
        return;
    }
    value = parseInt(value);
    borderUpperLimit = parseInt(configurationSelectors.boardHeight.value);
    borderLowerLimit = 0
    if (value < borderLowerLimit || value > borderUpperLimit){
        setInvalid(numberInputField, "Coordinate must be within the map's \"height\" border");
    }
    else{
        setValid(numberInputField);
    }
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

function isInt(string){
    var isFloat = (string.includes(".") && !string.endsWith("."))
    return !(string === "" || isNaN(string) ||  isFloat)
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
