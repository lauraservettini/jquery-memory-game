function resetGame(){
    console.log('reset');
    shuffleImages();
    moves = 0;
    imgMatchFound = 0;

    $('#moves').html(moves);
    $('#memory-game div img').hide(600);
}

$(document).ready(function(){
    $('#info .button').click(resetGame);
});