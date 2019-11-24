function checkCollision(){
    /*
        Checks to see if the player (position object) is colliding with
        a celestial artifact in the 2D map array.
     */
    if(Map === null) return false;
    if(Map[position.x][position.y] !== null){
        switch(Map[position.x][position.y]){
            case "Wormhole":
            case "SpaceStation":
            case "Asteroid":
                alert("You ran into a " + Map[position.x][position.y]);
                return true;
            default:
                //alert("You ran into " + Map[position.x][position.y]);
                celestial = document.createElement("img");
                addImage(celestial, Map[position.x][position.y])
                onPlanet = new Planet(Map[position.x][position.y], celestial); // for testing purposes!!
                onPlanet.enterOrbit();
                if (onPlanet.inOrbit == true) {
                    onPlanet.interact();
                    // if ship is in orbit -> let user choose to land on the planet and do planet things!!
                }
                return true;
        }
    }
    return false;
}
