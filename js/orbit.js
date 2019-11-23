// When encountering a planet, a user is given the option to enter it's orbit which takes 1 turn and reduces supplies.

inOrbit = false; // true if spaceship is in orbit currently

function enterOrbit(planet) {
    if (confirm("Would you like to enter " + planet + "'s orbit?'")) {
        resources.subtractSuppliesTwo();
        if (resources.checkSupplies()) {
            disableShipMovement();
            inOrbit = true;
            if (confirm("Would you like to search for the strongbox?")) {
                searchForStrongbox();
            }
        }

    }
    else {
        enableShipMovement();
        inOrbit = false;
        return;
    }

}

function leaveOrbit(planet) {
    if (confirm("Would you like to leave " + planet + "'s orbit?'")) {
        resources.subtractSuppliesTwo();
        if (resources.checkSupplies()) {
            enableShipMovement();
            inOrbit = false;
        }
    }
    else {
        return;
    }
}
