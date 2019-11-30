//JS file for the meteor celestial object

class Meteor extends CelestialArtifact {
    constructor(id, imageSrc) {
        super(id, imageSrc);
    }
    
    interact() {
        alert("You have flown through a meteor storm! Your ship has been damaged and you will now use up energy 5 times as fast. Seek a repair station to repair your damaged ship.");
    }
}
