//JS file for the asteroid celestial object

class Asteroid extends CelestialArtifact {
    constructor(id, imageSrc) {
        super(id, imageSrc);
    }

    interact() {
        alert("You have collided with an asteroid!");

        let prob = Math.floor(Math.random() * 10);

        if(prob < 9) {
            if(resources.isDamaged() === true && !config.godMode) {
                alert("You ship was already damaged and has now blown up...The game is now over.\n");
                gameOver();
            }
            else {
                alert("Your ship has been damaged and you will now use up energy 5 times as fast. Seek a repair station to repair your damaged ship.");
                resources.setDamaged(true);
            }
        }

        else {
            if(!config.godMode) {
                alert("This asteroid has blown up your ship... The game is now over.");
                gameOver();
            }
            else {
                alert("God mode has saved your ship from blowing up!");
            }
        }

    }
}
