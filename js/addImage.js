// This function serves to relate an obj.idect (obj.id) with the document.createElement item (itm)
// Feel free to add another if statement for other obj.idects so this isn't tied to just Celestial Artifacts

function addImage(item, obj) {
    if (obj.id === "Pentium-1")
        item.src = "img/pentium_1.jpg";
    else if (z === "Pentium-2")
        item.src = "img/pentium_2.jpg";
    else if (obj.id === "Pentium-3")
        item.src = "img/pentium_3.jpg";
    else if (obj.id === "Pentium-4")
        item.src = "img/pentium_4.jpg";
    else if (obj.id === "Pentium-5")
        item.src = "img/pentium_5.jpg";
    else if (obj.id === "Pentium-6")
        item.src = "img/pentium_6.jpg";
    else if (obj.id === "Pentium-7")
        item.src = "img/pentium_7.jpg";
    else if (obj.id === "Celeron")
        item.src = "img/celeron.jpg";
    else if (obj.id === "Xeon")
        item.src = "img/xeon.jpg";
    else if (obj.id === "SpaceStation")
        item.src = "img/spacestation.jpg";
    else if (obj.id === "Asteroid")
        item.src = "img/asteroid.png";
    else if (obj.id === "Wormhole")
        item.src = "img/wormhole.jpg";


}
