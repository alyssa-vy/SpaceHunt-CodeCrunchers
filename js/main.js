function main() {
    initConfig();
}

function initGame() {
    if(!played) {
        initializeMap();
        worldMap.loadCanvas();
        resources.initResources();
        position.initPosition();
        randomizeMap();
        //createBadMaxElement();
        document.addEventListener('keydown', function (event) {
            if (event.code == 'ArrowRight') {
                position.moveSpacecraft(0, document.UI.distance.value);
            }
            if (event.code == 'ArrowDown') {
                position.moveSpacecraft(270, document.UI.distance.value);
            }
            if (event.code == 'ArrowLeft') {
                position.moveSpacecraft(180, document.UI.distance.value);
            }
            if (event.code == 'ArrowUp') {
                position.moveSpacecraft(90, document.UI.distance.value);
            }
        });
        badMax.setPosition();
        badMax.welcome();
        if (document.getElementById("gazetteer").checked == true) {
            alertWhereStrongboxIs()
        }
    }
    switchToPage("mainGame");
}

function alertWhereStrongboxIs(){
    var planetsThatHaveStrongbox = [];
    for (var planet in planets){
        if (planets[planet].containsStrongbox){
            planetsThatHaveStrongbox.push(planet);
        }
    }
    if (planetsThatHaveStrongbox.length === 1){
        var msg = `The planet ${planetsThatHaveStrongbox[0]} has the strongbox!`;
    }
    else{
        var msg = "Planets ";
        for (var i = 0; i < planetsThatHaveStrongbox.length; i++){
            if (i === planetsThatHaveStrongbox.length - 1){
                msg += "and " + planetsThatHaveStrongbox[i];
            }
            else{
                msg += planetsThatHaveStrongbox[i] + ', ';
            }
        }
        msg += " contain the strongbox!"
    }
    alert(msg);
}
