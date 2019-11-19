var Map = null;

function initializeMap() {
    /*
        Initializes the global "Map" variable as a 2D array
        using the  configuration information on the previous page
        and then switches to the "artifactPlacement" page in the HTML
        using the switchToPage method,
    */

    const rows = config.boardHeight;
    const columns = config.boardWidth;
    Map = new Array(columns);
    for(let i = 0; i < columns; ++i){
        Map[i] = new Array(rows);
    }

    for(let x = 0; x < columns; ++x){
        for(let y = 0; y < rows; ++y){
            Map[x][y] = null;
        }
    }

    switchToPage("artifactPlacement");
    return Map;
}
