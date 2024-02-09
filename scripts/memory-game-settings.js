var imgArray = [
    './images/flo1.jpeg',
    './images/flo2.jpg',
    './images/flo3.jpg',
    './images/flo4.jpeg',
    './images/flo5.jpeg',
    './images/flo6.jpeg',
    './images/flo7.jpeg',
    './images/flo8.jpg',
    './images/flo9.jpg',
    './images/flo10.jpeg'
];

function shuffleImages(){
    var len = imgArray.length*2;
    var imgArr = $.merge($.merge([],imgArray), imgArray);

    var currentDivChild = $('#memory-game div:first-child');

    for(var z = 0; z < len; z++){
        var randomNum = Math.round(Math.random()*(imgArr.length-1));
        $('#' + currentDivChild.attr('id') + ' img').attr('src', imgArr[randomNum]);
        imgArr.splice(randomNum, 1);
        currentDivChild = currentDivChild.next();
    }
}

$(document).ready(function(){
    for(var i=1 ; i<3 ; i++){
        $.each(imgArray, function(index, value){
            $('#memory-game').append('<div class="memory-tab" id="card' + i + index + '"><img src=' + value + ' /></div>') 
        });
    }

    shuffleImages();
});