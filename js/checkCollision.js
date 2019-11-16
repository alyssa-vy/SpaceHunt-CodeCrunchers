function checkCollision(){
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