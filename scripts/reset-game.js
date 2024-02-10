function resetGame(){
    $('#memory-game div img').hide(600);

    setTimeout( function(){
        shuffleImages();
    }, 600);

    moves = 0;
    imgMatchFound = 0;
    divId = '';
    imgSrc = '';
    
    $('#moves').html(moves);
}

$(document).ready(function(){
    $('.reset').click(resetGame);
});