var imgSrc = '';
var divId = '';

var moves = 0;
var imgMatchFound = 0;

function openCard(){
    var id = $(this).attr('id');
    if($('#' + id + ' img').is(':hidden')){
        $('#' + id + ' img').show('slow');
        if (divId === ''){
            divId = id;
            imgSrc = $('#' + id + ' img').attr('src');
        }
        else {
            
            var currentImgSrc = $('#' + id + ' img').attr('src');
            if( imgSrc !== currentImgSrc){
                var prevId = divId;

                setTimeout( function(){
                    $('#' + id + ' img').hide('slow');
                    $('#' + prevId + ' img').hide('slow');
                }, 600);

            }
            else {
                imgMatchFound++;
            }

            divId = '';
            imgSrc = '';
            
            moves++;
            $('#moves').html(moves);
        }
        

        if (imgArray.length == imgMatchFound){
            setTimeout(function(){
                alert('The game is finished! You have done ' + moves + ' moves to achieve the result! Click reset tu start again!')
            }, 600);
        }
    }
}

$(document). ready(function(){
    $('#memory-game div').click(openCard)
});