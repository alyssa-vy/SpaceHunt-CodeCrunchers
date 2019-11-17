/*
    Planets Added is an array that represents which planets
    have been added to the map to avoid adding duplicate planets
    Slots 0-6 represent Pentiums 1-7
    Slot 7 Represents Celeron
    Slot 8 Represents Xeon
    Slot 9 Represents Ryzen
 */
var PlanetsAdded = new Array(10);
for(i = 0; i < 10; ++i){
    PlanetsAdded[i] = false;
}

function loadOptions(elementId){
    /*
        Adds available planets to "add planet" selector
        If there is not at least one added, the submit button
        is disabled and "All Planets Added" is added instead
    */
    let element = document.getElementById(elementId);
    let atLeastOne = false;
    element.options.length = 0;

    //See what planets have been added
    for(i = 0; i < 10; ++i){
        if(!PlanetsAdded[i]) {
            if(i < 7) {
                var opt = document.createElement('option');
                opt.value, opt.innerHTML = ('Pentium ' + (i + 1));
                element.appendChild(opt);
                atLeastOne = true;
            } else {
                    if(!PlanetsAdded[i]){
                        opt = document.createElement('option');
                        switch(i) {
                            case 7:
                                opt.value, opt.innerHTML = ('Celeron');
                                break;
                            case 8:
                                opt.value, opt.innerHTML = ('Xeon');
                                break;
                            case 9:
                                opt.value, opt.innerHTML = ('Ryzen');
                                break;
                        }
                        atLeastOne = true;
                        element.appendChild(opt);
                    }
            }
        }
    }
    if(!atLeastOne){
        var opt = document.createElement('option');
        opt.value = "";
        opt.innerHTML = ("All Planets Added");
        element.appendChild(opt);
        element.disabled = true;
        document.getElementById("addPlanetButton").disabled = true;
    }
}