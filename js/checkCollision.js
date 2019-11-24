function checkCollision(){
    /*
        Checks to see if the player (position object) is colliding with
        a celestial artifact in the 2D map array.
     */
    if(worldMap === null) return false;
    if (worldMap.objectExistsAtPosition(position.x, position.y)){
        var artifact = worldMap.getObjectAtCoordinates(position.x, position.y);
        artifact.interact();
        return true;
    }
    return false;
}
