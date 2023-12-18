// Created by Kristina Russell - 12/17/2023 - kristina_russell@student.uml.edu
// Resources:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://jqueryui.com/ for the droppable/draggable/snappable interactions

// each letter is mapped to an array that contains
// information in this order value, startCount, currCount
const scrabbleTiles = new Map();
scrabbleTiles.set('A', [1, 9, 9]);
scrabbleTiles.set('B', [3, 2, 2]);
scrabbleTiles.set('C', [3, 2, 2]);
scrabbleTiles.set('D', [2, 4, 4]);
scrabbleTiles.set('E', [1, 12, 12]);
scrabbleTiles.set('F', [4, 2, 2]);
scrabbleTiles.set('G', [2, 3, 3]);
scrabbleTiles.set('H', [4, 2, 2]);
scrabbleTiles.set('I', [1, 9, 9]);
scrabbleTiles.set('J', [8, 1, 1]);
scrabbleTiles.set('K', [5, 1, 1]);
scrabbleTiles.set('L', [1, 4, 4]);
scrabbleTiles.set('M', [3, 2, 2]);
scrabbleTiles.set('N', [1, 6, 6]);
scrabbleTiles.set('O', [1, 8, 8]);
scrabbleTiles.set('P', [3, 2, 2]);
scrabbleTiles.set('Q', [10, 1, 1]);
scrabbleTiles.set('R', [1, 6, 6]);
scrabbleTiles.set('S', [1, 4, 4]);
scrabbleTiles.set('T', [1, 6, 6]);
scrabbleTiles.set('U', [1, 4, 4]);
scrabbleTiles.set('V', [4, 2, 2]);
scrabbleTiles.set('W', [4, 2, 2]);
scrabbleTiles.set('X', [8, 1, 1]);
scrabbleTiles.set('Y', [4, 2, 2]);
scrabbleTiles.set('Z', [10, 1, 1]);
scrabbleTiles.set('-', [0, 2, 2]);

// randomly generate a captial letter
function randMapKey() {
    var randLetter = String.fromCharCode(Math.floor(Math.random() * 26));
    return randLetter;
}
// <div id="chip1" class="ui-widget-content"><img src="graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg"></div>

// make each letter chip draggable
$(document).ready(function() {
//    for(var i = 1; i <= 7; i++){
//        var key = randMapKey();
//        var generatedTile = $("<div id='chip' class='ui-widget-content'></div>").data(randLetter).append("<img src='graphics_data/Scrabble_Tiles/Scrabble_Tile_" + key + ".jpg>");
//        generatedTile.appendTo("#draggables");
//    }

    $("#chip1, #chip2, #chip3, #chip4, #chip5, #chip6, #chip7").draggable();

    $("#tile1, #tile2, #tile3, #tile4, #tile5, #tile6, #tile7").droppable({
        accept: "#chip1, #chip2, #chip3, #chip4, #chip5, #chip6, #chip7",
        drop: function(event, ui) {
            // snap the draggable chips to the droppable tiles and then
            // some weird repositioning to get the chip to lay on top of the tile
            var draggable = ui.draggable;
            var droppable = $(this);
            draggable.appendTo(droppable).css({
                top: -165,
                left: 0,
            });
        }
    });
});
