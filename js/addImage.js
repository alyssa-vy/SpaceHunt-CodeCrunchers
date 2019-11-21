// This function serves to relate an object (obj) with the document.createElement item (itm)
// Feel free to add another if statement for other objects so this isn't tied to just Celestial Artifacts

function addImage(item, obj) {
    if (obj == "Pentium 1")
        item.src = "img/pentium_1.jpg";
    else if (obj == "Pentium 2")
        item.src = "img/pentium_2.jpg";
    else if (obj == "Pentium 3")
        item.src = "img/pentium_3.jpg";
    else if (obj == "Pentium 4")
        item.src = "img/pentium_4.jpg";
    else if (obj == "Pentium 5")
        item.src = "img/pentium_5.jpg";
    else if (obj == "Pentium 6")
        item.src = "img/pentium_6.jpg";
    else if (obj == "Pentium 7")
        item.src = "img/pentium_7.jpg";
    else if (obj == "Celeron")
        item.src = "img/celeron.jpg";
    else if (obj == "Xeon")
        item.src = "img/xeon.jpg";
    else if (obj == "SpaceStation")
        item.src = "img/spacestation.jpg";
    else if (obj == "Asteroid")
        item.src = "img/asteroid.png";
    else if (obj == "Wormhole")
        item.src = "img/wormhole.jpg";


}
