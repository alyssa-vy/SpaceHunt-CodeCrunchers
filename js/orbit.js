// When encountering a planet, a user is given the option to enter it's orbit which takes 1 turn and reduces supplies.

function enterOrbit(planet) {
    if (confirm("Would you like to enter " + planet + "'s orbit?'")) {
        resources.subtractSuppliesTwo();
        if (resources.checkSupplies()) {

        }
    }

}

function leaveOrbit(planet) {
    if (confirm("Would you like to leave " + planet + "'s obrit?'")) {
        resources.subtractSuppliesTwo();
        if (resources.checkSupplies()) {

        }
    }
}
