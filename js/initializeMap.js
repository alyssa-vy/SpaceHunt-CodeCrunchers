var Map = null;

function initializeMap() {
    /*
        Initializes the global "Map" variable as a 2D array
        using the  configuration information on the previous page
        and then switches to the "artifactPlacment" page in the HTML
        using the switchToPage method,

        Includes an example for persistent state to be used later.
    */

    const rows = parseInt(config.boardHeight);
    const columns = parseInt(config.boardWidth);
    Map = new Array(columns);
    for(let i = 0; i < columns; ++i){
        Map[i] = new Array(rows);
    }

    for(let x = 0; x < columns; ++x){
        for(let y = 0; y < rows; ++y){
            Map[x][y] = null;
        }
    }

    /*
        Example for persistent state
        localStorage.setItem("Map", Map);
        let testMap = localStorage.getItem("Map");
     */

    switchToPage("artifactPlacement");
    return Map;
}
