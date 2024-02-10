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
                $('#modal-text').html('The game is finished!</br></br>You have done <strong>' + moves + ' moves</strong> to achieve the result!</br></br> Click reset to start again!')
                $('#modal').css('display', 'block');
            }, 600);
        }
    }
}

$(document). ready(function(){
    $('#memory-game div').click(openCard)

    $('#modal button').click(function(){
        $('#modal').hide(1000);
        // $('#modal').css('display', 'none');
    })
});