function checkCollision(){
    /*
        Checks to see if the player (position object) is colliding with
        a celestial artifact in the 2D map array.
     */
    if(Map === null) return;
    if(Map[position.x][position.y] !== null){
        switch(Map[position.x][position.y]){
            case "Wormhole":
            case "SpaceStation":
            case "Asteroid":
                alert("You ran into a " + Map[position.x][position.y]);
                return true;
            default:
                alert("You ran into " + Map[position.x][position.y]);
                return true;
        }
    }
}