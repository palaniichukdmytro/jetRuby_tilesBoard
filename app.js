"use strict";


var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'
    // "img/bag.png",
    // "img/bag.png",
    // "img/cocktail.png",
    // "img/cocktail.png",
    // "img/oxygen-tank.png",
    // "img/oxygen-tank.png",
    // "img/passport.png",
    // "img/passport.png",
    // "img/snorkel.png", "img/snorkel.png",
    // "img/sunglasses.png",
    // "img/sunglasses.png",
    // "img/sun-protection.png",
    // "img/sun-protection.png",
    // "img/swimsuit.png",
    // "img/swimsuit.png"
];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

Array.prototype.memory_tile_shuffle = function() {
    var i = this.length,
        j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}


function newBoard() {
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for (var i = 0; i < memory_array.length; i++) {
        output += '<div class="tiles" id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i] + '\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile, val) {
	
    if (tile.innerHTML == "" && memory_values.length < 2) {
    	
        tile.style.background = '#B5838D';
        tile.innerHTML = val;
        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if (memory_values[0] == memory_values[1]) {
                tiles_flipped += 2;
                

                // Clear both arrays
                memory_values = [];
                memory_tile_ids = [];
                // Check to see if the whole board is cleared
                if (tiles_flipped == memory_array.length) {
                    alert("Board cleared... generating new board");
                    document.getElementById('memory_board').innerHTML = "";
                    newBoard();
                }
            } else {
                function flip2Back() {
                    // Flip the 2 tiles back over
                    var tile_1 = document.getElementById(memory_tile_ids[0]);
                    var tile_2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = '#B5838D';
                    tile_1.innerHTML = "";
                    tile_2.style.background = '#B5838D';
                    tile_2.innerHTML = "";
                    // Clear both arrays
                    memory_values = [];
                    memory_tile_ids = [];
                }
                setTimeout(flip2Back, 700);
            }
        }
    }
}
newBoard();


// <img src="' + memory_array[i] + '" alt="g" />