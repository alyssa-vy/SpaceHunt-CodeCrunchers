class Eniac extends CelestialArtifact {
    constructor(id, imageSrc) {
        super(id, imageSrc);
    }

    interact() {
        if (!resources.hasStrongbox) {
            alert("Come back with the strongbox containing the ancient recipe for Koca-Kola in order to gain a zillion credits!");
        }
        else {
            alert("You've successfully returned the ancient recipe for Koca-Kola! The marketing department of the Koca-Kola company has rewarded you with a zillion credits!");
            gameWin();
        }
    }
}
