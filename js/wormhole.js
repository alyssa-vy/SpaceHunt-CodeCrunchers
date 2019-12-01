class Wormhole extends CelestialArtifact {
    constructor(id, imageSrc){
        super(id, imageSrc);
    }

    interact(){
        if (config.randomWormholeBehavior){
            var x = Math.floor(Math.random() * config.boardWidth);
            var y = Math.floor(Math.random() * config.boardWidth);
        }
        else{
            var x = Math.floor(config.boardWidth / 2);
            var y = Math.floor(config.boardHeight / 2);
        }
        position.x = x;
        position.y = y;
        worldCanvas.repositionPlayer(x, y);
    }
}
