var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

view.displayMiss("00");
view.displayHit("02");
view.displayMessage("tap, tap, tap");


// model is an object and the properties give us the state of the game
var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
            { locations: ["24", "34", "44"], hits: ["", "", ""] },
            { locations: ["10", "11", "12"], hits: ["", "", ""] }],

    fire: function(guess) {
        for(var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            // var location = ship.locations; // by using chaining we can get rid of this temporary variable and add it on the below line
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                if (this.isSunk(ship)) {
                    this.shipsSunk++;
                }
                return true;
            }
        }
        return false;
    },

    isSunk: function(ship) {
        for(var i=0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};


