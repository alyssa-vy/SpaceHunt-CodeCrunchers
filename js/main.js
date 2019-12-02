function main() {
    initConfig();
}

function initGame() {
    initializeMap();
    worldMap.loadCanvas();
    resources.initResources();
    position.initPosition();
    randomizeMap();
    document.addEventListener('keydown', function(event) {
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
    switchToPage("mainGame");

    badMax.setPosition();
    badMax.welcome();
}
