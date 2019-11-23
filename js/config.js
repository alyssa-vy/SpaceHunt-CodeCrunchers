/* The config interface. To get any value from the config, simply call:
    config.valueName;
    EX. To get a number for the board width, call:
    config.boardWidth
*/
var config = {
    get boardWidth() { return parseInt(configurationSelectors.boardWidth.value) },
    get boardHeight() { return parseInt(configurationSelectors.boardHeight.value) },
    get initialLocationX() { return parseInt(configurationSelectors.initialLocationX.value) },
    get initialLocationY() { return parseInt(configurationSelectors.initialLocationY.value) },
    get maximumEnergy() { return parseInt(configurationSelectors.maximumEnergy.value) },
    get maximumSupplies() { return parseInt(configurationSelectors.maximumSupplies.value) },
    get maximumCredits() { return parseInt(configurationSelectors.maximumCredits.value) },
    get maximumHealth() { return parseInt(configurationSelectors.maximumHealth.value) },
    get godMode() { return configurationSelectors.godMode.checked },
    get randomWormholeBehavior() { return !configurationSelectors.staticWormholeBehavior.checked },
    get gazetteer() {return configurationSelectors.gazetteer.checked},
    get gameAdministrator() { return configurationSelectors.administrator.checked},
    set boardWidth(newBoardWidth) {},
    set boardHeight(newBoardHeight) {},
    set initialLocationX(newInitialLocationX) {},
    set initialLocationY(newInitialLocationY) {},
    set initialEnergy(newInitialEnergy) {},
    set initialSupplies(newInitialSupplies) {},
    set initialCredits(newInitialCredits) {},
    set godMode(newGodMode) {},
    set randomWormholeBehavior(newBehavior) {},
    set gazetteer(newGazetteer) {},
    set gameAdministrator(newAdministrator) {}
};

var defaultConfig = {
    boardWidth: 128,
    boardHeight: 128,
    initialLocation: {
        x: 0,
        y: 0
    },
    maximumEnergy: 1000,
    maximumSupplies: 100,
    maximumCredits: 1000,
    maximumHealth: 100,
    godMode: false,
    randomWormholeBehavior: true,
    gazetteer: false,
    administrator: false
};


var validateEvent = new Event("validate", {
    bubbles: true
});

function initConfig(){
    // Adds validate event listeners to all the necessary config fields
    numberFields = document.getElementsByClassName("numberField")
    x_coord_div = configurationSelectors.initialLocationX.parentElement
    y_coord_div = configurationSelectors.initialLocationY.parentElement
    for (var i = 0; i < numberFields.length; i++){
        numberFields[i].addEventListener("validate", function(){
            // Must bind this function to give a context to what "this" is
            // In this case, "this" is a div with a class "numberField"
            validateNumber(this.querySelector("input"))
        }.bind(numberFields[i]));
    }
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
    value = numberInputField.value;
    if (!(isInt(value))){
        setInvalid(numberInputField, "Please enter a whole number");
        return;
    }
    value = parseInt(value);
    borderUpperLimit = parseInt(configurationSelectors.boardWidth.value);
    borderLowerLimit = 0;
    if (value < borderLowerLimit || value > borderUpperLimit){
        setInvalid(numberInputField, "Coordinate must be within the map's \"width\" border");
    }
    else{
        setValid(numberInputField);
    }
}

function validateYCoordinate(numberInputField){
    value = numberInputField.value;
    if (!(isInt(value))){
        setInvalid(numberInputField, "Please enter a whole number");
        return;
    }
    value = parseInt(value);
    borderUpperLimit = parseInt(configurationSelectors.boardHeight.value);
    borderLowerLimit = 0;
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
    configurationSelectors.maximumEnergy.value = defaultConfig.maximumEnergy
    configurationSelectors.maximumSupplies.value = defaultConfig.maximumSupplies
    configurationSelectors.maximumCredits.value = defaultConfig.maximumCredits
    configurationSelectors.maximumHealth.value = defaultConfig.maximumHealth
    configurationSelectors.godMode.checked = defaultConfig.godMode
    configurationSelectors.staticWormholeBehavior.checked = !defaultConfig.randomWormholeBehavior
    configurationSelectors.gazetteer.checked = defaultConfig.gazetteer
    configurationSelectors.administrator.checked = defaultConfig.administrator
    switchIfChecked("mapCreatorButton","configurationDoneButton")
    inputFields = configurationSelectors.querySelectorAll("input");
    inputFields.forEach(function(inputField){
        setValid(inputField);
    });
}

function disableSubmitIfInvalid(){
    invalidInputFields = document.getElementById("configuration").getElementsByClassName("invalidInput");
    submitButtons = document.getElementsByClassName("configurationSubmitButton");
    if (invalidInputFields.length > 0){
        for (var i = 0; i < submitButtons.length; i++){
            submitButtons[i].disabled = true;
        }
    }
    else{
        for (var i = 0; i < submitButtons.length; i++){
            submitButtons[i].disabled = false;
        }
    }
}
