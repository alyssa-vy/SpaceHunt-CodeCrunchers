function initMap(){
    c = getConfig();
    m = new MapClass(c.boardWidth, c.boardHeight);
    document.getElementById("map").mapObject = m;
    m.draw();
}


class MapClass{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.cells = new Array(height);
        for (let i = 0; i < this.cells.length; i++)
            this.cells[i] = new Array(width);
        for (let i = 0; i < width; i++){
            for (let j = 0; j < height; j++){
                this.cells[i][j] = new MapCell();
            }
        }

    }

    addObject(cellObject, position){

    }

    removeObject(id){

    }

    move(id, angle, magnitude){

    }

    reposition(id, newPositon){

    }

    getObjectById(id){

    }

    draw(){

    }

}

class MapCell{
    constructor(){
        this.items = new Array(0);
    }

    getObjectById(id){
        for (let i = 0; i < this.items.length; i++){
            cellItem = this.items[i];
            if (cellItem.id === id)
                return cellItem[i];
        }
    }

    addObject(cellItem){
        this.items.append.push(cellItem);
    }

    removeObject(id){

    }
}

class CellObject{
    constructor(id, spriteSrc){
        this.element = document.createElement("img");
        this.element.src = spriteSrc;
        this.element.classList.add("cellObject");
        this.element.id = id;  // Could be source of problems if other elements have this ID
        this.element.cellObject = this;
        this.visited = false;
    }

    draw(){
        // Not the actual code, just messing around
        var gameMap = document.getElementById("map");
        gameMap.appendChild(this.element);
    }

    get id(){ return this.id; }
    get visited(){ return this.visited; }
    set visited(bool) { this.visitied = bool; }
}